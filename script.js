// Aqui guardamos los numeros
let b = 0;
let c = 0;

// Esta parte genera numeros al azar
function generar() {

    b = Math.floor(Math.random() * 21) - 10;
    c = Math.floor(Math.random() * 21) - 10;

    // Mostramos los numeros
    document.getElementById("b").innerHTML = "b = " + b;
    document.getElementById("c").innerHTML = "c = " + c;

    // Mostramos la formula
    document.getElementById("formula").innerHTML =
        "f(x) = " + b + "x + " + c;

    // Revisamos si es lineal o afin
    if (c == 0) {

        document.getElementById("resultado").innerHTML =
            "Es una funcion LINEAL";

        document.getElementById("lineal").classList.add("activa");
        document.getElementById("afin").classList.remove("activa");

        document.getElementById("infoLineal").innerHTML =
            "Pasa por el origen (0,0). Su pendiente es " + b +
            (b > 0 ? " y es creciente." :
            b < 0 ? " y es decreciente." : " y es constante.");

    } else {

        document.getElementById("resultado").innerHTML =
            "Es una funcion AFIN";

        document.getElementById("afin").classList.add("activa");
        document.getElementById("lineal").classList.remove("activa");

        document.getElementById("infoAfin").innerHTML =
            "Corta el eje Y en (0," + c + "). Su pendiente es " + b +
            (b > 0 ? " y es creciente." :
            b < 0 ? " y es decreciente." : " y es constante.");
    }
}

// Para que aparezcan numeros al entrar
generar();