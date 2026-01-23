//object literal syntax extensions in ES6

//step 1

function sayHi(username,userinfo){
    return{
        username,
        userinfo
    }
}

console.log(sayHi("shamim", "Will be great"));


//step 2

let message ="Hi, everyone", userName = "Shamim";

const MyInfo = {
    message,
    userName
}

console.log(MyInfo);


//computed property

//step 3

let name = "Shamim";

let Info = {
    [name]: "Is student of NUB"
}

console.log(Info)
console.log(Info[name])
console.log(Info['Shamim'])


//concise method

// step 4

let server = {
    name: "server side",
    restart(){
        console.log("This is concise method")
    }
}

console.log(server)
console.log(server.restart())