function iniciarContador(elemento) {
    let inicio = 0;
    let fin = elemento.dataset.tiempo
    let velocidad = 1;

    let intervalo = setInterval(() => {
        inicio = inicio + 2;
        elemento.textContent = inicio;

        if (inicio >= fin) {
            clearInterval(intervalo);
        }
    }, velocidad);
    
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            iniciarContador(entry.target);
            observer.unobserve(entry.target); 
        }
    });
});


let contadores = document.getElementsByClassName("contador");

for (let index = 0; index < contadores.length; index++) {
    observer.observe(contadores[index]);
}

