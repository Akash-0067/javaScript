console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2">1);
console.log("02">1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);// same with  undefined
//The reason is that an equality check == and comparisons>< >= <= work differently.
//Comparisions convert null to a number.treatin it as 0.
// that`s why null>= 0 is true and null> 0 is false

//=== IT ALSO CHECK DATA TYPE
console.log("2"===2);

 