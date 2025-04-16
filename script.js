document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Form validation
    document.getElementById("contact-form").addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Message Sent Successfully!");
    });
});

