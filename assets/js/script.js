/*
function animateBoxes(boxes, direction, distance, speed) {
  boxes.forEach((box, index) => {
    let pos = 0;
    let step = 1;

    setInterval(() => {
      pos += step;

      if (pos > distance || pos < -distance) {
        step *= -1; // cambia de dirección
      }

      if (direction === "left") {
        box.style.transform = `translateX(${pos}px)`; // izquierda ↔ derecha
      } else if (direction === "right") {
        box.style.transform = `translateX(${-pos}px)`; // derecha ↔ izquierda
      }
    }, speed);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const leftBoxes = document.querySelectorAll(".col-md-4:first-child .feature-box");
  const rightBoxes = document.querySelectorAll(".col-md-4:last-child .feature-box");

  // Columna izquierda → izquierda ↔ derecha
  animateBoxes(leftBoxes, "left", 30, 15);

  // Columna derecha → derecha ↔ izquierda
  animateBoxes(rightBoxes, "right", 30, 15);

  // Columna central → no se toca (quieta)
});
*/

function abrirImagen(src) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").style.display = "flex";
}

function cerrarImagen() {
  document.getElementById("lightbox").style.display = "none";
}

/* NAV DESPLEGABLE */

document.querySelectorAll(".categoria").forEach(cat => {
  cat.addEventListener("mouseenter", function () {
    // Quitar "active" a todas las categorías
    document.querySelectorAll(".categoria").forEach(el => el.classList.remove("active"));
    this.classList.add("active");

    // Ocultar todos los equipos
    document.querySelectorAll(".equipos-list").forEach(el => el.classList.add("d-none"));
    // Mostrar solo la categoría seleccionada
    document.getElementById(this.dataset.target).classList.remove("d-none");
  });
});
