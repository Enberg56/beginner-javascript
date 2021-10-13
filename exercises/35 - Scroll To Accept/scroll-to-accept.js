const watch = document.querySelector('.watch');
const terms = document.querySelector('.terms-and-conditions');
const button = document.querySelector('.accept');

function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    ob.unobserve(terms.lastElementChild);
  }
}
const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1,
});
ob.observe(terms.lastElementChild);

/// / Old way to do it ----------------
// function scrollToAccept() {

// if (!terms) {
// return;
// }

// console.log(terms);
// terms.addEventListener('scroll', function (e) {
// const scrollLocation = e.currentTarget.scrollTop;
// console.log(scrollLocation);
// if (scrollLocation > 1200) {
/// / button.enable;
// }
// });
// }

// scrollToAccept();
