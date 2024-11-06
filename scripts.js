
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true
  });

  // Función para mover el carrusel
  window.moveCarousel = function(direction) {
      var instance = M.Carousel.getInstance(elems[0]);
      if (direction === 'next') {
          instance.next();
      } else if (direction === 'prev') {
          instance.prev();
      }
  };
});



document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});



 // Seleccionamos el botón y la lista
 const viewMoreBtn = document.getElementById("viewMoreBtn");
 const titlesList = document.getElementById("titlesList");

 // Variable para controlar si está expandido o no
 let isExpanded = false;

 // Añadir evento click al botón
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







