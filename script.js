const ruleta = document.getElementById("ruleta");
const boton = document.getElementById("girar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", () => {
    const numero = Math.floor(Math.random() * 37);

    resultado.textContent = "Resultado: " + numero;

    ruleta.style.transform = "rotate(1440deg)";
});