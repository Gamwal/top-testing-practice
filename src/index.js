function capitalize(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

function caesarCipher(string, num) {
  const stringArr = [];
  for (let index = 0; index < string.length; index++) {
    const char = string.charCodeAt(index);
    if (char >= 65 && char <= 90) {
      const newChar = ((char - 65 + num) % 26) + 65;
      stringArr.push(String.fromCharCode(newChar));
    } else if (char >= 97 && char <= 122) {
      const newChar = ((char - 97 + num) % 26) + 97;
      stringArr.push(String.fromCharCode(newChar));
    } else {
      stringArr.push(String.fromCharCode(char));
    }
  }
  return stringArr.join("");
}

module.exports = { capitalize, reverseString, calculator, caesarCipher };
