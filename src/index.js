
//background-image: url("https://blog.powerdata.es/hubfs/iStock-524882074.jpg");
//"https://cdn.wallpapersafari.com/18/60/R3JIC9.jpg"
let cifrar =() => {
  const string = document.getElementById("text1").value;
  const offset = parseInt(document.getElementById("offset").value);
  document.getElementById('enco').innerHTML = window.cipher.encode(offset,string);
  document.getElementById('enco1').innerHTML =window.cipher.encode(offset,string);

};

let descifrar =() => {
  const string = document.getElementById("text1").value;
  const offset = parseInt(document.getElementById("offset").value);
  document.getElementById('enco').innerHTML =window.cipher.decode(offset,string);
  document.getElementById('enco1').innerHTML =window.cipher.decode(offset,string);
};

//let demoVisibility =() => {
//  document.getElementById("enco").style.visibility = "hidden";
//};


let clear =() => {
document.getElementById("myForm").reset();
document.getElementById("myForm1").reset();
document.getElementById("enco").innerHTML= "";
//demoVisibility();
};

//let limpiar = () => {
//  clear();
//  demoVisibility();
//}

document.getElementById("encode").addEventListener('click', cifrar);
document.getElementById("decode").addEventListener('click', descifrar);
document.getElementById("clear").addEventListener('click', clear);
