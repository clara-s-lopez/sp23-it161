// First Slideshow
let slideIndex1 = 0;
document.addEventListener("DOMContentLoaded", function() {
  startSlideshow(1);
  showSlides(slideIndex1, 1);
});

// Second Slideshow
let slideIndex2 = 0;
document.addEventListener("DOMContentLoaded", function() {
  startSlideshow(2);
  showSlides(slideIndex1, 2);
});

// Third Slideshow
let slideIndex3 = 0;
document.addEventListener("DOMContentLoaded", function() {
  startSlideshow(3);
  showSlides(slideIndex1, 3);
});

// Fourth Slideshow
let slideIndex4 = 0;
document.addEventListener("DOMContentLoaded", function() {
  startSlideshow(4);
  showSlides(slideIndex1, 4);
});

// Fifth Slideshow
let slideIndex5 = 0;
document.addEventListener("DOMContentLoaded", function() {
  startSlideshow(5);
  showSlides(slideIndex1, 5);
});

function plusSlides(n, slideshowIndex) {
  showSlides(slideIndex + n, slideshowIndex);
}

function currentSlide(n, slideshowIndex) {
  showSlides(n, slideshowIndex);
}

function showSlides(n, slideshowIndex) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsById("dots" + slideshowIndex).getElementsByClassName("dot");
  let slideIndex;

  // Set the appropriate slideIndex based on the slideshowIndex
  if (slideshowIndex === 1) {
        slideIndex = slideIndex1;
    } 
    else if (slideshowIndex === 2) {
        slideIndex = slideIndex2;
    }
    else if (slideshowIndex === 3) {
        slideIndex = slideIndex3;
    }
    else if (slideshowIndex === 4) {
        slideIndex = slideIndex4;
    }
    else if (slideshowIndex === 5) {
        slideIndex = slideIndex5;
    }

  // Perform the slide navigation and update the slideIndex accordingly
    if (n > slides.length) {
        slideIndex = 1;
    }    
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides and remove active class from dots
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide and update the active dot
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";

    // Update the appropriate slideIndex variable
    if (slideshowIndex === 1) {
            slideIndex1 = slideIndex;
    } 
    else if (slideshowIndex === 2) {
        slideIndex2 = slideIndex;
    }
    else if (slideshowIndex === 3) {
        slideIndex3 = slideIndex;
    }
    else if (slideshowIndex === 4) {
        slideIndex4 = slideIndex;
    }
    else if (slideshowIndex === 5) {
        slideIndex5 = slideIndex;
    }
}

// Automatic slideshow for the first slideshow
function startSlideshow(slideshowIndex) {
    let slides = document.getElementsByClassName("mySlides");
    let slideIndex;

  // Set the appropriate slideIndex based on the slideshowIndex
    if (slideshowIndex === 1) {
        slideIndex = slideIndex1;
    } 
    else if (slideshowIndex === 2) {
        slideIndex = slideIndex2;
    }
    else if (slideshowIndex === 3) {
        slideIndex = slideIndex3;
    }
    else if (slideshowIndex === 4) {
        slideIndex = slideIndex4;
    }
    else if (slideshowIndex === 5) {
        slideIndex = slideIndex5;
    }

  // Increment the slideIndex and show the slides
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  showSlides(slideIndex, slideshowIndex);

  // Set the timeout for the next slide
  setTimeout(function() {
    startSlideshow(slideshowIndex);
  }, 5000); // Change image every 5 seconds
}

// Call the startSlideshow function for each slideshow
document.addEventListener("DOMContentLoaded", function() {
  for (let i = 0; i <= 5; i++) {
    startSlideshow(i);
  }
});
