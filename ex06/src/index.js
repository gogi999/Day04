function main(numOne, numTwo){
    // Only change code below this line
    var numOne = parseFloat(numOne).toFixed(1);
    var numTwo = parseFloat(numTwo).toFixed(1);
    var myQuotient = parseFloat(numOne / numTwo).toFixed(1);
    // Only change code above this line
    return myQuotient;
}

console.log(main(5.0, 2.0)); // change this line
console.log(main(16.5, 5.5));
console.log(main(102.0, 25.5));

module.exports = main;
