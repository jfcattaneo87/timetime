//aplicando jquery para crear funciones en el menu
$( document ).ready(function() {

    $('html').click(function() {
    });
    
    $('#nav-boton').click(function() {
      $('nav ul').toggle()
      $('#nav-boton').toggleClass("activo");
    })
  });
  
