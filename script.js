
window.onload = function() {
  // Código de la animación de las flores aquí
  onload = () =>{
        document.body.classList.remove("container");
          
  const audio = document.getElementById('miMusica');
  const boton = document.getElementById('botonMusica');

  boton.addEventListener('click', function() {
    if (audio.paused) {
      audio.play();
      boton.textContent = 'Pausar música';
    } else {
      audio.pause();
      boton.textContent = 'Reproducir música';
    }
  });
};
