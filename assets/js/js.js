function updateDivHeight() {
    var screenWidth = window.innerWidth;
    var newHeight = screenWidth/1.7; // puedes ajustar el factor según tus necesidades
    var myDiv = document.getElementById('hero');
    myDiv.style.height = newHeight + 'px';
  }
  
  // llamar la función al cargar la página y al cambiar el tamaño de la ventana
  updateDivHeight();
  window.addEventListener('resize', updateDivHeight);
  