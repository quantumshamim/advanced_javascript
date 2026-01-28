function display(userData){
    console.log(userData);
}

function user(fn,ln,prof){
    fn;
    ln;
    prof;

    let info = fn + ln + "," + prof;
    return info;
}

let myInfo = user("md.", "shamim", "student")

display(myInfo);