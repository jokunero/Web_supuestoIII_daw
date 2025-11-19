const nav = document.querySelector("nav")
const btnscroll = document.querySelector(".botonscroll")
const flecha = document.querySelector(".botonscroll i")
const hrefcroll = document.querySelector("#referenciaflecha")

//efecto de navegacion
document.addEventListener("scroll",()=>{
    
    if (window.scrollY > 250) {
        nav.style.backgroundColor = "rgba(0, 0, 0,0.7)"
        nav.style.backdropFilter = "blur(7px)"     
    }else{
        nav.style.backgroundColor = "transparent"
        nav.style.backdropFilter = "none"
    }

    // cambio de direccion
    if (window.scrollY > ((document.documentElement.scrollHeight/2)-(document.documentElement.scrollHeight/10))) {
        flecha.classList.remove("bi-arrow-down")
        flecha.classList.add("bi-arrow-up")
        hrefcroll.href = "#"
    }else{
        flecha.classList.remove("bi-arrow-up")
        flecha.classList.add("bi-arrow-down")
        hrefcroll.href = "#referenciafooter"
    }
})


