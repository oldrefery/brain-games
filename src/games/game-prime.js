import startGame from '../index.js';
import getRandomNumber from '../utils/generator.js';
import isPrime from '../utils/checkIsNumberPrime.js';

const generatePrimeStep = () => {
  const randomNumber = getRandomNumber(2, 1000);
  const questionText = randomNumber.toString();
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return { correctAnswer, questionText };
};

const gamePrime = () => {
  startGame(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    generatePrimeStep,
  );
};

export default gamePrime;
