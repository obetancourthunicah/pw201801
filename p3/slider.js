///Variables iniciales
var slideNum = 0;
var slideDirection = 1; // -1
var currentSlide = 0;
var timerIdentity = null;
var slides = null;
var slideLoading = 0;
var sliderow = null;
function onDocumentLoaded(e) {
  //Vamos a obtener los slides
  //alert("Cargo el Documento"); // void function miForma_load(){ }
  slides = document.querySelectorAll(".slide");
  sliderow = document.getElementsByClassName("slideroll")[0];
  slideLoading = slides.length - 1;
  for (var i = 0; i < slides.length; i++) {
    var slideImg = slides[i].getElementsByTagName("img")[0];
    if (
      slideImg.hasAttributes("data-src") &&
      slideImg.getAttribute("data-src")
    ) {
      slideImg.src = slideImg.getAttribute("data-src");
      slideImg.addEventListener("load", slideLoaded);
    }
  }
}

function slideLoaded(e) {
  slideLoading--;
  if (slideLoading == 0) {
    initializeSlider();
  }
}

function initializeSlider() {
  sliderow.style.width = slides.length + "00vw";
  sliderow.style.left = "calc(" + currentSlide + " *  100vw  * -1)";
  timerIdentity = setTimeout(sliderTick, 3000);
}

function sliderTick() {
  currentSlide += slideDirection;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  if (currentSlide == slides.length) currentSlide = 0;
  sliderow.style.left = "calc(" + currentSlide + " *  100vw  * -1)";
  timerIdentity = setTimeout(sliderTick, 5000);
}

document.addEventListener("DOMContentLoaded", onDocumentLoaded);
