document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el carousel
    var carouselElems = document.querySelectorAll('.carousel');
    var carouselInstances = M.Carousel.init(carouselElems, {
        fullWidth: true,
        indicators: true
    });
  
    // Función para mover el carrusel
    window.moveCarousel = function(direction) {
        var instance = M.Carousel.getInstance(carouselElems[0]);
        if (direction === 'next') {
            instance.next();
        } else if (direction === 'prev') {
            instance.prev();
        }
    };
  
    // Inicializar el sidenav
    var sidenavElems = document.querySelectorAll('.sidenav');
    var sidenavInstances = M.Sidenav.init(sidenavElems);
  
    // Función para cerrar el sidenav al cambiar a vista de escritorio
    function closeSidenavOnResize() {
        if (window.innerWidth > 992) { // 992px es el breakpoint típico de Materialize para escritorio
            sidenavInstances.forEach(function(instance) {
                instance.close();
            });
        }
    }
  
    // Llamar a la función al redimensionar la ventana
    window.addEventListener('resize', closeSidenavOnResize);
  });
  
  // Código para el botón "Ver más"
  const viewMoreBtn = document.getElementById("viewMoreBtn");
  const titlesList = document.getElementById("titlesList");
  
  // Variable para controlar si está expandido o no
  let isExpanded = false;
  
  if (viewMoreBtn && titlesList) {  // Verifica que los elementos existen
    viewMoreBtn.addEventListener("click", function() {
        // Alternar la clase expanded para mostrar u ocultar la lista
        if (isExpanded) {
            titlesList.classList.remove("expanded");
            viewMoreBtn.textContent = "Ver más";
        } else {
            titlesList.classList.add("expanded");
            viewMoreBtn.textContent = "Ver menos";
        }
        isExpanded = !isExpanded; // Cambiar el estado
    });
  }

