let userInput: unknown;
let userNAme: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') { //needed an extra type check here with unknown to be able to assign a unknown value to a value with a fixed type
    userNAme = userInput;
}

function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code}
    // while (true) {} //infinite loop
}

generateError('An error occurred!', 500)