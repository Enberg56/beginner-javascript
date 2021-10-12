console.log('It Works');
const item = document.querySelector('.item');
item.innerHTML = `<h1>Hey How are you?</h1>`;
console.log(item.innerHTML);

const src = `https://picsum.photos/200`;
const desc = 'Cute pup';
const myHTML = `
<div class="wrapper">
<h2>Cute ${desc}</h2> 
<img src="${src}" alt="${desc}" srcset="">
</div>
`;

// item.innerHTML = myHTML;

// const itemImage = document.querySelector('.wrapper img');
// itemImage.classList.add('round');

const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment);

myFragment.querySelector('img');

document.body.insertAdjacentElement('afterbegin', myFragment);
