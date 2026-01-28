const fruits = new Map(
    [
        ["Apple", 500],
        ["Banana", 200],
        ["Oranges", 350]
    ]
)

let info = fruits.get("Oranges");
console.log(info)

fruits.set("Grape", 320);
console.log(fruits)
console.log(fruits.size)