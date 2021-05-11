// function greeting(name) {
//   console.log('Howdy ' + name + '!');
//
//   console.log(this);
//   console.log(arguments);
// }
//
// greeting('TK');
//

// What is your input? And where does it come from?

// What is your output? And what are you doing with it?

// Write a purpose statement.

// Write a contract, that states a function's name, names and types of the
// parameters and return value.

// function description
// parameter description
// return description

// function name(parameter) {
//
// }

// Calculate the square of a number
// num is the Number to square
// return the square

// function square(num) {
//   return Math.pow(num, 2);
// }

// console.log(square(60));
// console.assert(square(2) === 7, 'Square of 2 is not 7');
// console.assert(square(-1) === 1);
//
//
// function calcTip(bill, tipRate = 0.2) {
//   console.log(bill * tipRate);
// }

// calcTip(100);



// let num1 = 10;
// let num2 = 20;
//
// function sum(num1, num2) {
//   console.log(num1 + num2);
// }
//
// sum(10, 20);
//
//
//
// const sum = function(num1, num2) {
//   console.log(num1 + num2);
// }
//
//
// const sum = (num1, num2) => {
//   return num1 + num2;
// }
//
// const sum + (num1, num2) => num1 + num2;
//
//
// const student = (name, favColor, pet) =>
//    ({
//     name: name,
//     favColor: favColor,
//     pet: pet,
//   })
//
// function demo1() {
//   console.log(this);
// }
//
// const demo2 = () => {
//   console.log(this);
// }

// const button = document.querySelector('button');
// console.log(button);

// button.addEventListener('click', () => console.log(this));

// const greeting + function() {
//   console.log('Hi!');
// }
//
// button.addEventListener('click', greeting);
//
//
// defaults({isHungry = false, hasFur = true} = {}) {
//   if(isHungry) {
//     console.log('I want tacos!');
//   }
//
//   if(hasFure) {
//     console.log('It is hot in here!');
//   }
// }
//
// defaults();



function outer() {
  const outerVar = `Hey, I am the outer var!`;

  function inner() {
    const innerVar = `Hey, I am the inner var!`;
    console.log(innerVar);
    console.log(outerVar);
  }

  return inner;
}
const innerFn = outer();
innerFn();



function createGreeting(greeting = 'hello') {
  greeting = greeting[0].toUpperCase() + greeting.slice(1);
  return function(name) {
    return `${greeting}, ${name}!`
  }
}


const sayHi = createGreeting('hi');
const sayGoodbye = createGreeting('goodbye');
const sayHola = createGreeting('hola');



console.log(sayHi('Charlie'));
console.log(sayHola('Daisy'));
console.log(sayGoodbye('Sarah'));




function recursion() {
  if(condition) {
    // stop calling
  } else {
    recursion();
  }
}


function countDown(fromNumber) {
  console.log(fromNumber);

  let nextNumber = fromNumber - 1;
  if(nextNumber > 0) {
    countDown(nextNumber);
  }
}

countDown(10);

// (function(name) {
//   console.log(`Hey, ${name}`);
// })(there);

// Wrap anonymous functions in parentheses.
