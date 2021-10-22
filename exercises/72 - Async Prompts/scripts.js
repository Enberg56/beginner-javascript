
function ask(options) {
  const popup = document.createElement('form');
  // First we need to create a popup with all the fields in it
  popup.classList.add('popup');
  popup.insertAdjacentHTML('afterbegin',`
  <fieldset>
    <lable>${options.title}</lable>
  </fieldset>
  `);
  // check if they want a cancel button
  // listen for the submit event on the inputs
  // when someone does submit it, resolve the data that was in the input box!
  // insert that popup into the DOM
  // put a very small timeout before we add the open class
}
ask({ title: 'does this work' });
document.body.appendChild(popup);