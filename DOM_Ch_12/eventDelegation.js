const menu = document.getElementById("menu");

menu.addEventListener("click", (event)=>{
    let target = event.target;

    switch(target.id){
        case "home":
            console.log("clicked home");
            break;
        case "about":
            console.log("clicked about");
            break;
        case "report":
            console.log("clicked report");
            break;
    }
})