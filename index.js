function main() {
  const botonRojo = document.querySelector(".rojo");
  const botonAmarillo = document.querySelector(".amarillo");
  const botonVerde = document.querySelector(".verde");

  const contenedor = document.querySelector(".contenedor");

  botonRojo.addEventListener("click", (e) => {
    console.log("tocaron al Rojo");

    contenedor.classList.toggle("contenedor-rojo");
    //contenedor.classList.add("contenedor-rojo");
    //contenedor.classList.remove("contenedor-verde");
    //contenedor.classList.remove("contenedor-amarillo");
  });
  botonAmarillo.addEventListener("click", (e) => {
    console.log("tocaron al Amarillo");

    contenedor.classList.toggle("contenedor-amarillo");
    //contenedor.classList.remove("contenedor-rojo");
    //contenedor.classList.remove("contenedor-verde");
    //contenedor.classList.add("contenedor-amarillo");
  });
  botonVerde.addEventListener("click", (e) => {
    console.log("tocaron al Verde");

    contenedor.classList.toggle("contenedor-verde");
    //contenedor.classList.remove("contenedor-rojo");
    //contenedor.classList.remove("contenedor-amarillo");
    //wcontenedor.classList.add("contenedor-verde");
  });
}

main();
