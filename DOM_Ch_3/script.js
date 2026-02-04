let div = document.createElement("div")
div.id = 'content'
div.className = 'para'
div.innerHTML = "<p>This is paragraph from JS DOM</p>"

let text = document.createTextNode("another text")
div.appendChild(text)

let h1 = document.createElement("h1")
h1.textContent = "Another heading tag"
div.appendChild(h1)

document.body.appendChild(div)
console.log(div)

// 
const menu = document.querySelector("#menu");
console.log(menu);

let li = document.createElement("li")
li.textContent = "About us"

menu.appendChild(li);


//
let firstlist = document.querySelector("#first-list") //select
let secondlist = document.querySelector("#second-list")


let firstitem = firstlist.firstElementChild // first child select
secondlist.appendChild(firstitem)