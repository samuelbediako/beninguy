  document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');

    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    // Toggle menu
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent the document click listener from firing
      navLinks.classList.toggle('show');
    });

    // Close menu on click outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('show');
      }
    });

    // Page fade transitions & close menu on link click
    document.querySelectorAll('#navLinks a[href]:not([target])').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        navLinks.classList.remove('show'); // Close menu
        const url = this.getAttribute('href');
        document.body.classList.remove('fade-in');
        document.body.classList.add('fade-out');
        setTimeout(() => {
          window.location.href = url;
        }, 400);
      });
    });
  });
