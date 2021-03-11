function main(numOne, numTwo){
    // Only change code below this line
    numOne = parseFloat(numOne);
    numTwo = parseFloat(numTwo);
    var myQuotient = parseFloat(numOne / numTwo);
    // Only change code above this line
    return myQuotient;
}

console.log(main(102.0, 25.5)); // change this line

module.exports = main;
