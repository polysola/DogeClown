document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('nav a');
 
  for (const link of navLinks) {
      link.addEventListener('click', function (event) {
          event.preventDefault();
          const section = document.querySelector(this.getAttribute('href'));
          section.scrollIntoView({ behavior: 'smooth' });
      });
  }

  document.querySelector('.walletSvgButton').addEventListener('click', function() {
    this.querySelector('a').click();
  });
  
  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
});