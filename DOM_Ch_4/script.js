let data = document.querySelector("#myP")

console.log(data.innerHTML)
console.log(data.innerText)
console.log(data.textContent)


let info = document.querySelector(".info")
let h1 = document.createElement("h1")
h1.textContent = "this is h1 tag from js dom"
info.appendChild(h1)


info.innerHTML = "<p>this is p tag</p>"