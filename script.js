/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log('23');

let firstName = 'Matilda';

console.log(firstName);
console.log(firstName);
console.log(firstName);

//Variable name convention
let jonas_matilda = 'JM';
let $function = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);

true;
console.log(javaScriptIsFun);
let javaScriptIsFun = true;

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

let year;
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Shmedtmann';
console.log(lastName);


//Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3  means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann'
console.log(firstName + ' ' + lastName);

//Assignment Operators
let x = 5 + 10;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1
x--

console.log(x);

//Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;



const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018)

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
console.log(now - 1991 > now - 2018);



//Strings and Template Literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = '1991';
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);



//Taking Decisions: if/else statements
const age = 15;
// const isOldEnough = age >= 18;

if (age >= 18) {
    console.log(`Sarah can start driving license 🚗`)
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}

const birthYear = 1991;
let century;

if (birthYear < 2000) {
    century = '20th';
} else {
    century = '21st';
}

console.log(century);

//Type Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

//Type Coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' / '2');

// Guess the Output
let n = '1' + 1; // '11'
n = n - 1; // 10
console.log(n);

*/

// Falsy Value: 0, '', undefined, null, NaN
// Every other value will be Truthy i.e. will be True when converted to a Boolean

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

// When does JS do type coercion to Booleans?
// 2 cases: 
// 1. when using logical operators
// 2. in a logical context like the condition of if/else statement

const money = 10;

if (money) {
    console.log(`Don't spend it all 😉`)
} else {
    console.log(`You should get a job!`)
};

let height;
height = 0;
if (height) {
    console.log(`Yay! Height is defined`)
} else {
    console.log(`Height is UNDEFINED`)
};
// issue when checking if number variables are defined: 0 is a falsy value, so if the value of a variable is 0 you might mistakenly believe that the variable is undefined.