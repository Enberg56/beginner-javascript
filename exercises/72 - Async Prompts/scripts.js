function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
async function destroyPopup(popup){
popup.classList.remove('open');
await wait(1000);
popup.remove();
  // remove the popup entirely
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
    if (options.cancle) {
      const skipButton = document.createElement('button');
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      popup.firstElementChild.appendChild(skipButton);
    };

    // listen for the submit event on the inputs
    popup.addEventListener(
      'submit',
      function (e) {
        e.preventDefault();
        console.log('SUBMITTED');
        resolve(e.target.input.value);
        console.log(e.target.input.value);
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

ask({ title: 'does this work', cancle: true });