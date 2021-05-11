console.log('Hey');

let pet = 'cat';

console.log(pet.charAt('1')); // Going to log C due to index

pet[0] = 'r';
console.log(pet); // Going to log cat instead of rat, primitive datatypes are immutable.

pet = 'rat';

// Get learnt on autoboxing.


// This is an object literal. A combo of properties(keys) with keyvalues, respectively.
const person = {
    name: 'Trevor',
    isCool: true,
}

// Different syntax using a constructor, new.
const person = new Object{
    name: 'Trevor',
    isCool: true,
}

// Worth noting you can use variables for keyvalues.

const age = 30;

const person = new Object{
    name: 'Trevor',
    isCool: true,
    // age: age,
    age,
}

// The above is the shorthand syntax for defining a property in an object.
// Only works if the property and variable are matching characters.

// Two types of *object* notation to allow us to target information to update. This is "." notation.

const student = {
    first: 'Trevor',
    last: 'Lesley',
    age: 25,
    greeting: function () {
        console.log(`Hi, I'm ${this.first}`);
    }
}

// The this method points to the variable name, looks inside that object to find values.


student.age;
student.greeting();


student.first = 'Henry';
student.grade = 89;

student.greeting = `Hi, my name is ${this.first} ${this.last}.`;
student.greeting(); // 

delete student.last;

// This is the second *object* notation, square bracket notation. Used to access
// a property with a variable, or with spaces or dashes.

student['age'];

const input = 'age';
student[input];


// const name = 'Trevor';
// name = 'Peter';

// Can't do this, name has been defined as constant.

const student = {
    name: 'Justin Hathaway',
}

student.name = 'Justine Hathaway';

// CAN do this, the constant is student, not the key properties inside the const.

student = {
    name: 'Justine Hathaway';
}

// CAN'T do the above, because it's trying to change a constant variable.

const dog = Object.freeze({
    name: 'Charle',
    color: 'brown',
    isCool: true,
});


dog.name = 'Cha cha';
console.log(dog.name);

const person = {
    name: 'Sally',
    dog: {
        name: 'Charlie',
    }
}


person { }
person.dog { }
person.dog.name string

console.log(person.dog.name);
console.log(person.cat.name);

// Using a question mark acts as an 'if', very new.

console.log(person.cat?.name);


// Fat arrow functions use global scope, regardless of if it's in a function.

let name1 = 'Charlie';
let name2 = 'Joey';

console.log(name1 === name2); //false

name2 = 'Charlie';

console.log(name1 === name2); //true

name1 = name2;
console.log(name1 === name2); //true

let person1 = {
    name: 'Charlie',

}

let person2 = {
    name: 'Joey',
}

console.log(person1 === person2); //false
// This is false because they are different objects, regardless of if their keys
// are identical.

let person1 = {
    name: 'Charlie',

}

let person1 = person2;

console.log(person1 === person2); //true
// This is true because person1 object is = to person2 object.

person2.name = "Joey";
console.log(person1.name); // Joey
// This prints Joey because the name key has been redefined to Joey instead of Charlie.

let person1 = {
    name: 'Charlie',
}


let person2 = { ...person1 }; // This populates person2 with the keys of person1.
// Note that after this, person2 values can still be updated, without altering the
// values of person1.


let person1 = {
    name: 'Charlie',
    pet: {
        type: 'dog',
        name: 'Mady',
    }
}

let person2 = { ...person1 };

person1.pet.name = 'Madison';
person2.name = 'Sally';

console.log(person1.name); // Charlie
console.log(person2.name); // Sally

console.log(person1.pet.name); // Madison
console.log(person2.pet.name); // Madison
// person2 pet name is the same as person1 because person2 is copying person1 keys.

// let person2 = Object.assing({}, person1);

let obj1 = { name: 'Charlie' };
let obj2 = { age: 11 };
let obj3 = { ...obj1, ...obj2 }; // Can also add in extra keys in this curly.

// let obj3 = {...obj1, ...obj2, color: 'brown'};

let obj1 = { name: 'Charlie', color: 'white', breed: 'mixed' };
let obj2 = { age: 11, breed: 'mutt' };
let obj3 = { ...obj1, ...obj2, color: 'brown' };

// The key pair that gets spread in LAST is the key that gets printed.

let name = 'Mady';

function doStuff(name) {
    name = 'Charlie';
    console.log(name); //Charlie
}

doStuff(name);
console.log(name); // Mady

let dog = {
    name: 'Charlie',
    isHungry: true,
}

function doStuff(dog) {
    doStuff.isHungry = false;
    console.log(dog.isHungry); // false
}

doStuff(dog);
console.log(dog.isHungry); // also false
// The original object <isHungry> has been mutated from true to false from the
// function above.

// Looking at arrays.

const empty = [];
const movies = ['Toy Story', 'Godzilla'];

// Arrays are zero indexed, values can be any data type.

movies[1]; // Would return 'Godzilla', since index is zero based.

movies[3] = 'Monster\'s Inc.';
console.log(movies); // ['Toy Story', 'Godzilla', empty, 'Moster's Inc.']


// Below is how to reverse an array without permanently mutating the original arr.

function reverseArray(arr) {
    const result = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }

    return result;
}

const empty = [];
const moveis = ['Toy Story', 'Toy Story 2', 'A Bug\'s Life', 'Monster\'s Inc.', 'Incredibles', 'Finding Nemo',]

const index = movies.indexOf('Toy Story 2')

// MAPS

const map = new Map();
map.set('key', 'value');
map.set('name', 'Sally');

map.get(); // Used to select map entries.

map.has() // Returns a boolean.

map.delete(); // Deletes a map entry.

// SETS

const colors = new Set();

const teachers = new Set(['Mady'], ['Taylor']);

const dogs = ['Charlie', 'Daisy', 'Flip'];
const dogsSet = new Set(dogs);

// Different ways to intialize a set, with and without using an array.

dog.add('Peanut');
console.log(dogs);
console.log(dogsSet);
console.log(dogsSet.size); // 4

dogsSet.add('Peanut');
console.log(dogsSet.size); // Still 4
console.log(dogsSet);

dogsSet.has('Peanut'); // Returns boolean
dogsSet.delete('Daisy'); // Removes elements from the set.

dogsSet.clear(); // Removes all elements from the set.

console.log(dogsSet.keys());
console.log(dogsSet.values());
console.log(dogsSet.entries());

//  Sets only have values, so the key method returns the value instead of the key.

const values = dogsSet.values();
console.log(values.next());
console.log(values.next());
console.log(values.next());
console.log(values.next());


for (const dog of dogsSet) {
    console.log(dog);
}

for (const dog of dogsSet) {
    console.log(dog);
}

dogsSet.forEach(function (dog) {
    console.log(dog);
})