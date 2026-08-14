const ruleta = document.getElementById("ruleta");
const boton = document.getElementById("girar");
const resultado = document.getElementById("resultado");

let rotacion = 0;

boton.addEventListener("click", () => {
    const numero = Math.floor(Math.random() * 37);

    rotacion += 1440 + Math.floor(Math.random() * 360);

    ruleta.style.transform = `rotate(${rotacion}deg)`;

    setTimeout(() => {
        resultado.textContent = "Resultado: " + numero;
    }, 4000);
});