document.getElementById("sumar").addEventListener("click", function () {

    let num_1 = parseInt(document.getElementById("num_1").value);
    let num_2 = parseInt(document.getElementById("num_2").value);

    let suma = num_1 + num_2;

    document.getElementById("resultado").innerHTML = "El resultado es: " + suma;

    // alert("La suma de los numeros es: " + suma);

});

document.getElementById("resta").addEventListener("click", function () {

    let num_1 = parseInt(document.getElementById("num_1").value);
    let num_2 = parseInt(document.getElementById("num_2").value);

    let resta = num_1 - num_2;

    document.getElementById("resultado").innerHTML = "El resultado es: " + resta;

    // alert("La suma de los numeros es: " + suma);

});

document.getElementById("sumar").addEventListener("click", function () {

    let num_1 = parseInt(document.getElementById("num_1").value);
    let num_2 = parseInt(document.getElementById("num_2").value);

    let multiplicacion = num_1 * num_2;

    document.getElementById("resultado").innerHTML = "El resultado es: " + multiplicacion;

    // alert("La suma de los numeros es: " + suma);

});

document.getElementById("sumar").addEventListener("click", function () {

    let num_1 = parseInt(document.getElementById("num_1").value);
    let num_2 = parseInt(document.getElementById("num_2").value);

    let divicion = num_1 / num_2;

    document.getElementById("resultado").innerHTML = "El resultado es: " + divicion;

    // alert("La suma de los numeros es: " + suma);

});