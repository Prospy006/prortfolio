//https://tenor.com/moVX2QjMGtk.gif


// fade in crap
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.overview, .about, .works, .work-panel, .skills, .contact, .line-divider').forEach(el => {
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
    const overviewText = document.querySelector('.overview-text');
    const about = document.querySelector('.about');
    const aboutText = document.querySelector('.about-text');
    const works = document.querySelector('.works');
    const workPanel = document.querySelector('.work-panel');
    const skills = document.querySelector('.skills');
    const contact = document.querySelector('.contact');
    

    if (window.innerWidth < 1200) {
        lander && lander.classList.add('small-screen');
        title && title.classList.add('small-screen');
        comment && comment.classList.add('small-screen');
        lineDivider && lineDivider.classList.add('small-screen');
        aboutWrapper && aboutWrapper.classList.add('small-screen');
        overview && overview.classList.add('small-screen');
        overviewText && overview.classList.add('small-screen');
        about && about.classList.add('small-screen');
        aboutText && overview.classList.add('small-screen');
        works && works.classList.add('small-screen');
        workPanel && workPanel.classList.add('small-screen');
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
        overviewText && overview.classList.remove('small-screen');
        about && about.classList.remove('small-screen');
        aboutText && overview.classList.remove('small-screen');
        works && works.classList.remove('small-screen');
        workPanel && workPanel.classList.add('small-screen');
        skills && skills.classList.remove('small-screen');
        contact && contact.classList.remove('small-screen');
        console.log('small-screen disabled');
    }
}
window.addEventListener('resize', updateResponsiveClass);
document.addEventListener('DOMContentLoaded', updateResponsiveClass);

// twemoji import
document.addEventListener("DOMContentLoaded", function() {
    twemoji.parse(document.body);
});

// lenis
const lenis = new Lenis({
    lerp: 0.06,
    smooth: true,
    direction: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    smoothTouch: false
});

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// removed scroll restoration
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
    const html     = document.documentElement;
    const body     = document.body;
    const scroller = document.scrollingElement || html || body;

    // kill scrolling
    lenis.stop();
    lenis.scrollTo(0, { immediate: true });
    scroller.scrollTop = 0;
    window.scrollTo(0, 0);

    // lock html
    html.style.position = 'fixed';
    html.style.top      = '0';
    html.style.left     = '0';
    html.style.width    = '100%';
    html.style.height   = '100%';
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';

    // unlock html
    setTimeout(() => {
        html.style.position = '';
        html.style.top      = '';
        html.style.left     = '';
        html.style.width    = '';
        html.style.height   = '';
        html.style.overflow = '';
        body.style.overflow = '';

        // revive scrolling
        lenis.start();
    }, 3000);
});





async function runSecretCode() {
    const userCode = prompt("Enter the secret code:");
    const response = await fetch("https://api.github.com/repos/Prospy006/prortfolio/actions/workflows/validate-code.yml/dispatches", {
        method: "POST",
        headers: {
            "Authorization": "Bearer <x>",
            "Accept": "application/vnd.github+json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ref: "main",
            inputs: {
                user_code: userCode
            }
        })
    });

    if (response.ok) {
        alert("workflow trigger works");
    } else {
        alert("failure");
    }
}






// DEPRECATED fade in crap
/*
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
