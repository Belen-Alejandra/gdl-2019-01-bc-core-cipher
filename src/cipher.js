window.cipher = {
  function alpha(string,desp){
let salida= '';
for (let i = 0; i < string.length; i++){
   oldAscII = string[i].charCodeAt();
    newAscII = (oldAscII - 65 + desp) % 26 + 65;
    salida = salida.concat(String.fromCharCode(newAscII))
    //console.log(String.fromCharCode(newAscII))
}
  document.write(salida)
}

function alphaDecod(string,desp){
  let salida = '';
  for (let i = 0; i<string.length;i++){
     oldAscII = string[i].charCodeAt();

      newAscII = (oldAscII + 65 - desp) % 26 + 65;
      salida = salida.concat(String.fromCharCode(newAscII))
      //salida=salida.concat(oldAscII[i]);
  }
  document.write(salida)
}
};
