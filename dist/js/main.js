/*=============== CAMBIAR FONDO DEL NAVBAR AL HACER SCROLL ===============*/
const scrollNavbar = () => {
    const navbar = document.getElementById('navbar');
    const mainContent = document.getElementById('main-content');
    // Cuando el scroll es mayor a 50, añade la clase 'scroll-header' al navbar
    if (window.scrollY >= 50) {
        navbar.classList.add('scroll-header');
        // Añade un padding-top al contenido principal para evitar que salte
        mainContent.style.paddingTop = navbar.offsetHeight + 'px';
    } else {
        navbar.classList.remove('scroll-header');
        // Quita el padding-top cuando el navbar vuelve a su posición original
        mainContent.style.paddingTop = '0';
    }
}
window.addEventListener('scroll', scrollNavbar);


/*=============== ANIMACIONES ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 2500,
  delay: 400,
})

sr.reveal(`.home__data, .opiniones__content`)
sr.reveal(``, {origin:'bottom', delay:1000})
sr.reveal(`.contacto__izq`, {origin: `left`})
sr.reveal(`.about__content, .contacto__der`, {origin: `right`})
sr.reveal(`.servicios__container`, {interval:100})

