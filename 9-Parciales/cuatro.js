function mostrar()
{
    var numerouno;
    var numerodos;
    var resultado;
    numerouno=prompt("ingrese un numero");
    numerodos=prompt("ingrese otro numero");
    if(numerouno==numerodos)
    {
        resultado=numerouno+numerodos;
    }else
    {
    numerouno=parseInt(numerouno);
    numerodos=parseInt(numerodos);
    if (numerouno>numerodos)
    {
        resultado=numerouno/numerodos;        
    }else
    {
        resultado=numerouno+numerodos;
    }if (resultado<50)
    {
        resultado="la suma es "+resultado+" y es menor a 50";
    }
    }

    alert(resultado);
}
