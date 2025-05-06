document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById("everything");
    const button = document.querySelector(".tog");

    // Smooth page transition
    document.body.classList.add('fade-in');

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

    // Theme handling
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "blue") {
        container.classList.add("blue-theme");
    } else {
        container.classList.remove("blue-theme");
    }
    button.innerText = "Touch me!";

    button.addEventListener('click', () => {
        container.classList.toggle("blue-theme");
        localStorage.setItem("theme", container.classList.contains("blue-theme") ? "blue" : "green");
        button.innerText = "Touch me!";
    });

    // Carousel logic
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentSlide = 0;

    function changeSlide() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === currentSlide) {
                slide.classList.add('active');
            }
        });
    }

    prevButton?.addEventListener('click', () => {
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        changeSlide();
    });

    nextButton?.addEventListener('click', () => {
        currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
        changeSlide();
    });

    changeSlide();
});

document.body.offsetHeight; // Trigger reflow