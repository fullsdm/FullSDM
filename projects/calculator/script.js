document.getElementById("sumar").addEventListener("click", function () {
  let num_1 = parseInt(document.getElementById("num_1").value);
  let num_2 = parseInt(document.getElementById("num_2").value);

  let operacion = parseInt(document.getElementById("operacion").value);
  let resultado = 0;

  if (operacion == 1) {
    resultado = num_1 + num_2;
  } else if (operacion == 2) {
    resultado = num_1 - num_2;
  } else if (operacion == 3) {
    resultado = num_1 * num_2;
  } else if (operacion == 5) {
    resultado = num_1 / num_2;
  } else if (resultado == Infinity) {
    resultado = "El valor de uno de los numeros no puede ser CERO"
  }

  document.getElementById("resultado").innerHTML = "El resultado es: " + resultado;
});
