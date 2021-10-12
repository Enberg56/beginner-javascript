// // const dinnerPrice = 50;
// // const tax = 10;

// function CalculateBill(dinerPrice, tax) {
//   console.log(`Running Calculate Bill!`);
//   // const youpay = dinerPrice + (dinnerPrice / 100) * tax;
//   const youPayNow = 100 * 1.13;
//   console.log(youPayNow);
//   return youPayNow;
// }
// console.log(CalculateBill);

// CalculateBill();
// console.log(youPayNow);

// // function definition
// function calculateBill() {
//   // this is the function body
//   console.log('Running Calculate Bill!!');
//   const total = 100 * 1.13;
//   console.log(total);
//   return total;
// }
// // function call or function invocation
// const myTotal = calculateBill();
// console.log(
//   `This is a message with a value inside ${myTotal} thats cool right`
// );

// -------------- next try for my own fanzy function

// const abil = 1000;
// const atax = 7;

// function howMuchToPay(bil, tax) {
//   const youpay = bil + (bil / 100) * tax;
//   return youpay;
// }

// const iPay = howMuchToPay(abil, atax);
// console.log(`This is what i pay ${iPay}`);

// ------------- New Function example

function sayHiTo(imMeeting) {
  return `Hello ${imMeeting}`;
}
const peter = sayHiTo(`Peter`);
console.log(peter);

const wes = {
  name: 'Wes Bos',
  sayHi() {
    console.log('Hey wes!');
    return 'Hey Wes!';
  },
};
