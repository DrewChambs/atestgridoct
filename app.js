const btnMenu = document.querySelector(".btnMenu");
const links = document.querySelector(".links");

btnMenu.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
