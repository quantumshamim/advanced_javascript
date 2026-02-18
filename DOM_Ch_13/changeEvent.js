const message = document.querySelector("#message");
const result = document.querySelector("#result");

message.addEventListener("change", ()=>{
    result.innerHTML = message.value
})