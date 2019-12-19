generateText = (name, age) => {
  // Returns output text
  return `${name} (${age} years old)`;
};

exports.createElement = (type, text, className) => {
  // Creates a new HTML element and returns it
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  newElement.textContent = text;
  return newElement;
};

validateInput = (text, notEmpty, isNumber) => {
  // Validate user input with two pre-defined rules
  if (!text) {
    return false;
  }
  if (notEmpty && text.trim().length === 0) {
    return false;
  }
  if (isNumber && +text === NaN) {
    return false;
  }
  return true;
};

const checkAndGenerate = (name, age) => {
  if (
    !validateInput(name, true, false) ||
    !validateInput(age, false, true)
  ) {
    return "your output is invalid. Name " + name + " age is " + age;
  }

  return generateText(name,age);
}

exports.checkAndGenerate = checkAndGenerate;
exports.generateText = generateText;
