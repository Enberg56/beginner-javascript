console.log('it works');
// Make a div
const myDiv = document.createElement('div');
// add a class of wrapper to it
myDiv.classList.add(`wrapper`);
// put it into the body
document.body.append(myDiv);
// make an unordered list
const myUl = document.createElement('ul');
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
const myLi1 = document.createElement('li');
myLi1.textContent = 'one';
myUl.appendChild(myLi1);

const myLi2 = document.createElement('li');
myLi2.textContent = 'two';
myUl.appendChild(myLi2);

const myLi3 = myLi1.cloneNode(true);
myLi3.textContent = 'three';
myUl.appendChild(myLi3);

document.body.insertAdjacentElement('afterbegin', myUl);
// create an image

const myImage = document.createElement('img');
// set the source to an image
myImage.src = 'https://picsum.photos/500';
// set the width to 250
myImage.width = 250;
// add a class of cute
myImage.classList.add('cute');
// add an alt of Cute Puppy
myImage.alt = 'Cute Puppy';
// Append that image to the wrapper
myDiv.appendChild(myImage);
// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above

const twoPs = `<div class = "deletable">
<p>This is the first P</p>
<p>The secound P is this</p>
</div>
`;
myUl.insertAdjacentHTML(`afterbegin`, twoPs);

// add a class to the second paragraph called warning
// remove the first paragraph

const twoPsDIV = document.body.querySelector('.deletable');
twoPsDIV.children[1].classList.add('warning');
twoPsDIV.firstElementChild.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const html = `<div class = "playerCard">
    <h2>${name} - ${age}</h2>
    <p>They are ${height} and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!</p>
  <button class="delete" type="button">Delete</button>
    </div> `;

  return html;
}
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
// make 4 player cards using generatePlayerCard
let cardsHTML = generatePlayerCard('Emil', 15, 180);
cardsHTML += generatePlayerCard('Frida', 12, 175);
cardsHTML += generatePlayerCard('Wes', 10, 140);

cards.innerHTML = cardsHTML;
myDiv.insertAdjacentElement('beforebegin', cards);

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
const buttons = document.querySelectorAll('.delete');
// select all the buttons!
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  buttonThatGotClicked.closest('.playercard').remove();
}
// make out delete function
// loop over them and attach a listener
buttons.forEach((button) => button.addEventListener('click', deleteCard));
