// nerd crap
document.addEventListener('DOMContentLoaded', () => {
    console.log('web DOM CONTENT loaded');
});
window.addEventListener('load', () => {
    console.log('site loaded');
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

// fade in for overview & about
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.overview, .about').forEach(el => {
        observer.observe(el);
    });
});