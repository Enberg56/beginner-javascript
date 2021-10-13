const s = document.querySelectorAll(`p`);
console.log(s);
const p = document.querySelector('p');
const divs = document.querySelectorAll('div');
console.log(p);
console.log(divs);

const heading = document.querySelector('h2');

heading.textContent = `Emil er best`;
console.log(heading.textContent);
console.log(heading.innerText);

const pizzaList = document.querySelector(`.pizza`);
console.log(pizzaList.textContent);

pizzaList.insertAdjacentText(`beforeend`, `🍕`);

const pic = document.querySelector(`.nice`);
pic.classList.add(`open`);
pic.classList.remove(`cool`);

function toggleRound() {
  pic.classList.toggle(`round`);
}
pic.addEventListener(`click`, toggleRound);

console.log(pic.classList);

pic.alt = 'cute pup';
pic.width = 200;

const customImg = document.querySelector(`.custom`);
console.log(customImg.dataset);

customImg.addEventListener(`click`, function () {
  alert(`welcome ${customImg.dataset.name} nice to meet you`);
});
