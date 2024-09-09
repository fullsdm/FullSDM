const dialog = document.getElementById("myDialog");
const openDialogButton = document.getElementById("openDialog");
const closeDialogButton = document.getElementById("closeDialog");

openDialogButton.addEventListener("click", () => {
  dialog.showModal();
});

closeDialogButton.addEventListener("click", () => {
  dialog.close();
});
