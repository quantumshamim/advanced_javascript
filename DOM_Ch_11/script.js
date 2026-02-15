const password = document.querySelector("#password")
const username = document.querySelector("#username")

password.addEventListener("focus", (e)=>{
    e.target.style.backgroundColor = "skyblue"
})

username.addEventListener("blur", (e)=>{
    e.target.style.backgroundColor = "skyblue"
})



//hashchange
const updateContent = ()=>{
    const updateContent = document.querySelector("#content");
    const hash = window.location.hash.substring(1);

    switch(hash){
        case "home":
            content.innerHTML = "<h1>This is home page</h1>";
            break;
        case "about":
            content.innerHTML = "<h2>This is about page</h2>";
            break;
        case "contact":
            content.innerHTML = "<h3>This is contact page</h3>";
            break;
    }
}

window.addEventListener("hashchange",updateContent)