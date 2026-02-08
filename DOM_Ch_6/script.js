const js = document.getElementById("js")

let target = js.getAttribute("id")
let change = js.setAttribute("name", "demo")
let remove = js.removeAttribute("name")
let result = js.hasAttribute("target")
console.log(result)