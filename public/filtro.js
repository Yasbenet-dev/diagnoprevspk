document.addEventListener("DOMContentLoaded", () => {
const select = document.getElementById("filtro-especialidad");
const filas = document.querySelectorAll("#tabla-profesionales tbody tr");

document.addEventListener("DOMContentLoaded", () => {
const filas = document.querySelectorAll("tbody tr");
    filas.forEach(fila => {
        console.log("Especialidad en fila:", fila.getAttribute("data-especialidad"));
    });
});

select.addEventListener("change", () => {
    const filtro = select.value;
    filas.forEach((fila) => {
        const especialidad = fila.getAttribute("data-especialidad");
        if (filtro === "Todas" || especialidad === filtro) {
            fila.style.display = "";
        }else {
            fila.style.display = "none";
            }
            });
    });
});
