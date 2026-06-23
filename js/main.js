// ============================================================
// SMOOTH SCROLLING
// Handles smooth scroll for all navigation links
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ============================================================
// ACTIVE NAV LINK HIGHLIGHT
// Highlights the current section in the navigation bar
// as the user scrolls down the page
// ============================================================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function() {
  let current = '';
  sections.forEach(function(section) {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(function(link) {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--teal)';
    }
  });
});