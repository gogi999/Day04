function main(numOne, numTwo){
    // Only change code below this line
    numOne = parseFloat(numOne);
    numTwo = parseFloat(numTwo);
    var product = parseFloat(numOne / numTwo);
    // Only change code above this line
    return product; 
}

console.log(main(5.0, 2.0)); // change this line
console.log(main(16.5, 5.5));
console.log(main(102.0, 25.5));

module.exports = main;
