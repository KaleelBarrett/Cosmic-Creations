window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var cir = document.querySelector('.cir');
    var scrollPosition = window.scrollY;
    
    // Adjust the position of cir div
    if (scrollPosition > 100) { // Change this value as per your need
        cir.style.top = '50px'; // Adjust this value as per your need
    } else {
        cir.style.top = '10px'; // Adjust this value as per your need
    }
});