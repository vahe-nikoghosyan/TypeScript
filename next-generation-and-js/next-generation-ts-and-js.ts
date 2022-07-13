// let age = 30
// age = 29

// if (age > 20) {
//     var isOld = true
//     // let isOld = true
// }

// console.log(isOld) // work with var

// const add = (a: number, b: number) => {
//     return a + b;
// }
const adda = (a: number, b: number = 1) => a + b; // shorter

console.log(adda(5, 2));

// const printOutput = (output: string | number) => {
//     console.log(output);
// }
// const printOutput = output: string | number => console.log(output); // not sported syntax in TS
const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => console.log(event)); // TS know type, event?: MouseEvent
}

printOutput(adda(5));


const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];

// activeHobbies.push(...hobbies);

const person = {
    firstName: 'Max',
    age: 55
};

const copiedPerson = { ...person };
// console.log(copiedPerson)


// rest parameters
const adding = (...numbers: number[]) => {
    return numbers.reduce((currentResult,currentValue) => {
        return currentResult + currentValue
    }, 0);
}

const addedNumbers = adding(5, 12, 8, 5.8);
console.log(addedNumbers);

// arrays & objets destructuring
// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

const { firstName: userName, age } = person;

console.log(userName, age);
