let cifrar =() => {
  const string = document.getElementById("text1").value;
  const offset = parseInt(document.getElementById("offset").value);
  document.getElementById('enco').innerHTML = window.cipher.encode(offset,string);

};

let descifrar =() => {
  const string = document.getElementById("text1").value;
  const offset = parseInt(document.getElementById("offset").value);
  document.getElementById('enco').innerHTML =window.cipher.decode(offset,string);

};


document.getElementById("encode").addEventListener('click', cifrar);
document.getElementById("decode").addEventListener('click', descifrar);
