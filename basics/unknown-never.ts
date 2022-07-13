let userInput: unknown; // don't issue with any type
let userName: string;

userInput = 5;
userInput = 'Max';

// userName = userInput; //  Type 'unknown' is not assignable to type 'string' // dont issue if userInput is any type

// add extra check
if (typeof userInput === 'string') {
    userName = userInput; // this version is work
}

// unknown better than any


// never type

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}

const result = generateError('An error occurred!', 500);
console.log(result); // it even doesn't return undefined
