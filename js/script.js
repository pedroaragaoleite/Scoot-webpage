const burguer = document.querySelector(".header__toggle");
const nav = document.querySelector(".header__nav");
const overlay = document.querySelector(".header__overlay");
const header = document.querySelector(".header");
const body = document.querySelector("body");

let showMenu = false;

burguer.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        nav.classList.add('open');
        burguer.classList.add('open');
        overlay.classList.add('open');
        header.classList.add('open');
        body.classList.add('noscroll');
        showMenu = true;
    } else {
        nav.classList.remove('open');
        burguer.classList.remove('open');
        overlay.classList.remove('open');
        header.classList.remove('open');
        body.classList.remove('noscroll');
        showMenu = false;
    }
}

// burguer.addEventListener("click", () => {
//     if(nav.contains)
//     console.log("clicked");
// });