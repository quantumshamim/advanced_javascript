function clickNow(){
    alert("Please, focus on the class")
}


const btn = document.getElementById("btn")

btn.addEventListener("click", clickNow)



//
function loadImage(){
    alert("Image has loaded")
}


const img= document.getElementById("img")
img.addEventListener("load", loadImage)
img.src = "https://picsum.photos/200/300"


//
addEventListener("beforeunload", (event)=>{
    event.preventDefault()

    event.returnValue = " "
})