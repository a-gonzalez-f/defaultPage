function enableCarouselScrolling(carouselElement) {
  let isDown = false;
  let startX;
  let scrollLeft;

  carouselElement.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - carouselElement.offsetLeft;
    scrollLeft = carouselElement.scrollLeft;
  });

  carouselElement.addEventListener("mouseleave", () => {
    isDown = false;
  });

  carouselElement.addEventListener("mouseup", () => {
    isDown = false;
  });

  carouselElement.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carouselElement.offsetLeft;
    const walk = (x - startX) * 2; // Velocidad de desplazamiento
    carouselElement.scrollLeft = scrollLeft - walk;
  });
}

// Utilizar la función en los elementos deseados
const carousels = document.querySelectorAll(".carousel");
carousels.forEach((carousel) => {
  enableCarouselScrolling(carousel);
});
