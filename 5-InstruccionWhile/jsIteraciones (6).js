function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var promedio;
	var suma;

	

	
	while(contador<5){
		contador++;
		
		numero=prompt("ingrese cinco numeros por favor");
		numero=parseInt(numero);
		while(isNaN(numero)){
			numero=prompt("dato incorrecto, usted ingreso una letra");
			numero=parseInt(numero);//lo parseo ya que si no es un numero de todas formas va a seguir con ese dato 
		
		}
		acumulador+=numero;//el acumulador esta adentro del while ya que tiene que ir guardando todos los numeros
	}
	
	promedio=acumulador/contador;


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN