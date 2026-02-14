const password = document.querySelector("#password")
const username = document.querySelector("#username")

password.addEventListener("focus", (e)=>{
    e.target.style.backgroundColor = "skyblue"
})

username.addEventListener("blur", (e)=>{
    e.target.style.backgroundColor = "skyblue"
})

