function mostrar()
{
	var numero = prompt ("Ingrese un número del uno al diez por favor" );
	
	numero=parseInt(numero);//parse int se hace fuera del bucle, en este caso
	
	while (isNaN(numero)){//devuelve NaN cuando se deben ingresar numeros y se ingresan letras
		numero=prompt("usted ingreso una letra, por favor ingrese un número");
	}
	while(numero >9){
		
		numero=prompt("Incorrecto, ingrese nuevamente");

	}
	document.getElementById('Numero').value=numero;
	alert("el numero ingresado es "+numero);
	//var numero = prompt("ingrese un número entre 0 y 10.");

//NaN==NaN es false 
}//FIN DE LA FUNCIÓN