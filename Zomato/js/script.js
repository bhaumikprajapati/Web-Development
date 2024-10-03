document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.hero input');
    const navLinks = document.querySelectorAll('header ul li a');

    searchInput.addEventListener('focus', function() {
        this.style.borderColor = '#d32f2f';
        this.style.boxShadow = '0 0 15px rgba(211, 47, 47, 0.7)';
        this.style.width = '350px';
    });

    searchInput.addEventListener('blur', function() {
        this.style.borderColor = '#ccc';
        this.style.boxShadow = 'none';
        this.style.width = '300px';
    });

    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = '#ffeb3b';
        });

        link.addEventListener('mouseout', function() {
            this.style.color = 'white';
        });
    });
});