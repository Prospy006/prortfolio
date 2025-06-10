//https://tenor.com/moVX2QjMGtk.gif

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.overview, .about').forEach(el => {
        observer.observe(el);
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

/*
DEPRECATED fade in crap

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.overview, .about').forEach(el => {
        observer.observe(el);
    });
});
*/ 