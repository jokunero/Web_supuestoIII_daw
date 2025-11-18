//efecto de navegacion 
document.addEventListener("scroll",()=>{
    let nav = document.querySelector("nav")
    if (window.scrollY > 250) {
        nav.style.backgroundColor = "rgba(0, 0, 0,0.7)"
        nav.style.backdropFilter = "blur(7px)"       
    }else{
        nav.style.backgroundColor = "transparent"
        nav.style.backdropFilter = "none"
    }
})