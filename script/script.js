const playButton = document.getElementById("playButton");
const audio = document.getElementById("audio");
const rotateImage = document.getElementById("rotateImage");

playButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playButton.textContent = "Pause";
    rotateImage.classList.add("rotating"); // Inicia la rotación de la imagen
  } else {
    audio.pause();
    playButton.textContent = "Play";
    rotateImage.classList.remove("rotating"); // Detiene la rotación de la imagen
  }
});
