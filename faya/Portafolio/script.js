const elementosAparecer = document.querySelectorAll('.aparecer');

const opcionesAparicion = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const aparecerAlHacerScroll = new IntersectionObserver(function(entradas, observador) {
    entradas.forEach(entrada => {
        if (!entrada.isIntersecting) {
            return;
        } else {
            entrada.target.classList.add('visible');
            observador.unobserve(entrada.target);
        }
    });
}, opcionesAparicion);

elementosAparecer.forEach(elemento => {
    aparecerAlHacerScroll.observe(elemento);
});