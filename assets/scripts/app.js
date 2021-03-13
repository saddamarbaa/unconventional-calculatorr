const defaultResult = 0;
let currentResult = defaultResult;

const getUserNumberInput = () => parseInt(userInput.value);

const createAndWriteOutput = (operator, resultBeforeCalc, calcNumber) => {
  const calcDescription = `${resultBeforeCalc}  ${operator}  ${calcNumber}`;
  outputResult(currentResult, calcDescription);
};

const add = () => {
  const entredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + entredNumber;
  createAndWriteOutput("+", initialResult, entredNumber);
};

const subtract = () => {
  const entredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - entredNumber;
  createAndWriteOutput("-", initialResult, entredNumber);
};

const multiply = () => {
  const entredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * entredNumber;
  createAndWriteOutput("*", initialResult, entredNumber);
};

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);

multiplyBtn.addEventListener("click", multiply);
