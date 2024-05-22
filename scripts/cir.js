document.addEventListener('DOMContentLoaded', () => {
    const cir = document.querySelector('.cir');
    const links = cir.querySelectorAll('a');

    // Function to check if viewport width is below a certain threshold
    function isSmallScreen() {
        return window.innerWidth >= 600; // Adjust the threshold as needed
    }

    // Function to handle mouse enter event
    function handleMouseEnter() {
        // Remove existing labels
        links.forEach(l => {
            const existingLabel = l.querySelector('.label');
            if (existingLabel) {
                l.removeChild(existingLabel);
            }
        });

        // Create and insert the label
        const label = document.createElement('span');
        label.className = 'label';
        label.textContent = this.getAttribute('data-label');
        this.appendChild(label);

        // Adjust the width of the .cir container if on a small screen
        if (isSmallScreen()) {
            cir.style.width = '400px';
        }
    }

    // Function to handle mouse leave event
    function handleMouseLeave() {
        // Remove the label
        const label = this.querySelector('.label');
        if (label) {
            this.removeChild(label);
        }

        // Reset the width of the .cir container if on a small screen
        if (isSmallScreen()) {
            cir.style.width = '300px';
        }
    }

    // Attach or remove event listeners based on screen size
    if (isSmallScreen()) {
        // Attach event listeners for small screens
        links.forEach(link => {
            link.addEventListener('mouseenter', handleMouseEnter);
            link.addEventListener('mouseleave', handleMouseLeave);
        });
    } else {
        // Remove event listeners for large screens
        links.forEach(link => {
            link.removeEventListener('mouseenter', handleMouseEnter);
            link.removeEventListener('mouseleave', handleMouseLeave);
        });
    }

    // Re-attach event listeners when the window is resized
    window.addEventListener('resize', () => {
        if (isSmallScreen()) {
            // Attach event listeners for small screens
            links.forEach(link => {
                link.addEventListener('mouseenter', handleMouseEnter);
                link.addEventListener('mouseleave', handleMouseLeave);
            });
        } else {
            // Remove event listeners for large screens
            links.forEach(link => {
                link.removeEventListener('mouseenter', handleMouseEnter);
                link.removeEventListener('mouseleave', handleMouseLeave);
            });
        }
    });
});
