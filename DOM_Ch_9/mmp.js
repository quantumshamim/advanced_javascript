let clicked = document.getElementById("clicked")
let changed = document.getElementById("changed")
let body = document.querySelector("body")
let text = document.getElementById("text")

clicked.addEventListener("click", ()=>{
    body.style.backgroundColor = "blue"
})

changed.addEventListener("click", ()=>{
    body.style.backgroundColor = "white"
})

text.addEventListener("dblclick", ()=>{
    text.style.color = "red"
})