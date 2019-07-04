/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numero1;
    var suma;
    var numero2;
    numero1=document.getElementById('numeroUno').value; 
    numero2=document.getElementById('numeroDos').value;
   
    numero1=parseInt(numero1);//si o si agregar adelante del parseInt un valor porque sino se pierde
    numero2=parseInt(numero2);
    suma=numero1+numero2;//defino la suma
    alert("la suma es: "+suma);
    //agrego el parseInt para pasarlo a enteros
    //agrego variable suma, y despues la defino, si no se hace esto al mostrar el alert lo que hace es la concatenación
    
}

