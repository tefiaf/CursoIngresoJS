function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	numero=parseInt(numero);
	numero=prompt("ingrese cinco numeros por favor");

	while(isNaN(numero)){
		numero=prompt("dato incorrecto, usted ingreso una letra");
	}
	while(contador<5){
		numero=acumulador++;
	}
	

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN