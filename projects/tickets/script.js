const dialog = document.getElementById("myDialog");
const openDialogButton = document.getElementById("openDialog");
const closeDialogButton = document.getElementById("closeDialog");

// Abrir el diálogo como modal centrado
openDialogButton.addEventListener("click", () => {
  dialog.showModal();
});

// Cerrar el diálogo
closeDialogButton.addEventListener("click", () => {
  dialog.close();
});
