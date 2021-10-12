const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

window.addEventListener(
  'click',
  function (event) {
    console.log('you clicked the window');
    console.log(event.target);
    console.log(event.type);
    console.log(event.bubbles);
  },
  { capture: true }
);
butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', handleClick);

butts.removeEventListener('click', handleClick);
function handleClick() {
  console.log('IT GOT CLICKED!!!!!!!!');
}

function buyItem() {
  console.log('BUYING ITEM');
}

// arrow function for a listener. This is referencable... one can reach it from the oustide
const hooray = () => console.log('HOORAY!');
coolButton.addEventListener('click', hooray);

const buyButtons = document.querySelectorAll('button.buy');

function handleByButtonClick(e) {
  const button = e.target;
  // console.log(button.textContent);
  // console.log(parseFloat(e.target.dataset.price));
  console.log(e.target);
  console.log(e.currentTarget);
  console.log(e.target === e.currentTarget);
  // stop this event from bubbling up
  e.stopPropagation();
}

buyButtons.forEach(function (buybutton) {
  buybutton.addEventListener('click', handleByButtonClick);
});
