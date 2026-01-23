function say(message = "Hello Shamim, how are you"){
    console.log(message)
}

say();
say("Hello ");


//rest parameters

function MyInfo(...argu){
    console.log(...argu);
}

MyInfo(1,2,3,4,5,6,7,7,8,9,0);