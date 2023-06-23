let slideIndex = 0;
document.addEventListener("DOMContentLoaded", function() {
  startSlideshow();
  showSlides(slideIndex);
});

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Automatic slideshow
function startSlideshow() {
  let slides = document.getElementsByClassName("mySlides");
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  showSlides(slideIndex);
  setTimeout(startSlideshow, 5000); // Change image every 5 seconds
}

document.addEventListener("DOMContentLoaded", function() {
  startSlideshow();
  showSlides(slideIndex);

  const overlay = document.querySelector('.gallery-overlay');
  const overlayImage = overlay.querySelector('.overlay-image');
  const slides = document.querySelectorAll('.mySlides');

  slides.forEach(function(slide, index) {
    slide.addEventListener('click', function() {
      slideIndex = index;
      showSlides(slideIndex);
      overlayImage.src = slide.querySelector('img').src;
      overlay.style.display = 'flex';
    });
  });

  const closeBtn = overlay.querySelector('.close-btn');
  closeBtn.addEventListener('click', function() {
    overlay.style.display = 'none';
  });
});
