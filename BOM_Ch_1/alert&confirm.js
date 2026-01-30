alert("Hi, whta's up")

//confirm
let dlt = document.getElementById("dlt")
let para = document.getElementById("para")

dlt.addEventListener("click", ()=>{
    let userConf = confirm("hey, are you sure ?")

    if(userConf){
        para.textContent = "Deleted"
    }
    else{
        para.textContent = "Not done"
    }
})