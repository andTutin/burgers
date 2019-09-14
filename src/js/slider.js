;(function() {
    const prevSlide = document.querySelector('.slider__prev');
    const nextSlide = document.querySelector('.slider__next');
    const sliderWindow = document.querySelector('.slider__window');
    const sliderList = document.querySelector('.slider__list');
    const slides = document.querySelectorAll('.slide');
    let minRight = 0;
    let step = window.getComputedStyle(sliderWindow).width;
    for (var element of slides) {
        element.style.width = step;
    }

    let maxRight = (slides.length - 1) * parseInt(step);
    let currentRight = 0;
    sliderList.style.right = currentRight + 'px';
    function leftMove() {
        if (currentRight > minRight) {
            currentRight -= parseInt(step);
            sliderList.style.right = currentRight + 'px';
        } else {
            currentRight = maxRight;
            sliderList.style.right = maxRight + 'px';
        }
    }
    function rightMove() {
        if (currentRight < maxRight) {
            currentRight += parseInt(step);
            sliderList.style.right = currentRight + "px";
        } else {
            currentRight = minRight;
            sliderList.style.right = minRight + "px";
        }
    }
    prevSlide.addEventListener('click', function(e) {
        e.preventDefault();
        leftMove();
    });
    nextSlide.addEventListener('click', function(e) {
        e.preventDefault();
        rightMove();
    });
})()