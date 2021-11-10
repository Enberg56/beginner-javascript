function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
async function destroyPopup(popup){
popup.classList.remove('open');
await wait(1000);
// remove the popup entirely
popup.remove();
  myPopup = null;
};

async function ask(options) {
  return new Promise(async function (resolve) {
    // First we need to create a popup with all the fields in it
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML(
      "afterbegin",
      `<fieldset>
        <lable>${options.title}</lable>
        <input type ="text" name="input"/>
        <button type="submit">Submit</button>
      </fieldset>
    `
    );

    // check if they want a cancel button
    if (options.cancel) {
      const skipButton = document.createElement('button');
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      popup.firstElementChild.appendChild(skipButton);
      skipButton.addEventListener(
        'click',
        function(){
          resolve(null);
          destroyPopup(popup);
      },
      {once:true}
      );
    };

    // listen for the submit event on the inputs
    popup.addEventListener(
      'submit',
      function (e) {
        e.preventDefault();
        console.log('SUBMITTED');
        resolve(e.target.input.value);
        // remove it from the DOM entirely
        destroyPopup(popup);
      },
    {once:true}
    );

    // when someone does submit it, resolve the data that was in the input box!
    // insert that popup into the DOM
    // put a very small timeout before we add the open class

    document.body.appendChild(popup);

    await wait(50);
    popup.classList.add('open'); setTimeout(function () { }, 50);
  });
}

// ask({ title: 'does this work', cancle: true });

async function askQuestion(e) {
  const button = e.currentTarget;
  const cancel = 'cancel' in button.dataset;

  const answer = await ask({
    title: button.dataset.question,
    cancel,
  });
  console.log(answer);

}

const buttons = document.querySelectorAll('[data-question]');
buttons.forEach(button => button.addEventListener('click',askQuestion));

const questions = [
  { title: 'What is your name?' },
  { title: 'What is your age?', cancel: true },
  { title: 'What is your dogs name?' },
]
// ----- Not what we want, this creates all the poppups at once.
// Promise.all(questions.map(ask)).then(data => {
//   console.log(data);
// });

async function askMany() {
  for (const question of questions) {
    u
    const answer = await ask(question);
    console.log(answer);
  }
}
askMany();