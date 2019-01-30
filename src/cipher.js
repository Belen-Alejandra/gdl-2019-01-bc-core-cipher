window.cipher = {
  function encode(offset, string){
let salida = '';
let stringM = string.toUpperCase();
for (let i = 0; i < stringM.length; i++){
   oldAscII = stringM[i].charCodeAt();
   if(oldAscII === 32){
     newAscII = 32;
   }
    else {
     newAscII = (oldAscII - 65 + offset) % 26 + 65;
   }
    salida = salida.concat(String.fromCharCode(newAscII))
    //console.log(String.fromCharCode(newAscII))
}
  return salida;
}

function decode(offset, string){
  let salida = '';
  let stringM = string.toUpperCase();
  for (let i = 0; i<stringM.length; i++){
     oldAscII = stringM[i].charCodeAt();
     if(oldAscII === 32){
       newAscII = 32;
     }
      else {
        newAscII = (oldAscII + 65 - offset) % 26 + 65;
      }
      salida = salida.concat(String.fromCharCode(newAscII))
      //salida=salida.concat(oldAscII[i]);
  }
   return salida;
}
};
