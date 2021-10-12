console.log(`World, tis I`);

// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// This is an annonymus function

// function(firstName) {
//   return `Dr. ${firstName}`;
// }

// function expression
// const doctorize = function (firstName) {
//   return `Dr. ${firstName}`;
// };
// console.log(doctorize(`Wes`));

// ------------------ making arrow functions, step by step the next three functions are the same.. more or less

// function inchToCM(inches) {
//   const cm = inches * 2.54;
//   return cm;
// }

// const inchToCM = (inches) => {
//   return inches * 2.54;
// };

// const inchToCM = inches => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }
// const a = 3;

// const addition = (a, b = 3) => a + b;

// console.log(addition);

// (function () {
//   console.log('Running the Anon function');
//   return `You are cool`;
// })();

const wes = {
  name: 'Wes Bos',
  // Method!
  sayHi: function sayHi() {
    console.log('Hey Wes!');
    return 'Hey Wes!';
  },
  // Short hand Method
  yellHi() {
    console.log(this);
  },
  // Arrow function
  whisperHi: () => {
    console.log('hiii wess im a mouse');
  },
};

const button = document.querySelector(`.clickMe`);

function handleClick() {
  console.log('Great clicking!!');
}
button.addEventListener('click', handleClick);
