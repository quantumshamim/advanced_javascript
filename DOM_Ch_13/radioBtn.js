const btn = document.getElementById("btn") // button selected
const radio = document.getElementsByName("language") // input field selected
const para = document.getElementById("output")

btn.addEventListener("click", ()=>{
    let selectLang;

    for(const radiobtn of radio){
        if(radiobtn.checked){
            selectLang = radiobtn.value;
            break;
        }
    }

    para.innerHTML = selectLang
})
