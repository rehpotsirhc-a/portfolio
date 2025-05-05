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
        button.innerText = "Set Everything to Green";
    } else {
        container.classList.remove("blue-theme");
        button.innerText = "Set Everything to Blue";
    }
});