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
    const lander = document.querySelector('.lander');
    const title = document.querySelector('.title');
    const comment = document.querySelector('.comment');
    const lineDivider = document.querySelector('.line-divider');
    const aboutWrapper = document.querySelector('.about-wrapper');
    const overview = document.querySelector('.overview');
    const about = document.querySelector('.about');
    const skills = document.querySelector('.skills');
    const contact = document.querySelector('.contact');
    

    if (window.innerWidth < 1200) {
        lander && lander.classList.add('small-screen');
        title && title.classList.add('small-screen');
        comment && comment.classList.add('small-screen');
        lineDivider && lineDivider.classList.add('small-screen');
        aboutWrapper && aboutWrapper.classList.add('small-screen');
        overview && overview.classList.add('small-screen');
        about && about.classList.add('small-screen');
        skills && skills.classList.add('small-screen');
        contact && contact.classList.add('small-screen');
        console.log('small-screen enabled');
    } else {
        lander && lander.classList.remove('small-screen');
        title && title.classList.remove('small-screen');
        comment && comment.classList.remove('small-screen');
        lineDivider && lineDivider.classList.remove('small-screen');
        aboutWrapper && aboutWrapper.classList.remove('small-screen');
        overview && overview.classList.remove('small-screen');
        about && about.classList.remove('small-screen');
        skills && skills.classList.remove('small-screen');
        contact && contact.classList.remove('small-screen');
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