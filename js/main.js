/* Carousel en container 3 */

var carouselImages = document.querySelectorAll(".tarjeta img");

carouselImages.forEach(function(image) {
  image.addEventListener("click", function() {
    var projectUrl = this.getAttribute("data-url");
    window.location.href = projectUrl;
  });
});