//dom
const botonaceptar = document.getElementById("aceptarcookie");
const panel = document.getElementById("bannercookie")


//comprovar si existe la variable local , si no , se crea
let comprovar = localStorage.getItem("panel")
if (comprovar === null) {
   localStorage.setItem("panel","true")
}

botonaceptar.addEventListener("click",()=>{
    localStorage.setItem("panel","false")

    if (localStorage.getItem("panel") == "false") {
        panel.remove()
    }
})

if (localStorage.getItem("panel") == "false") {
    panel.remove()
}