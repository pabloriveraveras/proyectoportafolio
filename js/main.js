/* prueba de js */

alert("Bienvenidx a mi portafolio")



/* accion al hacer click sobre fotografia de perfil */

function cambiarImagen() {
  var imagenElement = document.getElementById('fotoprincipal');
  var nuevaImagen = 'img/fotopersonal.jpg';
  var nuevaAlt = 'Otra Imagen';

  // Verificar si la imagen actual es la imagen original
  if (imagenElement.src.endsWith('perfil.jpeg')) {
      nuevaImagen = 'img/fotopersonal.jpg';
      nuevaAlt = 'Otra Imagen';
  } else {
      nuevaImagen = 'img/perfil.jpeg';
      nuevaAlt = 'fotopersonal';
  }

  imagenElement.src = nuevaImagen;
  imagenElement.alt = nuevaAlt;
}


