//https://tenor.com/moVX2QjMGtk.gif

document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in-module');

    const observerOptions = { //crap which fades in trigger
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
            else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});
// mobile accessibility
function updateResponsiveClass() {
    if (window.innerWidth < 600) {
        document.body.classList.add('small-screen');
    } else {
        document.body.classList.remove('small-screen');
    }
}
window.addEventListener('resize', updateResponsiveClass);
document.addEventListener('DOMContentLoaded', updateResponsiveClass);