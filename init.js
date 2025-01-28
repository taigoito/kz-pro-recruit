/**
 * Init
 * Author: Taigo Ito (https://qwel.design/)
 * Location: Fukui, Japan
 */

// G Nav behavior
const header = document.getElementById('gNav');
const breakpoint = 750;

window.addEventListener('scroll', () => {
  if ( window.innerWidth > breakpoint && window.scrollY > 0) {
    header.classList.add('gNav--active');
  } else {
    header.classList.remove('gNav--active');
  }
});

