import startGame from '../index.js';
import getRandomNumber from '../utils/generator.js';

const getCorrectAnswer = (num1, currentSign, num2) => {
  let result;
  switch (currentSign) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = -1;
  }

  return result.toString();
};

const generateCalculatorStep = () => {
  const num1 = getRandomNumber(1, 30);
  const num2 = getRandomNumber(1, 30);
  const signs = ['+', '-', '*'];
  const currentSign = signs[getRandomNumber(0, 2)];

  const questionText = `${num1} ${currentSign} ${num2}`;
  const correctAnswer = getCorrectAnswer(num1, currentSign, num2);

  return {
    correctAnswer,
    questionText,
  };
};

const gameCalculator = () => {
  const ruleText = 'What is the result of the expression?';
  startGame(ruleText, generateCalculatorStep);
};
export default gameCalculator;
