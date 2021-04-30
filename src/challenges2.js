// Desafio 10
function techList(tech, name) {
  // seu código aqui
  if (tech.length > 0) {
    tech.sort();
    for (let index = 0; index < tech.length; index += 1) {
      tech[index] = {
        tech: tech[index],
        name,
      };
    }
  } else {
    tech = 'Vazio!';
  }
  return tech;
}

function isEleven(phoneNumber) {
  let condition = false;
  if (phoneNumber.length === 11) {
    condition = true;
  }
  return condition;
}

function isPositive(phoneNumber) {
  let result = true;
  for (let number of phoneNumber) {
    if (number < 0) {
      result = false;
      break;
    }
  }
  return result;
}

function isNotTen(phoneNumber) {
  let result = true;
  for (let number of phoneNumber) {
    if (number >= 10) {
      result = false;
      break;
    }
  }
  return result;
}

function numberCount(number, phoneNumber) {
  let count = 0;
  for (let numberComp of phoneNumber) {
    if (number === numberComp) {
      count += 1;
    }
  }
  return count;
}

function numbersLoopCount(phoneNumber) {
  for (let number of phoneNumber) {
    // for (let number02 of phoneNumber) {
    //   if (number === number02) {
    //     count += 1;
    //   }
    // }
    if (numberCount(number, phoneNumber) < 2) {
      return false;
    }
  }
  return true;
}

function phoneNumberConstruction(phoneNumber) {
  let result = '(';
  for (let index = 0; index < phoneNumber.length; index += 1) {
    if (index === 1) {
      result += `${phoneNumber[index]}) `;
    } else if (index === 6) {
      result += `${phoneNumber[index]}-`;
    } else {
      result += phoneNumber[index];
    }
  }
  return result;
}

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  // seu código aqui
  let result = 'Array com tamanho incorreto.';
  if (isEleven(phoneNumber)) {
    if (isPositive(phoneNumber) && isNotTen(phoneNumber) && numbersLoopCount(phoneNumber)) {
      result = phoneNumberConstruction(phoneNumber);
    } else {
      result = 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return result;
}

function triangleLineLower(lineA, lineB, lineC) {
  let sumBC = lineB + lineC;
  let sumAC = lineA + lineC;
  let sumAB = lineA + lineB;
  if ((lineA < sumBC) && (lineB < sumAC) && (lineC < sumAB)) {
    return true;
  }
  return false;
}

function triangleLineHigher(lineA, lineB, lineC) {
  let difBC = Math.abs(lineB - lineC);
  let difAC = Math.abs(lineA - lineC);
  let difAB = Math.abs(lineA - lineB);
  if ((lineA > difBC) && (lineB > difAC) && (lineC > difAB)) {
    return true;
  }
  return false;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (triangleLineLower(lineA, lineB, lineC) && triangleLineHigher(lineA, lineB, lineC)) {
    return true;
  }
  return false;
}

function sumDrinksCount(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += parseInt(number, 10);
  }
  return sum;
}

// Desafio 13
function hydrate(drinks) {
  // seu código aqui
  let numbers = drinks.match(/\d+/g);

  if (sumDrinksCount(numbers) === 1) {
    return `${sumDrinksCount(numbers)} copo de água`;
  }
  return `${sumDrinksCount(numbers)} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
