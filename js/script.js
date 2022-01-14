const burguer = document.querySelector(".header__toggle");
const nav = document.querySelector(".header__mobile");
const body = document.querySelector("body");
const header = document.querySelector(".header");


let showMenu = false;

burguer.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        nav.classList.add('open');
        burguer.classList.add('open');        
        header.classList.add('open');
        body.classList.add('noscroll');
        showMenu = true;
    } else {
        nav.classList.remove('open');
        burguer.classList.remove('open');        
        header.classList.remove('open');
        body.classList.remove('noscroll');
        showMenu = false;
    }
}

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.screenY > 0 );
})

// burguer.addEventListener("click", () => {
//     if(nav.contains)
//     console.log("clicked");
// });