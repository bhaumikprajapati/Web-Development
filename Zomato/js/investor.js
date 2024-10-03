document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('header ul li a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = '#ffeb3b';
        });

        link.addEventListener('mouseout', function() {
            this.style.color = 'white';
        });
    });
});