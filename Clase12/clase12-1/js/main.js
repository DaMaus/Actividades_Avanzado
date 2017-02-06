/*if(jQuery){
  alert("si tengo jQuery");
}*/
/*
$(".circulo").click(function() { //pesitos reemplaza document... para clases se usa . y para ID se usa #
  alert("Soy el circulo");
});

$("#cuadrado").click(function () {
  alert("Soy el cuadrado");
});
*/
/*
$("div").click(function() {
  alert("soy un div");
});

$("p").click(function() {
  alert("Soy el textoooooo");
});
*/
/*
$(".circulo").click(function () {
  alert($("p").html()); //.html nos da lo que contenga el p en el html
})
*/
/*
$(".circulo").click(function () {
  $("p").html("Texto a reemplazar"); // asi reemplazas cosas
})*/
/*
var condi=0;
$(".circulo").click(function () {
  if (condi==0) {
      $("iframe").attr("src","http://www.jornada.unam.mx/ultimas");
      condi++;
  }
  else {
      $("iframe").attr("src","http://www.eluniversal.com.mx/");
      condi=0  }
});
*/
/*
$("button").click(function() {
  $(".circulo").addClass("loco"); //añado clase al circulo
});
*/

/*
$("button").click(function() {
  $(".circulo").fadeOut(3000);
});
*/

$(".circulo").hover(function(){
  $(this).animate({
    width:"300px",
    height:"300px"
  },4000);
});
