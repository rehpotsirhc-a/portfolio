document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById("everything");
    const button = document.querySelector(".tog");

    document.body.classList.add('fade-in');

    const elementsToAnimate = Array.from(document.querySelectorAll('p, a')).filter(el => !el.closest('#footer'));
    elementsToAnimate.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('fade-in-up');
        }, index * 80);
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

    // Theme toggle
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "blue") {
        container.classList.add("blue-theme");
    }
    button.innerText = "Touch me!";
    button.addEventListener('click', () => {
        container.classList.toggle("blue-theme");
        localStorage.setItem("theme", container.classList.contains("blue-theme") ? "blue" : "green");
    });

    // Carousel
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentSlide = 0;
    let lastInteractionTime = Date.now();

    function changeSlide() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'slide-in');
            if (index === currentSlide) {
                slide.classList.add('active');
                void slide.offsetWidth;
                slide.classList.add('slide-in');
            }
        });
    }

    changeSlide();

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

    setInterval(() => {
        const now = Date.now();
        if (now - lastInteractionTime >= 10000) {
            currentSlide = (currentSlide + 1) % slides.length;
            changeSlide();
        }
    }, 5000);

    // Hover events
    document.querySelectorAll('#textprog > div').forEach((projectDiv) => {
        const index = parseInt(projectDiv.getAttribute('data-index'), 10);
        if (!isNaN(index)) {
            projectDiv.addEventListener('mouseenter', () => {
                currentSlide = index;
                changeSlide();
                lastInteractionTime = Date.now();
            });
        }
    });

    // Resize event inside DOMContentLoaded
    window.addEventListener('resize', () => {
        changeSlide();
    });
});
