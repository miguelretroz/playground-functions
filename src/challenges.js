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
function highestCount(numbers) {
  // seu código aqui
  let highest = -Infinity;
  let count = 0;
  for (let number of numbers) {
    if (number > highest) {
      highest = number;
      count = 1;
    } else if (number === highest) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);
  let result;
  if (cat1Distance < cat2Distance) {
    result = 'cat1';
  } else if (cat2Distance < cat1Distance) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function numberChecker(number, array) {
  if ((number % 3 === 0) && ((number % 5) === 0)) {
    array.push('fizzBuzz');
  } else if ((number % 3) === 0) {
    array.push('fizz');
  } else if ((number % 5) === 0) {
    array.push('buzz');
  } else {
    array.push('bug!');
  }
}

function fizzBuzz(numbers) {
  // seu código aqui
  let numbersMessages = [];
  for (let number of numbers) {
    numberChecker(number, numbersMessages);
  }
  return numbersMessages;
}

// Desafio 9
let encodeKeys = {
  a: '1',
  e: '2',
  i: '3',
  o: '4',
  u: '5',
};

function encodeChecker(letter, keys) {
  for (let key in keys) {
    if (key === letter) {
      return keys[key];
    }
  }
  return letter;
}

function encode(string) {
  // seu código aqui
  let wordEncoded = '';
  for (let letter of string) {
    wordEncoded += encodeChecker(letter, encodeKeys);
  }
  return wordEncoded;
}

function decodeChecker(letter, keys) {
  for (let key in keys) {
    if (keys[key] === letter) {
      return key;
    }
  }
  return letter;
}

function decode(string) {
  // seu código aqui
  let wordDecoded = '';
  for (let letter of string) {
    wordDecoded += decodeChecker(letter, encodeKeys);
  }
  return wordDecoded;
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
