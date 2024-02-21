`use strict`;

function logger() {
    console.log('My name is Ayush');
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(2002);
console.log(age1);

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(2002);

console.log(age1, age2);

//Arrow function

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(2002);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge3(birthYear);
    const retirement = 65 - age;
    return `${firstName} will retire in ${retirement} years`;
}

console.log(yearsUntilRetirement(2002, "Ayush"));