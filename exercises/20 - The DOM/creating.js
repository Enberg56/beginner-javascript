const myParagraph = document.createElement('p');
myParagraph.textContent = 'Hello I freestyling';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'Nice photo';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = 'Cool things';
myDiv.insertAdjacentElement('afterbegin', heading);

const list = document.createElement('ul');

// creating a 5 item list the hard way

// const li = document.createElement('li');
// li.textContent = 'one';
// const li2 = document.createElement('li');
// li2.textContent = 'two';
// const li3 = document.createElement('li');
// li3.textContent = 'three';
// const li4 = document.createElement('li');
// li4.textContent = 'four';
// const li5 = document.createElement('li');
// li5.textContent = 'five';

// list.appendChild(li);
// list.appendChild(li2);
// list.appendChild(li3);
// list.appendChild(li4);
// list.appendChild(li5);

// creating the 5 item list another way

const li = document.createElement('li');
li.textContent = 'three';
list.appendChild(li);

const li5 = document.createElement('li');
li5.textContent = 'Five';
list.append(li5);

const li1 = li5.cloneNode(true);
li1.textContent = 'one';
list.insertAdjacentElement('afterbegin', li1);

const li4 = document.createElement('li');
li4.textContent = 'Four';
li5.insertAdjacentElement('beforebegin', li4);

const li2 = document.createElement('li');
li2.textContent = 'Two';
li1.insertAdjacentElement('afterend', li2);

document.body.insertAdjacentElement('afterbegin', list);
