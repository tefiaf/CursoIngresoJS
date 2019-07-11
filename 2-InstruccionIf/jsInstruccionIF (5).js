function mostrar()
{
//tomo la edad  
    var precio;
    precio=document.getElementById('edad').value;
    if (precio<25)
    {
        alert("Barato");
    }else
    {
        if (precio>75)
        {
            alert("caro");
        }else
        {
            alert("bien");
        }
    
    }
    
}//FIN DE LA FUNCIÓN