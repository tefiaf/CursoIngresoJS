/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numeroUno;
    var numeroDos;
    var sumar;
    numeroUno=document.getElementById('numeroUno').value;
    numeroDos=document.getElementById('numeroDos').value;
    numeroUno=parseInt(numeroUno);
    numeroDos=parseInt(numeroDos);

    sumar=numeroUno+numeroDos;

    alert("la suma es: "+sumar);
}

function restar()
{
    var numeroUno;
    var numeroDos;
    var restar;
    numeroUno=document.getElementById('numeroUno').value;
    numeroDos=document.getElementById('numeroDos').value;
    numeroUno=parseInt(numeroUno);
    numeroDos=parseInt(numeroDos);

    restar=numeroUno-numeroDos;

    alert("la resta es: "+restar);
}

function multiplicar()
{ 
    var numeroUno;
    var numeroDos;
    var multiplicar;
    numeroUno=document.getElementById('numeroUno').value;
    numeroDos=document.getElementById('numeroDos').value;
    numeroUno=parseInt(numeroUno);
    numeroDos=parseInt(numeroDos);

    multiplicar=numeroUno*numeroDos;

    alert("la multiplicación es: "+multiplicar)
}

function dividir()
{
    var numeroUno;
    var numeroDos;
    var dividir;
    numeroUno=document.getElementById('numeroUno').value;
    numeroDos=document.getElementById('numeroDos').value;
    numeroUno=parseInt(numeroUno);
    numeroDos=parseInt(numeroDos);

    dividir=numeroUno/numeroDos;

    alert("la división es: "+dividir);
}

