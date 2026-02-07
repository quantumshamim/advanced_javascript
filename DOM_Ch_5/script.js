const app = document.getElementById("app")

app.insertAdjacentHTML("beforebegin", "<h1>Before ul list</h1>")
app.insertAdjacentHTML("afterbegin", "<li> <b>home page</b></li>")
app.insertAdjacentHTML("beforeend", "<li> <u>signup</u></li>")
app.insertAdjacentHTML("afterend", "After end text")

//
let li = document.createElement("li")
li.textContent = "Careers"
app.replaceChild(li, app.firstElementChild)

//
let cloneMenu = app.cloneNode(true)
cloneMenu.id = "smallMenu"
document.body.appendChild(cloneMenu)

//
app.removeChild(app.firstElementChild)


//
let li2 = document.createElement("li")
li2.textContent = "Home"

app.insertBefore(li2, app.lastElementChild)