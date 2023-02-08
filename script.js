const menus = document.querySelector(".menus");

const toggler = document.querySelector(".toggler");
toggler.addEventListener("click", () => {
  menus.classList.toggle("active");
});
