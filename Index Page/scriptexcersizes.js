let lastScrollTop = 0; // Keeps track of the last scroll position
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScrollTop) {
    // If scrolling down, hide the navbar
    navbar.classList.add('hidden');
  } else {
    // If scrolling up, show the navbar
    navbar.classList.remove('hidden');
  }

  lastScrollTop = currentScroll; // Update the last scroll position
});