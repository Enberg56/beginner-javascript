function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}

// async function draw(el) {
//   let soFar = '';
//   const text = el.textContent;
//   const { typeMin, typeMax } = el.dataset;

//   for (const letter of text) {
//     soFar += letter;
//     el.textContent = soFar;
//     const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
//     await wait(amountOfTimeToWait);
//   }
// }

function draw(el) {
  let index = 1;
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;

  async function drawLetter() {
    el.textContent = text.slice(0, index);
    index += 1;
    const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);

    //exit condition
    await wait(amountOfTimeToWait);

    if (index <= text.length) {
      drawLetter();
    }
  }

  drawLetter();
}

document.querySelectorAll('[data-type]').forEach(draw);