// First Slideshow
let slideIndex1 = 1;
document.addEventListener("DOMContentLoaded", function() {
  startSlideshow(1);
  showSlides(slideIndex1, 1);
});

// Second Slideshow
let slideIndex2 = 1;
document.addEventListener("DOMContentLoaded", function() {
  startSlideshow(2);
  showSlides(slideIndex2, 2);
});

// Third Slideshow
let slideIndex3 = 1;
document.addEventListener("DOMContentLoaded", function() {
  startSlideshow(3);
  showSlides(slideIndex3, 3);
});

// Fourth Slideshow
let slideIndex4 = 1;
document.addEventListener("DOMContentLoaded", function() {
  startSlideshow(4);
  showSlides(slideIndex4, 4);
});

// Fifth Slideshow
let slideIndex5 = 1;
document.addEventListener("DOMContentLoaded", function() {
  startSlideshow(5);
  showSlides(slideIndex5, 5);
});

function plusSlides(n, slideshowIndex) {
  showSlides(slideIndex[slideshowIndex - 1] + n, slideshowIndex);
}

function currentSlide(n, slideshowIndex) {
  showSlides(n, slideshowIndex);
}

function showSlides(n, slideshowIndex) {
  let slides = document.querySelectorAll(`#slideshow${slideshowIndex} .mySlides`);
  let dots = document.querySelectorAll(`#slideshow${slideshowIndex} .dot`);
  let slideIndex;

  // Set the appropriate slideIndex based on the slideshowIndex
  if (slideshowIndex === 1) {
    slideIndex = slideIndex1;
  } else if (slideshowIndex === 2) {
    slideIndex = slideIndex2;
  } else if (slideshowIndex === 3) {
    slideIndex = slideIndex3;
  } else if (slideshowIndex === 4) {
    slideIndex = slideIndex4;
  } else if (slideshowIndex === 5) {
    slideIndex = slideIndex5;
  }

  // Wrap the slideIndex if it goes beyond the slide count
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides and remove active class from dots
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  // Display the current slide and update the active dot
  if (slides.length > 0) {
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1]?.classList.add("active");
  }

  // Update the appropriate slideIndex variable
  if (slideshowIndex === 1) {
    slideIndex1 = slideIndex;
  } else if (slideshowIndex === 2) {
    slideIndex2 = slideIndex;
  } else if (slideshowIndex === 3) {
    slideIndex3 = slideIndex;
  } else if (slideshowIndex === 4) {
    slideIndex4 = slideIndex;
  } else if (slideshowIndex === 5) {
    slideIndex5 = slideIndex;
  }
}


// Automatic slideshow for each slideshow
function startSlideshow(slideshowIndex) {
  let slides = document.querySelectorAll(`#slideshow${slideshowIndex} .mySlides`);
  let slideIndex;

  // Set the appropriate slideIndex based on the slideshowIndex
  if (slideshowIndex === 1) {
    slideIndex = slideIndex1;
  } else if (slideshowIndex === 2) {
    slideIndex = slideIndex2;
  } else if (slideshowIndex === 3) {
    slideIndex = slideIndex3;
  } else if (slideshowIndex === 4) {
    slideIndex = slideIndex4;
  } else if (slideshowIndex === 5) {
    slideIndex = slideIndex5;
  }

  // Increment the slideIndex and show the slides
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  showSlides(slideIndex, slideshowIndex);

  // Set the timeout for the next slide
  setTimeout(function () {
    startSlideshow(slideshowIndex);
  }, 5000); // Change image every 5 seconds
}

// Call the startSlideshow function for each slideshow
document.addEventListener("DOMContentLoaded", function () {
  for (let i = 1; i <= 5; i++) {
    startSlideshow(i);
  }
});

// Event listeners for dot navigation
document.querySelectorAll(".dot").forEach(function (dot) {
  dot.addEventListener("click", function () {
    let slideshowIndex = parseInt(dot.dataset.slideshowIndex);
    let slideIndex = parseInt(dot.dataset.slideIndex);
    currentSlide(slideIndex, slideshowIndex);
  });
});
