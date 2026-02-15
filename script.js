document.addEventListener('DOMContentLoaded', () => {
    // Select the hamburger button and the menu links
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Add click event to toggle the menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});