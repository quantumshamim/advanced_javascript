const accept = document.getElementById("accept")

accept.addEventListener("click", ()=>{
    accept.checked = true;

    if(accept.checked){
        alert("check mark ok");
    }
})

