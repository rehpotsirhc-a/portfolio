document.querySelectorAll('a').forEach(link => {
    if (link.getAttribute('href') && !link.getAttribute('href').startsWith('#')) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = href;
            }, 500); // Match animation duration
        });
    }
});