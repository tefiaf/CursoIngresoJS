function mostrar()
{

    var numero;
    var acumulador;
    prompt("ingrese un numero por favor");
    acumulador=parseInt(acumulador);
    for(i=0;i<=10;i=i+2)//si solo pongo i+2 no me va a funcionar
    {
        alert(i);//pongo alert y no break ya que hace el corte solo cuando llega al numero ingresado
        acumulador++;
    }
    
    alert("la cantidad de numeros pares es "+acumulador);


}//FIN DE LA FUNCIÓN