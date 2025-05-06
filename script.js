document.addEventListener('DOMContentLoaded', () => {
    // Fade in on load
    document.body.classList.add('fade-in');

    // Smooth page transition
    const links = document.querySelectorAll('#footer a');
    links.forEach(link => {
        if (!link.href || link.getAttribute("href").startsWith("#")) return;

        link.addEventListener('click', function (e) {
            e.preventDefault();
            document.body.classList.remove('fade-in');
            document.body.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = this.href;
            }, 500);
        });
    });

    // Apply theme
    const storedTheme = localStorage.getItem("theme");
    const container = document.getElementById("everything");
    const button = document.querySelector(".tog");

    if (storedTheme === "blue") {
        container.classList.add("blue-theme");
    } else {
        container.classList.remove("blue-theme");
    }
    button.innerText = "Touch me!";

    button.addEventListener('click', () => {
        container.classList.toggle("blue-theme");
        localStorage.setItem("theme", container.classList.contains("blue-theme") ? "blue" : "green");
        button.innerText = "Touch me!"; // Always keep the label
    });

});

document.addEventListener('DOMContentLoaded', () => {
    // Initial fade-in
    document.body.classList.add('fade-in');

    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentSlide = 0;

    // Function to change the active slide
    function changeSlide() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === currentSlide) {
                slide.classList.add('active');
            }
        });
    }

    // Previous button functionality
    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        changeSlide();
    });

    // Next button functionality
    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
        changeSlide();
    });

    // Initialize the carousel
    changeSlide();
});

document.body.offsetHeight; // Trigger reflow
document.body.classList.add('fade-out');