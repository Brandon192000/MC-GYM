// Variables globales para el carrusel
let currentSlide = 0;

// Función para mover el carrusel en una dirección específica (avanzar o retroceder)
function moveSlide(direction) {
    const slides = document.querySelector('.carousel-slide'); // Selecciona el contenedor que contiene las imágenes
    const totalSlides = slides.children.length; // Número total de imágenes en el carrusel

    // Actualiza el índice de la diapositiva actual
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Mueve el contenedor de las imágenes para mostrar la imagen actual
    const offset = -currentSlide * 100; // Calcula el desplazamiento basado en el ancho del contenedor
    slides.style.transform = `translateX(${offset}%)`;
}

// Lógica del menú burger
const burger = document.getElementById('burger');
const navbar = document.querySelector('.navbar');

// Evento para el botón burger
burger.addEventListener('click', function() {
    // Alterna la clase 'active' en el botón burger y la barra de navegación
    burger.classList.toggle('active');
    navbar.classList.toggle('active');
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







