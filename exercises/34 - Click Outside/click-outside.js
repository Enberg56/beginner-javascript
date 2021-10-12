// Gathering needed items

const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleCardButtonClick(event) {
  //  getting variables
  const button = event.currentTarget;
  const card = button.closest('.card');
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;

  //  Changing inner card variables
  modalInner.innerHTML = `
  <img width="600" height="600" src="${imgSrc.replace(
    '200',
    '600'
  )}" alt="${name}"/>
  <p>${desc}</p>
  `;
  // Opening and closeing the modal
  modalOuter.classList.add('open');
  //  debuging ------------------
  console.log(desc);
}

function closeModal() {
  modalOuter.classList.remove('open');
}

//  Adding listeners
cardButtons.forEach((button) =>
  button.addEventListener('click', handleCardButtonClick)
);
modalOuter.addEventListener('click', function (event) {
  const isOutside = !event.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});
window.addEventListener('keydown', (event) => {
  console.log(event);
  if (event.key === 'Escape') {
    closeModal();
  }
});
