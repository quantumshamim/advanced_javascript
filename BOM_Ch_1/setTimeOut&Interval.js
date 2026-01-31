function greeting(){
    alert("hey")
}
setTimeout(greeting, 3000) // in miliseconds

const text = document.getElementById("text")
let counter = 0;
function counterUp(){
    counter++;
    text.textContent = counter
}

setInterval(counterUp, 1000)