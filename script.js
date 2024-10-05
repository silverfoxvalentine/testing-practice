export const capitalize = function (word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1);
};

export const reverseString = function (text) {
  let reversed = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text.slice(i, i + 1);
  }
  return reversed;
};

export const calculator = {
  add(a, b) {
    return a + b;
  },
  substract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return Number((a / b).toFixed(2));
  },
};

export const caesarCipher = function (string, shift) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let ciphered = "";
  if (shift > 26) shift = shift % 26;
  for (let i = 0; i < string.length; i++) {
    let char = string.slice(i, i + 1);
    if (/[a-zA-Z]/.test(char)) {
      let isUpperCase = char.toUpperCase() === char;
      let cipheredIndex = alphabet.indexOf(char.toLowerCase()) + shift;
      if (cipheredIndex >= 26) {
        if (isUpperCase) {
          ciphered += alphabet
            .slice(cipheredIndex - 26, cipheredIndex - 25)
            .toUpperCase();
        } else
          ciphered += alphabet.slice(cipheredIndex - 26, cipheredIndex - 25);
      } else {
        if (isUpperCase) {
          ciphered += alphabet
            .slice(cipheredIndex, cipheredIndex + 1)
            .toUpperCase();
        } else ciphered += alphabet.slice(cipheredIndex, cipheredIndex + 1);
      }
    } else ciphered += char;
  }
  return ciphered;
};

export const analyzeArray = function (array) {
  let object;
  return (object = {
    average:
      array.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      ) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  });
};
