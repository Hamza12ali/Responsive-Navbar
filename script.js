const navIcon = document.querySelector(".navbar-icon");
const navbar = document.querySelector(".navbar");

/*
console.log(navbar);
console.log(navIcon);
*/

navIcon.addEventListener('click', () => {
    navbar.classList.toggle("show");
});
