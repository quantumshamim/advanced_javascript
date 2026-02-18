const framework = document.getElementById("framework")
const btnAdd = document.getElementById("btnAdd")

const list = document.getElementById("list")
const btnRemove = document.getElementById("btnRemove")

btnAdd.addEventListener("click", (doEvent)=>{
    doEvent.preventDefault();

    if(framework.value== ""){
        alert("input field is empty");
        return;
    }

    let opt = new Option(framework.value, framework.value);
    list.add(opt, undefined);
    framework.value = "";
})


btnRemove.addEventListener("click", (e)=>{
    e.preventDefault();

    let select = [];

    for(let i=0; i<list.options.length; i++){
        select[i] = list.options[i].selected;
    }

    let index = list.options.length;

    while(index--){
        if(select[index]){
            list.remove(index);
        }
    }

})