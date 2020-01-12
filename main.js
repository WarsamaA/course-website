// window.addEventListener('scroll', function() {
//   const parallax = document.querySelector('.parallax');
//   let scrollPosition = window.pageYOffset;
//   console.log(scrollPosition);
//   parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
// });

window.addEventListener('scroll', () => {
  const parallax = document.querySelector('.parallax');

  let scrollPosition = window.pageYOffset;
  console.log(scrollPosition);
  // console.log('height of the window is ' + window.outerHeight);
  // console.log('width of the window is' + window.outerWidth);

  parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});

let width = window.outerWidth;
const px = 'px';
// console.log(width);
width < 600
  ? console.log('its mobile version')
  : console.log('wuu ka waynyahay mobile version');
