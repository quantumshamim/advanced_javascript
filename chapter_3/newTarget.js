function person(name){
    if(!new.target){
        throw "Must use new operator with this person function";
    }
    this.name=name;
}

let myPerson = new person("shamim")
console.log(myPerson);