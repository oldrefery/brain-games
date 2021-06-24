import greetingAndGetUserName from '../cli.js';
import getRandomNumber from '../utils/generator.js';
import getAnswer from '../utils/get-answer.js';

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

const gameCalculator = () => {
  const name = greetingAndGetUserName();
  console.log('What is the result of the expression?');

  let leftGuesses = 3;
  let hasError = false;
  const signs = ['+', '-', '*'];

  while (leftGuesses > 0 && !hasError) {
    const num1 = getRandomNumber(1, 30);
    const num2 = getRandomNumber(1, 30);
    const currentSign = signs[getRandomNumber(0, 2)];

    console.log(`Question: ${num1} ${currentSign} ${num2}`);
    const answer = getAnswer('Your answer: ');
    const correctAnswer = getCorrectAnswer(num1, currentSign, num2);
    if (answer === correctAnswer) {
      leftGuesses -= 1;
      console.log('Correct!');
    } else {
      hasError = true;
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`,
      );
    }
  }
  if (!hasError) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default gameCalculator;
