

    function toggleMenu() {
        const menu = document.getElementById('menu');
        menu.classList.toggle('active');
    }
    window.onscroll = function() {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 100) {
          navbar.style.background = ' rgb(26, 26, 26)';
          navbar.style.height = '70px'; 
      } else {
          navbar.style.background = 'radial-gradient(rgb(255, 240, 240), rgb(255, 247, 225)) 0% 0% / cover fixed';
          navbar.style.height = '90px';  
          men.style.color = 'white';
      }
  };
  
const text = "Estudiante Front-end y back-end";
let index = 0;
let isWriting = true;
const typingElement = document.querySelector('.typing');

function typeEffect() {
  if (isWriting) {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
    } else {
      isWriting = false;
    }
  } else {
    if (index > 1) {
      typingElement.textContent = text.substring(0, index - 1);
      index--;
    } else {
      isWriting = true;
    }
  }

  setTimeout(typeEffect, isWriting ? 150 :100); 
}
typeEffect();

  document.getElementById('movemen').addEventListener('mouseover', function() {
    this.style.transition = 'transform 0.3s ease';
    this.style.transform = 'translateX(10px)';

    setTimeout(() => {
      this.style.transition = 'transform 0.1s ease';
      this.style.transform = 'translateX(-5px)';
    }, 150);

    setTimeout(() => {
      this.style.transition = 'transform 0.1s ease';
      this.style.transform = 'translateX(-3)';
    }, 250);
    setTimeout(() => {
      this.style.transition = 'transform 0.1s ease';
      this.style.transform = 'translateX(0)';
    }, 300);

  });
  
  document.getElementById('movemen').addEventListener('mouseout', function() {
    // Restablecer la transformación al salir
    this.style.transition = 'transform 0.3s ease';
    this.style.transform = 'translateX(0)';
  });
  


