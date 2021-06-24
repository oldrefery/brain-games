import startGame from '../index.js';
import getRandomNumber from '../utils/generator.js';

const generateProgression = (count) => {
  const firstNumber = getRandomNumber(0, 20);
  const stepProgression = getRandomNumber(1, 10);
  const result = [firstNumber];
  let currentElement = firstNumber;
  for (let i = 2; i <= count; i += 1) {
    currentElement += stepProgression;
    result.push(currentElement);
  }
  return result;
};

const generateProgressionStep = () => {
  const countQueue = getRandomNumber(5, 10);
  const progression = generateProgression(countQueue);
  const indexMissingNumber = getRandomNumber(0, countQueue - 1);
  const correctAnswer = progression[indexMissingNumber].toString();
  const questionText = progression
    .map((e, index) => (index !== indexMissingNumber ? e.toString() : '..'))
    .join(' ');
  return {
    correctAnswer,
    questionText,
  };
};

const gameProgression = () => {
  startGame(
    'What number is missing in the progression?',
    generateProgressionStep,
  );
};

export default gameProgression;
