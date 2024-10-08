let slideNumber = 0;
let startSlidingX = 0;
let endSlidingX = 0;
const allImg = document.querySelectorAll('.gallery-content__img');
const fullScreenGallery = document.querySelector('.gallery-full-screen');
const fullScreenImage = document.querySelector('.gallery-full-screen__content');
const closeBtn = document.querySelector('.gallery-full-screen__close');
const backBtn = document.querySelector('.gallery__back');
const nextBtn = document.querySelector('.gallery__next');

allImg.forEach((img, index) => {
    img.addEventListener('click', function () {
        fullScreenGallery.style.display = "flex";
        fullScreenImage.src = this.src;
        slideNumber = index;
    });
});

closeBtn.addEventListener('click', () => {
    fullScreenGallery.style.display = "none";
});

fullScreenGallery.addEventListener("click", (event) => {
    if (event.target === fullScreenGallery) {
        fullScreenGallery.style.display = "none";
    }
});

backBtn.addEventListener('click', () => {
    changeSlide(slideNumber - 1);
});

nextBtn.addEventListener('click', () => {
    changeSlide(slideNumber + 1);
});

fullScreenImage.addEventListener('touchstart', (event) => {
    startSlidingX = event.touches[0].clientX;
});

fullScreenImage.addEventListener('touchend', (event) => {
    
    endSlidingX = event.changedTouches[0].clientX;

    if (Math.abs(startSlidingX - endSlidingX) > 50) {
        if (startSlidingX > endSlidingX) {
            changeSlide(slideNumber + 1);
        } else {
            changeSlide(slideNumber - 1);
        }
    }
});

function changeSlide(index) {
    if (index < 0) {
        fullScreenImage.src = allImg[allImg.length - 1].src;
        slideNumber = allImg.length - 1;
    }
    else if (index >= allImg.length) {
        fullScreenImage.src = allImg[0].src;
        slideNumber = 0;
    }
    else {
        fullScreenImage.src = allImg[index].src;
        slideNumber = index;
    }
}