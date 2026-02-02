const data = document.querySelector(".child")
const parents = document.querySelector("#menu")
const currentElement = document.querySelector(".current")



console.log(data.parentNode)
console.log(parents.firstChild)
console.log(parents.lastChild)
console.log(parents.childNodes)
console.log(parents.children)

console.log(currentElement.previousElementSibling)
console.log(currentElement.nextElementSibling)