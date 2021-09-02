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
const typed = new Typed('.typed', {
	strings: [
		'<i class="animacion-typing">Desallorador Web</i>',
		'<i class="animacion-typing">Diseñador Web</i>',
		'<i class="animacion-typing">Freelancer</i>',
	],
	stringsElement: '#cadenas-texto',
	typeSpeed: 75, 
	startDelay: 300, 
	backSpeed: 75, 
	smartBackspace: true, 
	shuffle: false, 
	backDelay: 1500,
	loop: true,
	loopCount: false,
	showCursor: true, 
	cursorChar: '|', 
	contentType: 'html',
});
