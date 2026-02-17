const btn = document.getElementById("mybtn")

btn.addEventListener("click", ()=>{
    alert("button was clicked")
})

const work = new Event("click"); // constructor
btn.dispatchEvent(work); //method