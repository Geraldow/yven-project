function moveToSelected(element) {

    var selected = $(".selected");
    var next = selected.next().length ? selected.next() : $('#carousel div:first');
    var prev = selected.prev().length ? selected.prev() : $('#carousel div:last');

    selected.removeClass().addClass("prev");
    next.removeClass().addClass("selected");
    prev.removeClass().addClass("next");
  }
  function autoChange() {
    // Llama a moveToSelected con 'next' para avanzar automáticamente
    moveToSelected('next');
}


var interval = setInterval(autoChange, 3000);

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('#nextBtn');
const prevButton = document.querySelector('#prevBtn');
const indicators = document.querySelectorAll('.carousel-indicators button');
const slideWidth = slides[0].getBoundingClientRect().width;

let currentSlide = 0;

// Arrange the slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const updateIndicators = (currentIndex) => {
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === Math.floor(currentIndex / 4));
    });
};

const moveToSlide = (track, currentSlide, targetSlideIndex) => {
    track.style.transform = 'translateX(-' + slideWidth * targetSlideIndex + 'px)';
    currentSlide = targetSlideIndex;
    updateIndicators(currentSlide);
};

// When I click next, move slides to the left
nextButton.addEventListener('click', e => {
    currentSlide = (currentSlide + 1) % slides.length;
    moveToSlide(track, currentSlide, currentSlide);
});

// When I click prev, move slides to the right
prevButton.addEventListener('click', e => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    moveToSlide(track, currentSlide, currentSlide);
});

// When I click an indicator, move to that slide
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', e => {
        const targetIndex = index * 4;
        moveToSlide(track, currentSlide, targetIndex);
        currentSlide = targetIndex;
    });
});

// Initial update for indicators
updateIndicators(currentSlide);