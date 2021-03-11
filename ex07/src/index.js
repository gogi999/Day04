function main(numOne, numTwo){
    // Only change code below this line
    var reminder;
    numOne = parseInt(numOne);
    numTwo = parseInt(numTwo);

    reminder = numOne % numTwo;
    // Only change code above this line
    return reminder;
}

console.log(main(102, 25)); // Change this line

module.exports = main;
