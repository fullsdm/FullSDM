document.getElementById("sumar").addEventListener("click", function () {

    let num_1 = parseInt(document.getElementById("num_1").value);
    let num_2 = parseInt(document.getElementById("num_2").value);

    let suma = num_1 + num_2;

    document.getElementById("resultado").innerHTML = "El resultado es: "
        + suma;

    // alert("La suma de los numeros es: " + suma);

})