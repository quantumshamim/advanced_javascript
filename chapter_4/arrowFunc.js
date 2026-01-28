
//arrow
let add = (x,y) => x+y;

let sum = add(5,6);
console.log(sum)
console.log(add.length)
console.log(add.prototype)


//call method
const person = {
    fullName : function(){
        return this.firstName + this.lastName;
    }
}

const person1 = {
    firstName : "Md.",
    lastName : "Shamim"
}

let value = person.fullName.call(person1);
console.log(value)



//apply method
const person2 = {
    fullName : function(city,country){
        return this.firstName + this.lastName + " , " + city + " " + country;
    }
}

const person3 = {
    firstName : "Md.",
    lastName : "Shamim"
}

let value1 = person2.fullName.apply(person3, ["Dhaka", "Bangladesh"])
console.log(value1);




//bind method

const data = {
    firstName : "Bristy",
    lastName : "Banu",
    display : function(){
        console.log(this.firstName + this.lastName)
    }
}

let show = data.display.bind(data);
setTimeout(show, 3000);
