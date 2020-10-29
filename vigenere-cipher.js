/*
 Constants
*/

let ALPHABET = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

/*
 Global variables
*/

let message = "";
let key = "";
let isEncrypt;

/*
 Functions to update global variables, called by onChange events
*/

function clearOutput() {
  document.getElementById("output").innerHTML = "";
  document.getElementById("output").setAttribute("class", "hidden");
  document.getElementById("encrypt").checked = false;
  document.getElementById("decrypt").checked = false;
}

function updateMessage(value) {
  message = value.toUpperCase();
  document.getElementById("message").value = message;
  console.log(message);
  clearOutput();
}

function updateKey(value) {
  key = "";
  for (let i = 0; i < value.length; i++) {
    let char = value[i].toUpperCase();
    if (ALPHABET.indexOf(char) >= 0) {
      key += char;
    }
  }
  document.getElementById("key").value = key;
  clearOutput();
  console.log(key);
}

function setEncrypt() {
  isEncrypt = true;
  console.log("Encrypt");
  go();
}

function setDecrypt() {
  isEncrypt = false;
  console.log("Decrypt");
  go();
}

/*
 Function to encrypt or decrypt the message
*/

function go() {
  let description = isEncrypt ? "Encrypted" : "Decrypted";
  let output = "<p>" + description + " message:</p><br/><p>";

  console.log(message);
  console.log(key);

  let keyIndex = 0;
  let shiftDirection = isEncrypt ? 1 : -1;
  
  for (let i = 0; i < message.length; i++) {
    let index = ALPHABET.indexOf(message[i]);
    if (index < 0) {
      output += message[i];
    } else {
      // shift index
      index += ALPHABET.indexOf(key[keyIndex]) * shiftDirection;
      // convert to mod 26
      if (index < 0 || index > 25) {
        index -= 26 * shiftDirection;
      }
      output += ALPHABET[index];
      keyIndex = (keyIndex == key.length - 1) ? 0 : keyIndex + 1;
    }
  }
  console.log(output);
  
  document.getElementById("output").innerHTML = output + "</p>";
  document.getElementById("output").setAttribute("class", "output");
}
