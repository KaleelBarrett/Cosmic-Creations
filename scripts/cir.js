document.addEventListener('DOMContentLoaded', () => {
    const cir = document.querySelector('.cir');
    const links = cir.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
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
            label.textContent = link.getAttribute('data-label');
            link.appendChild(label);

            // Adjust the width of the .cir container
            cir.style.width = '400px';
        });

        link.addEventListener('mouseleave', () => {
            // Remove the label
            const label = link.querySelector('.label');
            if (label) {
                link.removeChild(label);
            }

            // Reset the width of the .cir container
            cir.style.width = '300px';
        });
    });
});
