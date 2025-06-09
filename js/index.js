window.addEventListener('init', () => {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log(`Loaded in ${loadTime}ms`);
});
