/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre; 
	nombre = prompt("introduzca aqui su nombre","stephanie"); // prompt devuelve valores, recibe cual es el mensaje y su valor por defecto
	document.getElementByID('ElID').value=nombre;

//var numeroUno;
//var numeroDos;
//numeroUno=666;
//numeroDos= numeroUno;
//numeroUno=numeroDos;
//alert(numeroUno);
//alert(numeroDos);
//la entrada de datos puede ser por ID, var algo=document.getElementByID('ElID').value
//tambien se puede hacer salida de datos por ID, document.getElementByID('ElID').value= var algo
}

