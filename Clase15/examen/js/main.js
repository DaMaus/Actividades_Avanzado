$("#boton").click(function(){

  var aleatorio = Math.floor(Math.random()*5);
  var cuadro = $("input")
  if (cuadro!=Null) {
    if(aleatorio==0){
      $("p").html("Si");
    }else if (aleatorio==1) {
      $("p").html("No");
    }else if (aleatorio==2) {
      $("p").html("Tal vez");
    }else if (aleatorio==3) {
      $("p").html("Pregunta de nuevo");
    }else if (aleatorio==4) {
      $("p").html("probablemente");
    }
  }

});
