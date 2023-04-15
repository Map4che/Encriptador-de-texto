var texto;
var nueva;
input = document.querySelector("input");

function verificar() {
  let nueva = "";
  input.value = input.value.toLowerCase();
  input.value = input.value.trim();
  console.log(input.value);
  for (let i = 0; i < input.value.length; i++) {
    switch (input.value[i]) {
      case "e":
        nueva += "enter";
        break;
      case "i":
        nueva += "imes";
        break;
      case "a":
        nueva += "ai";
        break;
      case "o":
        nueva += "ober";
        break;
      case "u":
        nueva += "ufat";
        break;
      default:
        nueva += input.value[i];
        break;
    }

    var result = document.querySelector("#pTextoEncriptado");
    result.innerText = nueva.charAt(0).toUpperCase() + nueva.slice(1);
  }
  input.value = "";
  console.log(input.value);
  console.log(nueva);
}

function traducir() {
  let nueva = "";
  input.value = input.value.toLowerCase();
  input.value = input.value.trim();
  console.log(input.value);
  for (let i = 0; i < input.value.length; i++) {
    switch (input.value[i]) {
      case "e":
        nueva += "e";
        i += 4;
        break;
      case "i":
        nueva += "i";
        i += 3;
        break;
      case "a":
        nueva += "a";
        i += 1;
        break;
      case "o":
        nueva += "o";
        i += 3;
        break;
      case "u":
        nueva += "u";
        i += 3;
        break;
      default:
        nueva += input.value[i];
        break;
    }

    var result = document.querySelector("#pTextoEncriptado");
    result.innerText = nueva.charAt(0).toUpperCase() + nueva.slice(1);
  }
  input.value = "";
  console.log(input.value);
  console.log(nueva);
}

function copiarTexto() {
  let textoACopiar = document.querySelector("#pTextoEncriptado").innerText;

  navigator.clipboard.writeText(textoACopiar).then(
    function () {
      console.log("Texto copiado al portapapeles");
    },
    function () {
      console.error("No se pudo copiar el texto al portapapeles");
    }
  );
}

let buttonEncriptar = document.querySelector("#encriptar");
buttonEncriptar.onclick = verificar;

let buttonDesencriptar = document.querySelector("#desencriptar");
buttonDesencriptar.onclick = traducir;

let buttonCopiar = document.querySelector("#copiar");
buttonCopiar.onclick = copiarTexto;