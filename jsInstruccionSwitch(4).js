function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;
alert (mes);
    //18=="18" da verdadero
    //18==="18" da falso porque es igualdad estricta, el switch utiliza este tipo de igualdad
    switch(mes)
    {
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre": alert ("Este mes tiene 31 días");
        break;

        case "Febrero":alert("Este mes tiene 28 días");
        break;

        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre": alert("Este mes tiene 30 días");
        break;
    }
	



}//FIN DE LA FUNCIÓN