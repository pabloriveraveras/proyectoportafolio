/* container 3 */

var carouselImages = document.querySelectorAll(".tarjeta img");

carouselImages.forEach(function(image) {
  image.addEventListener("click", function() {
    var projectUrl = this.getAttribute("data-url");
    window.location.href = projectUrl;
  });
});


/* efecto boton container 2 */

const button = document.getElementById('#btncv');
  button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.2)';
  });
  button.addEventListener('mousedown', () => {
    button.style.backgroundColor = 'red';
  });