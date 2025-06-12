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
    const allDivs = document.querySelectorAll('div');

    if (window.innerWidth < 1200) {
        allDivs.forEach(div => div.classList.add('small-screen'));
        console.log('small-screen enabled');
    } else {
        allDivs.forEach(div => div.classList.remove('small-screen'));
        console.log('small-screen disabled');
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