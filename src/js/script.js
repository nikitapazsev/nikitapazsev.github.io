// Menu
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".menu__close");
const overlay = document.querySelector(".menu__overlay");

hamburger.addEventListener("click", () => {
    menu.classList.add('active');
});

closeMenu.addEventListener("click", () => {
    menu.classList.remove("active");
})

overlay.addEventListener("click", () => {
    menu.classList.remove("active");
});

document.addEventListener("keyup", (e) => {
    if (e.code = "Escape") {
        menu.classList.remove("active");
    }
});