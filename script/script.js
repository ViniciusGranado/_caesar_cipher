/* eslint-disable semi */

const textField = document.querySelector('.textarea')
const keyInput = document.querySelector('.key-input');
const encryptButton = document.querySelector('.encrypt-btn');
const decryptButton = document.querySelector('.decrypt-btn');

encryptButton.addEventListener('click', () => manageText('encrypt'));
decryptButton.addEventListener('click', () => manageText('decrypt'));

function manageText (typeOfAction) {
  const userText = textField.value.trim();

  if (userText === '') {
    textField.style.borderColor = 'red';
    animateError(textField);
  } else {
    textField.style.borderColor = '#C0C0C0';

    if (validateKeyValue(keyInput.value)) {
      keyInput.style.borderColor = '#C0C0C0';

      const textData = {
        originalSentence: userText,
        key: keyInput.value,
        option: typeOfAction
      };

      const finalSentence = encryptDecryptText(textData);

      textField.value = finalSentence;
    } else {
      keyInput.style.borderColor = 'red';
      animateError(keyInput);
    };
  };
}

function validateKeyValue (keyValue) {
  if (!keyValue) { return false };
  if (isNaN(keyValue)) { return false };
  if (!Number.isInteger(+keyValue)) { return false };

  return true;
}

function animateError (htmlObject) {
  let counter = 0;

  const animation = setInterval(() => {
    if (counter % 2 !== 0) {
      htmlObject.style.left = '0';
    } else if (counter === 0) {
      htmlObject.style.left = '-10px';
    } else {
      htmlObject.style.left = '10px';
    };

    if (counter === 3) {
      clearInterval(animation)
    };

    counter++
  }, 50);
}

function encryptDecryptText (textData) {
  let newSentence = '';
  let key = textData.key % 26;

  if (textData.option === 'decrypt') {
    key = -(key)
  };

  for (const ch of textData.originalSentence) {
    const chAsciiCode = ch.charCodeAt(0);

    if ((chAsciiCode >= 65 && chAsciiCode <= 90) || (chAsciiCode >= 97 && chAsciiCode <= 122)) {

      const newChar = getNewChar(chAsciiCode + key, ch);

      newSentence += String.fromCharCode(newChar);
    } else {
      newSentence += ch;
    };
  };

  return newSentence;
}

function getNewChar (asciiValue, oldChar) {
  if (oldChar === oldChar.toUpperCase()) {
    if (asciiValue < 65) { return asciiValue + 26 }
    else if (asciiValue > 90) { return asciiValue - 26 }
    else { return asciiValue }
  } else {
    if (asciiValue < 97) { return asciiValue + 26 }
    else if (asciiValue > 122) { return asciiValue - 26 }
    else { return asciiValue }
  };
}
