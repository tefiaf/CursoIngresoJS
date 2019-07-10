function mostrar()
{
//tomo la edad  

var edad;
edad=document.getElementById('edad').value;
if (edad <13)
{
    alert("usted es un niño");
}
if (edad >12 && edad <18)

{
    alert("usted es adolescente");
}
if (edad >17)
{
    alert("usted es mayor de edad");
}

}//FIN DE LA FUNCIÓN