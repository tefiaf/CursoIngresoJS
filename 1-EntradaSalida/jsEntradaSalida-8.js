/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var numeroUno;
    var numeroDos;
    var SacarResto;
    numeroUno=document.getElementById('numeroDividendo').value;
    numeroDos=document.getElementById('numeroDivisor').value;

    numeroUno=parseInt(numeroUno);
    numeroDos=parseInt(numeroDos);

    SacarResto=numeroUno%numeroDos;

    alert("El resto es: "+SacarResto);

}
