document.addEventListener('scroll', function() {
    const cirContainer = document.querySelector('.cir-container');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (scrollPosition > 100) {
        cirContainer.style.top = '5%';  // Adjust top position when scrolling down
    } else {
        cirContainer.style.top = '10%';  // Reset top position when at the top of the page
    }
});