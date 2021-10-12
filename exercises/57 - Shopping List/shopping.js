// Grabbing the whole form

const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');
// Setting up an array for items
let items = [];

//   handeling the submitt button creating content
function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;

  if (!name) return;
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  items.push(item);
  // stuff
  console.log(`There are now ${items.length} items in the list`);
  e.target.reset();
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

// render out a list of all of the shopping items
function displayItems() {
  const html = items
    .map(
      (item) => `<li class='shopping-item'> 
    <input 
      type='checkbox' 
      value="${item.id}" 
      ${item.complete ? 'checked' : ''}
    > 
    <span class='itemName'>${item.name}</span> 
    <button aria-label="remove ${item.name}" 
    value="${item.id}">&times;</button>
    </li>`
    )
    .join('');
  list.innerHTML = html;
}

function mirrorToLocalStorage() {
  console.info('Saving items to localstorage');
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
  console.info('Restoring from LS');
  // pull the items from LS
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems.length) {
    // items = lsItems;
    // lsItems.forEach(item => items.push(item));
    // items.push(lsItems[0], lsItems[1]);
    items.push(...lsItems);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function deleteItem(id) {
  console.log('deleting item', id);
  items = items.filter((item) => item.id !== id);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

// keep track of all of the shopping list items and whether or not they are complete

function markAsComplete(id) {
  console.log('Tis done');
  const itemRef = items.find((item) => item.id === id);
  itemRef.complete = !itemRef.complete;
  console.log(itemRef);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}
// listen for when someone types into the input and hits the submit button
shoppingForm.addEventListener('submit', handleSubmit);

list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
list.addEventListener('click', function (e) {
  const id = parseInt(e.target.value);
  if (e.target.matches('button')) {
    deleteItem(id);
  }
  if (e.target.matches('input[type="checkbox"]')) {
    markAsComplete(id);
  }
  console.log(e);
});
restoreFromLocalStorage();
