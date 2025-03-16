let lastScrollTop = 0; 
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScrollTop) {
    
    navbar.classList.add('hidden');
  } else {

    navbar.classList.remove('hidden');
  }

  lastScrollTop = currentScroll;
});