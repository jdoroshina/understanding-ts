var userInput;
var userNAme;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') { //needed an extra type check here with unknown to be able to assign a unknown value to a value with a fixed type
    userNAme = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // while (true) {} //infinite loop
}
generateError('An error occurred!', 500);
