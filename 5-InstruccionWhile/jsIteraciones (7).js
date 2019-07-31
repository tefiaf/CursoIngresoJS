function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	var promedio;
	var suma;
	
	
		contador++;
		numero=parseInt(numero);
		numero=prompt("ingrese un numero por favor");
		while(isNaN(numero)){
			numero=parseInt(numero);
			numero=prompt("dato incorrecto");
			
		}
		acumulador+=numero;
		
		
		while(respuesta!="si"){
		numero=prompt("desea seguir ingresando numeros?")
		}
		

	promedio=acumulador/contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN