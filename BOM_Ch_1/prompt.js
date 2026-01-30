const ask = document.getElementById("ask");

ask.addEventListener("click", ()=>{
    let username = prompt("Enter your name");

    if(username !== null && username!== ""){
        alert("Hello " + username)
    }
    else{
        alert("no name entered")
    }
})