

//Carousel promociones
document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner-promo');
    const carouselItems = document.querySelectorAll('.carousel-item-promo');
    const indicators = document.querySelectorAll('.indicator-promo');
    const prevBtn = document.getElementById('prev-btnPromo');
    const nextBtn = document.getElementById('next-btnPromo');
    let currentIndex = 0;
    let itemsPerView = getItemsPerView();

    function getItemsPerView() {
        if (window.innerWidth < 480) return 1;
        if (window.innerWidth < 768) return 2;
        if (window.innerWidth < 1024) return 3;
        return 4;
    }

    function updateCarousel() {
        const offset = -currentIndex * (100 / itemsPerView);
        carouselInner.style.transform = `translateX(${offset}%)`;
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - itemsPerView;
        updateCarousel();
    });

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex < carouselItems.length - itemsPerView) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            currentIndex = index;
            updateCarousel();
        });
    });

    window.addEventListener('resize', function() {
        const newItemsPerView = getItemsPerView();
        if (newItemsPerView !== itemsPerView) {
            itemsPerView = newItemsPerView;
            updateCarousel();
        }
    });

    updateCarousel();
});