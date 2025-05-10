document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById("everything");
    const button = document.querySelector(".tog");

    // Smooth page transition
    document.body.classList.add('fade-in');

    // Apply fade-in-up animation to all p and a elements
    const elementsToAnimate = Array.from(document.querySelectorAll('p, a')).filter(el => !el.closest('#footer'));

    elementsToAnimate.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('fade-in-up');
        }, index * 80); // Stagger the animations slightly
    });

    const links = document.querySelectorAll('#footer a');
    links.forEach(link => {
        if (!link.href || link.getAttribute("href").startsWith("#")) return;

        link.addEventListener('click', function (e) {
            e.preventDefault();
            document.body.classList.remove('fade-in');
            document.body.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = this.href;
            }, 480);
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
    changeSlide(); // Ensures the first slide is visible on load


    function changeSlide() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'slide-in');
            if (index === currentSlide) {
                slide.classList.add('active');
                // Trigger slide-in animation
                void slide.offsetWidth; // Force reflow to restart animation
                slide.classList.add('slide-in');
            }
        });
    }
    

    prevButton?.addEventListener('click', () => {
        lastInteractionTime = Date.now();
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        changeSlide();
    });
    
    nextButton?.addEventListener('click', () => {
        lastInteractionTime = Date.now();
        currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
        changeSlide();
    });

    // Auto scroll every 5 seconds
    setInterval(() => {
        const now = Date.now();
        if (now - lastInteractionTime >= 10000) { // 10 seconds
            currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
            changeSlide();
        }
    }, 5000); // still checks every 5 seconds
});

window.addEventListener('resize', () => {
    changeSlide(); // Update position on window resize
});
document.body.offsetHeight; // Trigger reflow

let lastInteractionTime = Date.now();
