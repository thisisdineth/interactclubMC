// Fade in sections on scroll and show menu bar
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const header = document.getElementById('header');

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerBottom = window.innerHeight / 5 * 4;

        if (sectionTop < triggerBottom) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });

    // Show menu bar when scrolling down
    if (window.scrollY > window.innerHeight - 50) {
        header.style.top = '0'; // Show header
    } else {
        header.style.top = '-100px'; // Hide header
    }
});
