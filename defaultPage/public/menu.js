// menu.js

const menu = document.querySelector(".menuDiv");
const hmb = document.querySelector(".hmb");

hmb.addEventListener("click", mostrarMenu);

menu.addEventListener("mouseleave", ocultarMenu);

document.addEventListener("click", function (event) {
  const isClickInsideMenu = menu.contains(event.target);
  const isClickOnHmb = hmb.contains(event.target);

  if (!isClickInsideMenu && !isClickOnHmb) {
    ocultarMenu();
  }
});

function mostrarMenu() {
  if (window.innerWidth <= 768) {
    menu.style.transform = "translateX(0)";
  }
}

function ocultarMenu() {
  if (window.innerWidth <= 768) {
    menu.style.transform = "translateX(-50vw)";
  }
}
