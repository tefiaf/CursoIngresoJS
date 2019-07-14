/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var perimetro;
    var alambre;
    largo=document.getElementById('Largo').value;
    ancho=document.getElementById('Ancho').value;
    largo=parseInt(largo);
    ancho=parseInt(ancho);
    perimetro=(largo+ancho)*2;
    alambre=perimetro/3;
    alert("se debe alambra con tres hilos de alambre de "+alambre+" cm.")

}
function Circulo () 
{
    var radio;
    var tamaño;
    var alambre;
    radio=document.getElementById('Radio').value;
    tamaño=radio*2*3,14;
    alambre=tamaño/3;
    alert("se debe alambra con tres hilos de alambre de "+alambre+ "cm.");

}
function Materiales () 
{
    var largo;
    var ancho;
    var perimetro;
    largo=document.getElementById('Largo').value;
    ancho=document.getElementById('Ancho').value;
    largo=parseInt(largo);
    ancho=parseInt(ancho);
    perimetro=(largo+ancho)*2;
    
}