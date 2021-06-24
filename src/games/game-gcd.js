import startGame from '../index.js';
import getRandomNumber from '../utils/generator.js';

const getGCD = (number1, number2) => {
  const minNumber = Math.min(number1, number2);
  if (minNumber === 1) return 1;
  let gcd = 1;
  for (let i = 1; i <= minNumber; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      gcd = i;
    }
  }
  return gcd.toString();
};

const generateNumbersAndGreatestCommonDivisor = () => {
  const maxNumber = 100;
  const num1 = getRandomNumber(1, maxNumber);
  const num2 = getRandomNumber(1, maxNumber);
  const correctAnswer = getGCD(num1, num2);
  return {
    correctAnswer,
    questionText: `${num1} ${num2}`,
  };
};

const gameGCD = () => {
  startGame(
    'Find the greatest common divisor of given numbers.',
    generateNumbersAndGreatestCommonDivisor,
  );
};

export default gameGCD;
