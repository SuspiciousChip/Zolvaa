document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-links a, .button');

  links.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      link.style.opacity = '0.8';
    });

    link.addEventListener('mouseleave', () => {
      link.style.opacity = '1';
    });
  });
});
