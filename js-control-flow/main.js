// if(something truthy) {
//   do something
// }

if (1) {
    console.log(`I'm truthy!`);
}

// if (something true) {
//     // something true
// } else {
//     // something false
// }

if (something = true) {
    // true condition
    console.log(`I'm truth!`);
} else {
    // condition is NOT true (false)
    console.log(`I'm falsey!`);
}

if (something = truthy) {
    // do something
    console.log(`I'm truthy!`)

} else if (something = truthy) {
    // do something
} else if (something = truthy) {
    // do something
}

if (true || (true && true)) {
    // do something
}

if (true || (true && false)) {
    // do something
}

const student = {
    name: 'Sally',
}

if (student) {
    // do something
}

if (0) {
    // won't fire, 0 is falsey
}

if (!0) {
    // will fire, single bang flips truthy/falsey value
}

// if you want to coerce a value to its boolean, double bang (!!)

// coercing usually returns either true or false depending on the boolean value

// ternary example is below

// condition ? if true : if false;

let isCold, temp = 74;
temp < 74 ? isCold = true : isCold = false;
console.log(isCold);

// convert this if statement to a ternary

let word, count = 0;
if (count === 1) {
    word = 'like';
} else {
    word = 'likes';
}

count === 1 ? word = 'like' : word = 'likes';



function sayHello() {
    console.log('Hello');
}

function sayGoodbye() {
    console.log('Goodbye');
}

let isLeaving = true;

isLeaving ? sayGoodbye() : sayHello();

// remember, conditions are defined by whether they are truthy or falsey

if ('Sally') {
    // do something
    console.log('Sally')

} else if (53) {
    // do something
} else if (null) {
    // do something
}

const name = 'Sally';

switch (name) {
    case 'Mady':
        console.log('Hi, Mady');
        break;
    case 'Kate':
        console.log('Hi, Kate');
        break;
    case 'Esteban':
        console.log('Hi, Esteban');
        break;
}


