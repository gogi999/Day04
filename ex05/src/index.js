function main(numOne, numTwo){
    // Only change code below this line
    numOne = parseFloat(numOne);
    numTwo = parseFloat(numTwo);
    var product = parseFloat(numOne * numTwo);
    // Only change code above this line
    return product; 
}

console.log(main(100.25, 43.20)); // change this line

module.exports = main;
