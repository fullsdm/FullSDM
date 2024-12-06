$(document).ready(function () {
  $(document).on("submit", "#form", function (event) {
    event.preventDefault();

    let nombre = $("#nombre").val();
    let apellido = $("#apellido").val();
    let correo = $("#correo").val();

    let mensajes = [];

    let esValido = true;
    let esto = false;

    let caracteresNoValinos = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", '"', "#", "$", "%", "&", "/", "(", ")", "=", "?", "¿", "¡", "+", "*", "-", "´", "{", "}", "[", "]"];

    for (let i = 0; i < nombre.length; i++) {
      for (let c = 0; c < caracteresNoValinos.length; c++) {
        if (nombre[i] == caracteresNoValinos[c]) {
          esto = true;
        }
      }
    }

    for (let i = 0; i < apellido.length; i++) {
      for (let c = 0; c < caracteresNoValinos.length; c++) {
        if (apellido[i] == caracteresNoValinos[c]) {
          esto = true;
        }
      }
    }

    for (let i = 0; i < apellido.length; i++) {
      for (let c = 0; c < caracteresNoValinos.length; c++) {
        if (apellido[i] == caracteresNoValinos[c]) {
          esto = true;
        }
      }
    }

    if (nombre == "") {
      $("#nombre").addClass("is-invalid");
      mensajes.push("El campo Nombre es requerido");
      esValido = false;
    } else if (esto) {
      mensajes.push("El campo Nombre no puede tener numeros ni caracteres especiales");
      esValido = false;
    } else {
      $("#nombre").removeClass("is-invalid");
      $("#nombre").addClass("is-valid");
    }

    if (apellido == "") {
      $("#apellido").addClass("is-invalid");
      mensajes.push("El campo Apellido es requerido");
      esValido = false;
    } else if (esto) {
      mensajes.push("El campo Apellido no puede tener numeros ni caracteres especiales");
      esValido = false;
    } else {
      $("#apellido").removeClass("is-invalid");
      $("#apellido").addClass("is-valid");
    }

    if (correo == "") {
      $("#correo").addClass("is-invalid");
      mensajes.push("El campo Correo es requerido");
      esValido = false;
    } else if (esto) {
      mensajes.push("El campo Correo no puede tener numeros ni caracteres especiales");
      esValido = false;
    } else {
      $("#correo").removeClass("is-invalid");
      $("#correo").addClass("is-valid");
    }

    if (esValido) {
      alert("Se enviaron los datos correctamente");
    } else {
      $("#alert").html(mensajes.join("<br>"));
      $("#alert").removeClass("d-none");
    }
  });
});
