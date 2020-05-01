
var endTime = new Date("May 10, 2020 0:00:00").getTime();
var x = setInterval(function() {
    var currentTime = new Date().getTime();
    var distance = Math.floor((endTime - currentTime)/1000);
    distance = distance.toLocaleString('en-US');
    document.getElementById("countdown").innerHTML = distance;
},1000);

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var slides = document.getElementsByClassName("image");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
      slideIndex = n - slides.length;
    }
  if (n < 1) {
      slideIndex = slides.length + n;
    }
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}