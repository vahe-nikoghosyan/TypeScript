let userId = 123; // unused global variables are allowed
const button1 = document.querySelector('button')!;

// Error: Not all code paths return a value.
// function addSomeValue(n1: number, n2: number) {
//     if ((n1 + n2) > 0) {
//         return n1 + n2;
//     }
// }

function clickHandler(message: string) {
    // let userName = "Max"; // dont allowed
    console.log('Clicked: ' + message)
}

if (button1) {
    // button.addEventListener('click', () => {
    //     console.log('clicked');
    // }); // without lib config => : Object is possibly 'null'

    button1.addEventListener("click", clickHandler.bind(null, "You're welcome!"));
}

const map = new Map();

// the config target js version all features are available in the typescript code

// source map help us with debugging and development
