function convertirCelsius()
{
	var grado = document.getElementById('celcius').value;
    var convertido = grado * 9/5 + 32;

    document.getElementById('resultado').innerHTML = convertido ;
}
