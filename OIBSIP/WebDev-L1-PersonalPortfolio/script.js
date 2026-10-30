// Smooth scroll navigation between sections (progressive enhancement —
// the CSS `scroll-behavior: smooth` already covers most browsers;
// this adds an active-link highlight as the user scrolls).

const navLinks = document.querySelectorAll('.nav__links a');
const sections = Array.from(navLinks)
  .map(link => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

function setActiveLink() {
  const scrollPos = window.scrollY + 120;
  let currentId = sections[0]?.id;

  sections.forEach(section => {
    if (section.offsetTop <= scrollPos) {
      currentId = section.id;
    }
  });

  navLinks.forEach(link => {
    const isActive = link.getAttribute('href') === `#${currentId}`;
    link.style.color = isActive ? 'var(--mint)' : '';
  });
}

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);
