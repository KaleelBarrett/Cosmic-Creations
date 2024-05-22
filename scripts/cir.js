document.addEventListener('DOMContentLoaded', () => {
    const cir = document.querySelector('.cir');
    const links = cir.querySelectorAll('a');

    function isSmallScreen() {
        return window.innerWidth <= 600;
    }

    function handleMouseEnter() {
        const label = this.querySelector('.label');
        if (label) {
            label.style.opacity = '1';
            label.style.marginTop = '5px';
        }

        if (!isSmallScreen()) {
            cir.style.width = '400px';
        }
    }

    function handleMouseLeave() {
        const label = this.querySelector('.label');
        if (label) {
            label.style.opacity = '0';
            label.style.marginTop = '0';
        }

        if (!isSmallScreen()) {
            cir.style.width = '300px';
        }
    }

    function addHoverListeners() {
        links.forEach(link => {
            link.addEventListener('mouseenter', handleMouseEnter);
            link.addEventListener('mouseleave', handleMouseLeave);
        });
    }

    function removeHoverListeners() {
        links.forEach(link => {
            link.removeEventListener('mouseenter', handleMouseEnter);
            link.removeEventListener('mouseleave', handleMouseLeave);
        });
    }

    if (!isSmallScreen()) {
        addHoverListeners();
    }

    window.addEventListener('resize', () => {
        if (!isSmallScreen()) {
            addHoverListeners();
        } else {
            removeHoverListeners();
        }
    });
});
