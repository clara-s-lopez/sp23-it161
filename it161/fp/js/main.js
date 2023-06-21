//https://tinyurl.com/dynamic-html-checker
document.getElementById("html-checker").setAttribute("href","https://validator.w3.org/nu/?doc=" + location.href);
  
document.getElementById("css-checker").setAttribute("href","https://jigsaw.w3.org/css-validator/validator?uri=" + location.href); 
 
 //set current year in span with id of this-year
 let d = new Date(); let thisYear = d.getFullYear();
 document.getElementById("this-year").innerHTML = thisYear;

//Moves overlay containing slide menu to the front
 document.getElementById('menu-toggle').addEventListener('change', function() {
    const overlay = document.getElementById('overlay');
    if (this.checked) {
      overlay.style.zIndex = '9999';
    } else {
      // Delay the restoration of zIndex by 0.3 seconds
    setTimeout(function() {
        overlay.style.zIndex = 'initial';
      }, 300);
    }
  });
  