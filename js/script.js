const burguer = document.querySelector(".header__toggle");
const nav = document.querySelector(".header__mobile");
const body = document.querySelector("body");
const header = document.querySelector(".header");


// Faq section
const items = document.querySelectorAll('.faq__item');


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



// Faq section

items.forEach(function(item) {

    const btn = item.querySelector('.faq__button');

    btn.addEventListener("click", () => {

        // Remove show text from the question not choosen
        items.forEach(function(question) {
            if(question !== item) {
                question.classList.remove('faq__show-text');
            }
        })
        item.classList.toggle('faq__show-text');
    })
});

