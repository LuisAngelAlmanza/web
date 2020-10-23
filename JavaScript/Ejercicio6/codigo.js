var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var num = prompt("Ingrese Numero DNI")
console.log(num)

var letra = prompt("Ingrese Letra DNI")
console.log(letra)

if(num >= 0 || num <= 99999999) {

	var letradni = num % 23
	var letra1 = letras[letradni]
	console.log(letras[letradni])
  
  if(letra1 == letra) {
    alert("El numero y la letra de DNI es correcto");
  }
  else {
    alert("La letra que ha indicado no es correcta");
  }
}
else {
	alert("El numero es Incorrecto");
}
//residuo sobre 23 es la posicion del arreglo almacenar variable la letra