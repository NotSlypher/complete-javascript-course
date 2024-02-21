const continent = 'Asia';
const country = 'India';
let population = 1800
const isIsland = false;
const language = "Hindi";

console.log(continent);
console.log(country);
console.log(population);
console.log(isIsland);
console.log(language);
console.log(population / 2);
console.log(++population);
console.log(population > 6);
console.log(population < 33);
console.log(country + ' is in ' + continent + ', and it has ' + population + ' million people speak ' + language);

console.log(`${country} is in ${continent}, and it has ${population} million people speak ${language}`);

if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} below average`);
}


numNeighbour = Number(prompt('how many neighbouring countries does your country have?'))

if (numNeighbour === 1)
    console.log("1 border");
else if (numNeighbour > 1)
    console.log("more than 1 border");
else
    console.log("No borders");

switch (language) {
    case `chinese`:
    case `manderin`:
        console.log(`Most number of native speakers`);
        break;
    case `spanish`:
        console.log(`2nd place`);
        break;
    case `English`:
        console.log(`3rd`);
        break;
    case `Hindi`:
        console.log(`4th`);
        break;
    default:
        console.log(`great language too`);
        break;
}