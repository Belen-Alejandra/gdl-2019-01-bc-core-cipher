let cifrar =() => {
  const string = document.getElementById("text1").value;
  const offset = parseInt(document.getElementById("offset").value);
  document.getElementById('enco').innerHTML = encode(offset,string);

};

let descifrar =() => {
  const string = document.getElementById("text1").value;
  const offset = parseInt(document.getElementById("offset").value);
  document.getElementById('enco').innerHTML = decode(offset,string);

};
