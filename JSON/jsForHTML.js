// let data = fetch("https://jsonplaceholder.typicode.com/users")

// data.then((res)=>{
//     return res.json()
// }).then(
//     (read)=>{
//         console.log(read)
//     }
// )




async function data() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const name = await response.json();;

    console.log(name)
}

data()