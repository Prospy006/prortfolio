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

    document.querySelectorAll('.overview, .about, .skills, .contact').forEach(el => {
        observer.observe(el);
    });
});
// mobile accessibility
function updateResponsiveClass() {
    if (window.innerWidth < 1200) {
        document.about-wrapper.classList.add('small-screen');
        document.overview.classList.add('small-screen');
        document.about.classList.add('small-screen');
        document.skills.classList.add('small-screen');
        document.contact.classList.add('small-screen');
    } else {
        document.about-wrapper.classList.remove('small-screen');
        document.overview.classList.remove('small-screen');
        document.about.classList.remove('small-screen');
        document.skills.classList.remove('small-screen');
        document.contact.classList.remove('small-screen');
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