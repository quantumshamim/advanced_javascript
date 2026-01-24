//object destructuring

const person ={
    firstName: "Md",
    lastName: "Shamim",
    age: 23,
    prof: "Customer Manager"
}

let {firstName,lastName,prof="Customer Service"} = person;
console.log(firstName);
console.log(lastName);
console.log(prof);


//string destructuring

let str = "Welcome to the programming world";

let[a,b,c,d,e,f,g,h,i,j,k] = str;
console.log(a,b,c,d,e,f,g,h,i,j,k);


//array destructuring

let fruits = ['apples','banana','grape'];

let [f1,f2,f3] = fruits;
console.log(f1);