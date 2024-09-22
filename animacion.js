const boton = document.getElementById('miBoton');
const mensajeContainer = document.getElementById('mensaje-container');
const volverBtn = document.getElementById('volver');

boton.addEventListener('click', function() {
  mensajeContainer.style.display = 'flex';
});

const volverBoton = document.getElementById('volver');
volverBoton.addEventListener('click', function() {
  mensajeContainer.style.display = 'none';
});

var btnMostrarVentanaEmergente = document.getElementById("miBoton2");
var btnCerrarVentanaEmergente = document.getElementById("cerrarVentanaEmergente");
var divVentanaEmergente = document.getElementById("ventanaEmergente");

btnMostrarVentanaEmergente.addEventListener("click", function(){
  divVentanaEmergente.style.display = "block";
});

btnCerrarVentanaEmergente.addEventListener("click", function(){
  divVentanaEmergente.style.display = "none";
});

// Función para mostrar la ventana de flores
function mostrarVentanaFlores() {
  // Mostrar la ventana
  document.getElementById("ventana-flores").style.display = "block";

  // Iniciar la animación de las flores cayendo
  var flores = document.querySelectorAll("#flores img");
  for (var i = 0; i < flores.length; i++) {
      var flor = flores[i];
      flor.style.top = "0px";
      flor.style.left = Math.floor(Math.random() * window.innerWidth);

      // Animación
      var animacion = setInterval(function() {
          flor.style.top -= 10;

          if (flor.style.top < -50) {
              flor.style.top = window.innerHeight;
              flor.style.left = Math.floor(Math.random() * window.innerWidth);
          }
      }, 10);
  }
}

// Asignar el evento al botón
document.getElementById("miBoton2").addEventListener("click", mostrarVentanaFlores);
