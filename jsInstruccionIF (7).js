function mostrar()
{
//tomo la edad  

    var edad;
    var estadoCivil;
    estadoCivil=document.getElementById('estadoCivil').value;
    edad=document.getElementById('edad').value;
    if (edad<18 && estadoCivil!="soltero")//El distinto necesita de los dos lados algo
    
    {
        alert("Es muy pequeño para NO ser soltero");
    }


}//FIN DE LA FUNCIÓN