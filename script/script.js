/* eslint-disable semi */

const keyInput = document.querySelector('input.keyInput');
const encryptButton = document.querySelector('input.encrypt');
const decryptButton = document.querySelector('input.decrypt');

encryptButton.addEventListener('click', () => manageText('encrypt'));
decryptButton.addEventListener('click', () => manageText('decrypt'));

function manageText (typeOfAction) {
  if (validateKeyValue(keyInput.value)) {
    keyInput.style.borderColor = '#C0C0C0';

    if (typeOfAction === 'encrypt') {

    };
    if (typeOfAction === 'decrypt') {

    };
  } else {
    keyInput.style.borderColor = 'red';
    animateKeyInput();
  }
}

function validateKeyValue (keyValue) {
  if (!keyValue) { return false };
  if (isNaN(keyValue)) { return false };
  if (!Number.isInteger(+keyValue)) { return false };

  return true;
}

function animateKeyInput () {
  let counter = 0;

  const animation = setInterval(() => {
    if (counter % 2 !== 0) {
      keyInput.style.left = '0';
    } else if (counter === 0) {
      keyInput.style.left = '-10px';
    } else {
      keyInput.style.left = '10px';
    };

    if (counter === 3) {
      counter = 0;
      clearInterval(animation)
    }
    counter++
  }, 50);
}
