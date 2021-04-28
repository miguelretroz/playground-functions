// Desafio 1
function compareTrue(boolA, boolB) {
  // seu código aqui
  let booleanResult = false;
  if (boolA && boolB) {
    booleanResult = true;
  }
  return booleanResult;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let wordsOfString = string.split(' ');
  return wordsOfString;
}

// Desafio 4
function concatName(nameArray) {
  // seu código aqui
  return `${nameArray[((nameArray.length) - 1)]}, ${nameArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
