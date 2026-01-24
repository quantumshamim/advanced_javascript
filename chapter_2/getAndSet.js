const person = {
    firstName: "Shamim",
    lastName: "Hossain",
    age:22,
    prof: "Programmer",
    get pro(){
        return this.prof;
    }
}

console.log(person);
console.log(person.prof);
console.log(person.pro);


//set keyword

const userInfo = {
    username : "ShamEco",
    mail : "msamim7617@gmail.com",
    set newMail(newmail){
        this.mail=newmail;
    }
}

userInfo.newMail= "admin@sham-eco.com";

console.log(userInfo);
