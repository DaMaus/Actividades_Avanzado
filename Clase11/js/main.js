/*
alert("Tambien funciona aqui javascript");
document.write("Podemos mostrar algo");
console.log("Aqui abajo tambien se ve");

document.getElementById("texto").innerHTML="Este es el segundo texo";
*/

/*
var x,y,z;

x=5;
y=6.3;
z=x+y;
alert(z);
*/
//x=number();

/*
function tuNombreCompleto(nombre, apellido){
  var nombreCompleto = nombre+" "+apellido;
  //document.write(nombreCompleto);
  return nombreCompleto;
}

var alumno=tuNombreCompleto("Mauricio", "Hernández");

alert(alumno);
*/
/*
var miPrimerObjeto = {nombre:"Isela", apellido:"Garcia"};

alert(miPrimerObjeto.nombre);
*/

/*
var persona = "Jorge";

var otraPersona = persona;

persona = "Amanda";

//document.write(persona);
//document.write(otraPersona);
*/
//--------------

/*
var persona = {nombre:"Jorge"};
var otraPersona2 = persona;

persona.nombre = "Amanda"; //a los dos objetos se les cambio el nombre D:

document.write(persona.nombre);
document.write(otraPersona2.nombre);
*/
/*
var fruta ={
  nombre:"Mango",
  color:"amarillo",
  dulce:8,

  queDulceSoy:function(){
    alert("Soy muuuuuy dulce :3");
  }
}

  fruta.queDulceSoy();
*/
/*
alert("retardo");
document.getElementById("primero").innerHTML+="Hola soy Maus";
*/
/*
document.getElementById("botonConClick").onclick=function(){
  document.getElementById("aparecerTexto").innerHTML="Este era un texto fantasma";

  document.getElementById("aparecerTexto").style.cssText = "color:blue; background-color: red;"
}

var nombre = "primero";

document.getElementById("priboton").onclick=function(){
  document.getElementById(nombre).innerHTML = "Si resulto!!!";
}
*/

document.getElementById('priboton').onclick=function(){
  var valor = document.getElementById('miInput').value;
  document.getElementById('vacio').innerHTML=valor;
}
//54370
