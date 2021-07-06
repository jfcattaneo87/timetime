$( document ).ready(function() {

    $('html').click(function() {
    });
    
    $('#nav-boton').click(function() {
      $('nav ul').toggle()
      $('#nav-boton').toggleClass("activo");
    })
  });
  
