const hamburgerMenuButton = document.querySelector("#hamburger-menu");
const hamburgerIconBars = hamburgerMenuButton.querySelectorAll("span");
const navLinks = document.querySelector("nav ul");

hamburgerMenuButton.addEventListener("click", () => {
    if(!hamburgerMenuButton.classList.contains("active-menu")) {
        navLinks.style.display = "flex";
        navLinks.style.position = "absolute";
    }else {
        navLinks.style.display = "none";
        navLinks.style.position = "block";
    }
    navLinks.classList.toggle("drop-shadow");
    hamburgerMenuButton.classList.toggle("active-menu");
});