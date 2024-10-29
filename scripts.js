let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.carousel-slide'); // Selecciona el contenedor que contiene las imágenes
    const totalSlides = slides.children.length; // Número total de imágenes en el carrusel

    // Actualiza el índice de la diapositiva actual
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Mueve el contenedor de las imágenes para mostrar la imagen actual
    const offset = -currentSlide * 100; // Calcula el desplazamiento basado en el ancho del contenedor
    slides.style.transform = `translateX(${offset}%)`;


    // Función para alternar la visualización de las listas
function toggleList(viewMoreBtnId, titlesListId) {
    const viewMoreBtn = document.getElementById(viewMoreBtnId);
    const titlesList = document.getElementById(titlesListId);
    let isExpanded = false;
  
        viewMoreBtn.addEventListener("click", function() {
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
  
    // Añadir la funcionalidad a cada entrenador
    toggleList("viewMoreBtn1", "titlesList1");
    toggleList("viewMoreBtn2", "titlesList2");
}



