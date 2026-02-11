let click = document.getElementById("click")

click.addEventListener("mousedown", ()=>{
    console.log("clicked mouse down")
})

click.addEventListener("mouseup", ()=>{
    console.log("clicked mouse up")
})

click.addEventListener("click", ()=>{
    console.log("clicked")
})

click.addEventListener("dblclick", ()=>{
    console.log("double clicked")
})