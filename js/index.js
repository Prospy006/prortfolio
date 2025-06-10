document.addEventListener('DOMContentLoaded', () => {
    console.log('web DOM CONTENT loaded');
});
window.addEventListener('load', () => {
    console.log('site loaded');
});
function updateResponsiveClass() {
    if (window.innerWidth < 600) { // Set your threshold here
        document.body.classList.add('small-screen');
    } else {
        document.body.classList.remove('small-screen');
    }
}

window.addEventListener('resize', updateResponsiveClass);
document.addEventListener('DOMContentLoaded', updateResponsiveClass);