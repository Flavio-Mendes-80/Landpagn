const menu = document.querySelector(".menu");
const nav-menu = document.querySelector(".nav-menu");

menu.addEventListanner("click", () => {
    menu.classList.toggle("ativo");
    nav-menu.classlist.toggle("ativo");
}) 