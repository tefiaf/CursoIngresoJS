/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var resultado;
    
    sueldo=document.getElementById('sueldo').value;
    
    sueldo=parseInt(sueldo);
    resultado=parseInt(resultado);
    
    resultado=sueldo*10/100;

    document.getElementById('resultado').value=resultado;
    
	
}
