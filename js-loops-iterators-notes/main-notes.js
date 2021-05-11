//  for loops

// When you want to increment/decrement by more than 1
// When you want to return early

for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}

for (let i = 100; i >= 2; i -= 2) {
    console.log(i);
}

const numbers = [2, 34, 3, 23, 42, 3, 1, 65];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//  for...of loops
// creates a loop over iterable property values

for (const number of numbers) {
    console.log(number);
}

const name = 'Gavin Figueruelo';
let reverseName = '';

for (const letter of name) {
    console.log(letter);
    reverseName = letter + reverseName;
}

const numbers = [2, 34, 3, 23, 42, 3, 1, 65];

// [0,2]
// [1,34]
// [2,3]
// ...

for (const [index, number] of numbers.entries()) {
    // [0,2]
    // let index = 0;
    // let number = 2;

    console.log(index);
    console.log(number);
}

const student = {
    name: 'Sally',
    age: 100,
    isCool: true,
}

for (const prop in student) {
    console.log(prop);
}

// To access the values in the key value pair:

for (const prop in student) {
    console.log(prop, student[prop]);
}

// While statements

let cool = true, i = 1;

while (cool === true) {
    console.log('You are cool.');
    i++;
    if (i > 100) {
        cool = false; // Triggers exit condition.
    }
}

// Do...while statements. Similar to while statements, but does the first loop BEFORE the first while statement check.

let check = false;

do {
    statement
} while (check); // Runs only once.

let i = 0;

do {
    i += 1;
    console.log(i);
} while (i < 5); // Runs five times.

////////// Array iterator functions

// forEach

[1, 2, 3].forEach(function (number) {
    console.log(number);
});

const copy = [];

[1, 2, 3].forEach(function (number) {
    copy.push(number);
});

const reverse = [];

[1, 2, 3].forEach(function (number) {
    reverse.unshift(number);
});

// map

const doubles = [1, 2, 3].map(function (num) {
    return num * 2;
});

// [2,4,6]
// Assigns this new array to the value `doubles`.

// USE MAP TO RETURN EACH ITEM IN AN ARRAY. Doesn't mutate the original array, but creates a new array.

const numbers = [1, 4, 9];
const roots = numbers.map(Math.sqrt);
Math.sqrt(1); // 1
Math.sqrt(4); // 2
Math.sqrt(9); // 3

// [1, 2, 3]


// filter

// Returns a NEW array with only the items that meet the criteria.

[1, 2, 3].filter(function (num) {
    return num >= 2;
});

// [2, 3]

[1, 2, 3].filter(num => num >= 2);

[1, 2, 3].filter(num => {
    return num >= 2
});


// Reduce method
// Returns a single value, that being the addition of every number together.

[1, 2, 3, 4, 5].reduce(function (total, current) {
    // 1+2=3;
    // 3+3=6;
    // 6+4=10;
    // 10+5=15;
    return total + current; // returns 15
});

[1, 2, 3, 4, 5].reduce(function (total, current) {
    // 2+1=3;
    // 3+2=5;
    // 5+3=8;
    // ...
    return total + current; // returns 17
}, 2); // This 2 is implemented as the first total of the loop.


