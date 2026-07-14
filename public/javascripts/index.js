const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("max-h-0");
  mobileMenu.classList.toggle("max-h-96");

  mobileMenu.classList.toggle("opacity-0");
  mobileMenu.classList.toggle("opacity-100");
});
