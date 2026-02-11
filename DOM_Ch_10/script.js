let scrollE = document.getElementById("scrollE")
let button = document.getElementById("button")

button.addEventListener("click", (e)=>{
    let event = e.target;

    switch(event.id){
        case "btnleft" :
            scrollE.scrollLeft += 20;
            break;
        
        case "btndown" :
            scrollE.scrollTop += 20;
            break;
    }
})