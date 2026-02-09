let box = document.querySelector(".box")

// let width = box.offsetWidth
// let height = box.offsetHeight 

let width = box.clientWidth
let height = box.clientHeight 

let style = getComputedStyle(box)

console.log(width)
console.log(height)
console.log(style.marginLeft)


let button = document.getElementById("click")

function handleClick(){
    alert("You have clicked me")
}

button.addEventListener("click", handleClick)