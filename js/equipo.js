$("#boton-equipo").on("click", obtenerEquipo);

function obtenerEquipo() {
  $.ajax({
    url: "https://reqres.in/api/users",
    success: function(respuesta) {

      var listaEquipo = $("#lista-equipo");
      $.each(respuesta.data, function(index, elemento) {
        listaEquipo.append(
            '<div>'
          +     '<p>' + elemento.first_name + ' ' + elemento.last_name + '</p>'
          +     '<img src=' + elemento.avatar + '></img>'
          + '</div>'
          
        );    
      });
    },
    error: function() {
      console.log("No se ha podido obtener la información");
    }
  });
}
