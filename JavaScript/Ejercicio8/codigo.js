function texto()
{
  var frase=prompt("Escribe una frase").toLowerCase();
 
  // eliminamos los espacios en blanco
  frase=frase.split(' ').join('')
 
  for (var i=0;i<frase.length;i++){
    if(frase[i]!=frase[frase.length-i-1]){
      return false;
    }
  }
  return true;
}
 
if(texto())
{
  alert("Esto es palíndromo");
}else{
  alert("Esto no es palíndromo")
}