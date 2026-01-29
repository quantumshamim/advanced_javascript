const openNewWindow = document.getElementById("openNewWindow")
const closeWindow = document.getElementById("closeWindow")
let myWindow;

openNewWindow.addEventListener("click", ()=>{
    myWindow = window.open("https://www.facebook.com/samim.767","fb","width=500, height=300")
})

closeWindow.addEventListener("click", ()=>{
    myWindow.close();
})
