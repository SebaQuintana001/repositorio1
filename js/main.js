const navToggle = document.querySelector(".nav__toggle")
const navMenu = document.querySelector(".nav__menu")

navToggle.addEventListener("click",()=> {
    navMenu.classList.toggle("nav__menu__visible");

    if (navMenu.classList.contains("nav__menu__visible")){
        navToggle.setAttribute("aria-label", "cerrar menu");
    } else{
        navToggle.setAttribute("aria.label", "cerrar menu");
    }
})