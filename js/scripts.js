document.addEventListener('DOMContentLoaded', function () {
    // Inicializar el carrusel
    var carouselElem = document.querySelector('.carousel');
    var carouselInstance = M.Carousel.init(carouselElem, {
        fullWidth: true,
        indicators: true
    });

    // Función para mover el carrusel manualmente
    window.moveCarousel = function (direction) {
        if (direction === 'next') {
            carouselInstance.next();
        } else if (direction === 'prev') {
            carouselInstance.prev();
        }
    };

    // Configuración para que el carrusel pase automáticamente cada 3 segundos
    setInterval(function () {
        carouselInstance.next();
    }, 6000); // Cambia el tiempo (en milisegundos) según tus necesidades

    // Inicializar el sidenav
    var sidenavElems = document.querySelectorAll('.sidenav');
    var sidenavInstances = M.Sidenav.init(sidenavElems);

    // Función debounce para cerrar el sidenav al cambiar a vista de escritorio
    function debounce(func, wait) {
        let timeout;
        return function () {
            const context = this,
                args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), wait);
        };
    }

    // Cerrar sidenav automáticamente en vista de escritorio
    const closeSidenavOnResize = debounce(() => {
        if (window.innerWidth > 992) {
            sidenavInstances.forEach(instance => instance.close());
        }
    }, 200); // Espera 200ms después de redimensionar

    window.addEventListener('resize', closeSidenavOnResize);
});

// Código para el botón "Ver más"
const viewMoreBtn = document.getElementById("viewMoreBtn");
const titlesList = document.getElementById("titlesList");

// Variable para controlar si la lista está expandida o no
let isExpanded = false;

if (viewMoreBtn && titlesList) {
    viewMoreBtn.addEventListener("click", function () {
        if (isExpanded) {
            titlesList.classList.remove("expanded");
            viewMoreBtn.textContent = "Ver más";
        } else {
            titlesList.classList.add("expanded");
            viewMoreBtn.textContent = "Ver menos";
        }
        isExpanded = !isExpanded;
    });
}
