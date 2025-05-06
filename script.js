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

        // Force reflow before fade-out
        void document.body.offsetWidth;

        document.body.classList.add('fade-out');

        requestAnimationFrame(() => {
            setTimeout(() => {
                window.location.href = this.href;
            }, 500);
        });
    });
});

    // Apply theme
    const storedTheme = localStorage.getItem("theme");
    const container = document.getElementById("everything");
    const button = document.querySelector(".tog");

    if (storedTheme === "blue") {
        container.classList.add("blue-theme");
        button.innerText = "Set Everything to Green";
    } else {
        container.classList.remove("blue-theme");
        button.innerText = "Set Everything to Blue";
    }

    button.addEventListener('click', () => {
        if (container.classList.contains("blue-theme")) {
            container.classList.remove("blue-theme");
            button.innerText = "Set Everything to Blue";
            localStorage.setItem("theme", "green");
        } else {
            container.classList.add("blue-theme");
            button.innerText = "Set Everything to Green";
            localStorage.setItem("theme", "blue");
        }
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