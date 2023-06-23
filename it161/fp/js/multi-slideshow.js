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
  if (slideshowIndex === 1) {
    slideIndex1 += n;
    showSlides(slideIndex1, slideshowIndex);
  } else if (slideshowIndex === 2) {
    slideIndex2 += n;
    showSlides(slideIndex2, slideshowIndex);
  } else if (slideshowIndex === 3) {
    slideIndex3 += n;
    showSlides(slideIndex3, slideshowIndex);
  } else if (slideshowIndex === 4) {
    slideIndex4 += n;
    showSlides(slideIndex4, slideshowIndex);
  } else if (slideshowIndex === 5) {
    slideIndex5 += n;
    showSlides(slideIndex5, slideshowIndex);
  }
} 

function currentSlide(n, slideshowIndex) {
  if (slideshowIndex === 1) {
    slideIndex1 = n;
    showSlides(slideIndex1, slideshowIndex);
  } else if (slideshowIndex === 2) {
    slideIndex2 = n;
    showSlides(slideIndex2, slideshowIndex);
  } else if (slideshowIndex === 3) {
    slideIndex3 = n;
    showSlides(slideIndex3, slideshowIndex);
  } else if (slideshowIndex === 4) {
    slideIndex4 = n;
    showSlides(slideIndex4, slideshowIndex);
  } else if (slideshowIndex === 5) {
    slideIndex5 = n;
    showSlides(slideIndex5, slideshowIndex);
  }
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

  // Hide all slides
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  // Increment the slideIndex and wrap around if necessary
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Display the current slide
  slides[slideIndex - 1].style.display = "block";

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

  // Set the timeout for the next slide
  setTimeout(function () {
    startSlideshow(slideshowIndex);
  }, 5000); // Change image every 5 seconds
}

// Event listeners for dot navigation
document.querySelectorAll(".dot").forEach(function (dot) {
  dot.addEventListener("click", function () {
    let slideshowIndex = parseInt(dot.dataset.slideshowIndex);
    let slideIndex = parseInt(dot.dataset.slideIndex);
    currentSlide(slideIndex, slideshowIndex);
  });
});
