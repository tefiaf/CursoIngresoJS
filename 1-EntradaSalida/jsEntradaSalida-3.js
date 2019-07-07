/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    //podemos tomar los datos por prompt o por id, siempre que usemos ambas debemos definir la variable antes
    var nombre;
    nombre=document.getElementById('elNombre').value;
    alert("Su nombre es: "+nombre);
}


