//class expression

let person = class {
    constructor(name,email,password){
        this.name=name;
        this.email=email;
        this.password=password
    }
}

let about = new person("Shamim","msam@gmail.com", "002410");
console.log(about);


//firstclass citizen

function factory(hablu){
    return new hablu()
}

let greeting = factory(class{
    sayHi(){
        console.log("Hello, bro!");
    }
})

greeting.sayHi();