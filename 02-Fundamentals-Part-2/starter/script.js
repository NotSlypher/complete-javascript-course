`use strict`;

// function logger() {
//     console.log('My name is Ayush');
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(2002);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(2002);

// console.log(age1, age2);

// //Arrow function

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(2002);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = calcAge3(birthYear);
//     const retirement = 65 - age;
//     return `${firstName} will retire in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(2002, "Ayush"));

// const cutPieces = function (fruit) {
//     return fruit;
// };

// const calcAge = birthyear => 2037 - birthyear;
// const years = [1990, 2321, 2144];

// for (let i = 0; i < years.length; i++) {
//     console.log(calcAge(years[i]));

// }

const friends = ['Ayush', 'pat', 'mat'];
console.log(friends.push('tat'));
console.log(friends);

friends.unshift('lat');
console.log(friends);

friends.pop();
console.log(friends);

const ayush = {
    friends: friends,
    bestFriend: "wasee",
    birthYear: 1923,
    calcAge: function () {
        return 2038 - this.birthYear;
    }
};

console.log(`Ayush has ${ayush.friends.length} friends, and his best friend is ${ayush.bestFriend}`);
console.log(`${ayush.calcAge()}`)

const num = [1, 3, 43];
const num1 = [1, 3, 43];
console.log(num1 - num);