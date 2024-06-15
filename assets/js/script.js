document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    let slideInterval = setInterval(showSlides, 6000); // Thay đổi hình ảnh mỗi 3 giây

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        for (i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].classList.add("active");
    }

    
    // Hàm hiển thị slide cụ thể
    function currentSlide(n) {
        clearInterval(slideInterval);
        slideIndex = n - 1;
        showSlides();
        slideInterval = setInterval(showSlides, 4000);
    }
    
    // Hàm hiển thị slide tiếp theo
    function plusSlides(n) {
        clearInterval(slideInterval);
        let slides = document.getElementsByClassName("mySlides");
        slideIndex += n - 1;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        } else if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        showSlides();
        slideInterval = setInterval(showSlides, 3000);
    }
    
    
    // Gắn các trình nghe sự kiện cho các nút dot
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function() {
            currentSlide(i + 1);
        });
    }
    
    // Gắn các trình nghe sự kiện cho các nút prev và next
    document.querySelector(".prev").addEventListener("click", function() {
        plusSlides(-1);
    });
    
    document.querySelector(".next").addEventListener("click", function() {
        plusSlides(1);
    });
    
    
    showSlides(); // Gọi ban đầu để hiển thị slide đầu tiên
});

document.addEventListener("DOMContentLoaded", function() {
    const giftLists = document.querySelectorAll('.list-gift');
    
    giftLists.forEach(function(giftList) {
        const giftItems = giftList.querySelectorAll('.gift-item');
        const giftWrapper = giftList.querySelector('.gift');
        const btnPrev = giftList.querySelector('.prev-gift');
        const btnNext = giftList.querySelector('.next-gift');
        const dots = giftList.querySelectorAll('.dots-gift-container .dot-gift');
        let currentIndex = 0;
        let itemsToShow = 5; // Default number of items to show
        let itemWidth;
        let slideInterval;

        function makeSlide() {
            const containerWidth = giftWrapper.offsetWidth;
            itemWidth = (containerWidth - (itemsToShow - 1) * 8) / itemsToShow;
            giftItems.forEach(item => {
                item.style.width = `${itemWidth}px`;
            });
        }

        function updateSlider() {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1366) {
                itemsToShow = 5;
            } else if (screenWidth >= 992) {
                itemsToShow = 4;
            } else if (screenWidth >= 768) {
                itemsToShow = 3;
            } else {
                itemsToShow = 2;
            }
            makeSlide();
            showSlidesGift(currentIndex);
        }

        function showSlidesGift(n) {
            const totalItems = giftItems.length;
            const maxIndex = Math.max(totalItems - itemsToShow, 0);

            if (n > maxIndex) {
                n = maxIndex;
            } else if (n < 0) {
                n = 0;
            }

            currentIndex = n;
            const endIndex = n + itemsToShow;

            giftItems.forEach((item, index) => {
                if (index >= n && index < endIndex) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });

            updateDots();
        }

        function updateDots() {
            const totalItems = giftItems.length;
            const totalSlides = Math.ceil(totalItems / itemsToShow);

            dots.forEach((dot, i) => {
                dot.classList.remove('active-gift');
            });

            const activeIndex = Math.floor(currentIndex / itemsToShow);
            if (currentIndex + itemsToShow >= totalItems) {
                dots[totalSlides - 1].classList.add('active-gift');
            } else {
                dots[activeIndex].classList.add('active-gift');
            }
        }

        function plusSlidesGift(n) {
            clearInterval(slideInterval);
            currentIndex += n;
            if (currentIndex >= giftItems.length) {
                currentIndex = 0;
            } else if (currentIndex < 0) {
                currentIndex = giftItems.length - 1;
            }
            showSlidesGift(currentIndex);
            slideInterval = setInterval(() => plusSlidesGift(1), 3000);
        }

        btnNext.addEventListener('click', function() {
            plusSlidesGift(1);
        });

        btnPrev.addEventListener('click', function() {
            plusSlidesGift(-1);
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                showSlidesGift(index * itemsToShow);
            });
        });

        window.addEventListener('resize', updateSlider);
        updateSlider();
        slideInterval = setInterval(() => plusSlidesGift(1), 3000);
    });
});



document.addEventListener('DOMContentLoaded', function () {
    var zaloButton = document.querySelector('.contact .zalo');
    var telButton = document.querySelector('.contact .telephone');

    zaloButton.addEventListener('click', createRipple.bind(this, zaloButton));
    telButton.addEventListener('click', createRipple.bind(this, telButton));

    function createRipple(button, event) {
        var ripple = document.createElement('div');
        ripple.classList.add('ripple');
        button.appendChild(ripple);

        var rect = button.getBoundingClientRect();
        var rippleSize = Math.max(rect.width, rect.height) * 2;

        ripple.style.width = ripple.style.height = rippleSize + 'px';
        ripple.style.left = event.clientX - rect.left - rippleSize / 2 + 'px';
        ripple.style.top = event.clientY - rect.top - rippleSize / 2 + 'px';

        setTimeout(function () {
            ripple.remove();
        }, 1000);
    }
});


// Hiển thị nút cuộn lên khi trang được cuộn xuống 20px
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollTopBtn").style.display = "none";
    }
}

// Cuộn trang lên đầu khi nút được bấm
function scrollTopFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const homeIcon = document.querySelector('.ti-home');
    const closeModal = document.querySelector('.ti-close');
    const listMenuMobile = document.querySelector('.list-menu-mobile');

    homeIcon.addEventListener('click', () => {
        modal.classList.add('show');
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    });

    listMenuMobile.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal-list-gift');
    const barsGift = document.querySelector('.bars-gift');
    const closeModal = document.querySelector('.ti-close-1');
    const listMenuMobile = document.querySelector('.list-menu-mobile');

    barsGift.addEventListener('click', () => {
        modal.classList.add('show');
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    });

    listMenuMobile.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});

window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    if (window.scrollY <= 150 && window.scrollY > 100) {
        header.classList.add('visible');
    } else if (window.scrollY > 150) {
        setTimeout(function() {
            header.classList.add('shrink');
        }, 100); // Add a delay of 500ms before adding 'shrink' class
    } else {
        header.classList.remove('visible');
        header.classList.remove('shrink');
    }
});

// Ensure the header is hidden when the page loads
document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('.header');
    header.classList.remove('visible');
    header.classList.remove('shrink');
});


