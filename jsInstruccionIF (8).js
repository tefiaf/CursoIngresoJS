function mostrar()
{
//tomo la edad  

var edad;
var estadoCivil;
estadoCivil=document.getElementById('estadoCivil').value;
edad=document.getElementById('edad').value;
if (edad>18 && estadoCivil!="soltero")

{
    alert("Es soltero y no es menor");
}



}//FIN DE LA FUNCIÓN