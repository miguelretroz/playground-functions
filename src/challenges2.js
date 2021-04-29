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

function numbersCount(phoneNumber) {
  let result = true;
  for (let number of phoneNumber) {
    let count = 0;
    for (let number02 of phoneNumber) {
      if (number === number02) {
        count += 1;
      }
    }
    if (count >= 4) {
      result = false;
      break;
    }
  }
  return result;
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
    if (isPositive(phoneNumber) && isNotTen(phoneNumber) && numbersCount(phoneNumber)) {
      result = phoneNumberConstruction(phoneNumber);
    } else {
      result = 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return result;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
