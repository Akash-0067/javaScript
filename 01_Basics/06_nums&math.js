const score =400

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8976
console.log(otherNumber.toPrecision(4));

const hundreds =10000000
console.log(hundreds.toLocaleString('en-IN'));


//           MATHS              //

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.65));
console.log(Math.ceil(4.75));
console.log(Math.floor(6.76));
console.log(Math.max(3,4,5,6,7,44,67,33));

console.log(Math.random());
console.log((Math.random()*10)+1);
 
const min =10
const max =20

console.log(Math.floor(Math.random() * (max-min + 1)) + min);

