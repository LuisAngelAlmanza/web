var num = prompt("Ingrese un Numero")
console.log(num)

var result = 1;

for (var i = num; i > 0;  i--) {
	
	result *= i;

}

alert(result)