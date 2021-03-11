function main(numOne, numTwo){
    // Only change code below this line
    var reminder;
    var numOne = parseInt(numOne);
    var numTwo = parseInt(numTwo);

    reminder = numOne % numTwo;
    // Only change code above this line
    return reminder;
}

console.log(main(5, 2)); // Change this line
console.log(main(15, 4));
console.log(main(102, 25));

module.exports = main;
