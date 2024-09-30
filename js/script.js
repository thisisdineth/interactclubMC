document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const heroLogo = document.querySelector('.hero-logo');
    const navLogo = document.querySelector('.nav-logo');
    const navTitle = document.querySelector('.nav-title');
    
    // Show menu bar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
            navTitle.style.opacity = '1';
        } else {
            navbar.classList.remove('scrolled');
            navTitle.style.opacity = '0';
        }
    });
});
