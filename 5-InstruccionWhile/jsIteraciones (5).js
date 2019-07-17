function mostrar()
{

    var sexo;
    sexo= prompt("ingrese f ó m .");
    sexo=sexo.toLowerCase();//para forzarlo a que este en miniscula
    while (sexo!="f"&&sexo!="m"){
        sexo=prompt("dato incorrecto, reintente por favor");

    }
    document.getElementById('Sexo').value=sexo;
    
}//FIN DE LA FUNCIÓN