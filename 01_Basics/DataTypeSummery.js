//Primitive 


// 7 types:String,Number , Boolean,null,undefined,Symbol,BigInt

const score =100
const scoreValue =100.3

const id =Symbol('123')
const anotherId =Symbol('123')

console.log(id===anotherId);

const bigNumber = 3456763666445678n



//Reference (non primitive)
//Array , Object ,  Functions

const heros = ["doga","Dhruv","Thor"];
let myObj = {
    name:"akash",
    age:22,
}
 const myFunction = function(){
    consol.log("Hello Akash")
 }

 console.log(typeof scoreValue);
 
 console.log(typeof myFunction);


 //  STACK me primitive AND HEAP me Non-primitive

 let mybook ="book" 
 let yourbook =mybook
 yourbook ="ego"
  
 console.log(mybook);
 console.log(yourbook);


 let userOne ={
    email:"akash@11",
    upi :"asd"

 }
 let usertwo = userOne

 usertwo.email ="Akash@21"
 console.log(userOne.email);
 console.log(usertwo.email);
 


 
 
 
