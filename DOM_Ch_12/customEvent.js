const btn = document.getElementById("mybtn")

btn.addEventListener("click", ()=>{
    let work = new CustomEvent("Notify"); //constructor

    document.dispatchEvent(work); //dispatch
})

document.addEventListener("Notify", ()=>{
    alert("custom event fired") //listen for the custom event
})