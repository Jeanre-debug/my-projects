let currentSlide = 0;

function showSlide(slideIndex) {
    const slides = document.querySelectorAll('.carousel-slide img');
    const totalSlides = slides.length;

    // Wrap the slide index when it goes out of bounds
    if (slideIndex >= totalSlides) {
        currentSlide = 0; // Go back to the first slide
    } else if (slideIndex < 0) {
        currentSlide = totalSlides - 1; // Go to the last slide
    } else {
        currentSlide = slideIndex;
    }

    // Calculate the offset to shift the slide container
    const offset = -currentSlide * 100; // Shift by 100% per slide
    document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Initialize the carousel to show the first slide
showSlide(currentSlide);
