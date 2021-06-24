import getRandomNumber from '../utils/generator.js';
import startGame from '../index.js';

const generateAnswerAndQuestionForEven = () => {
  const currentNumber = getRandomNumber(1, 30);
  return {
    correctAnswer: currentNumber % 2 === 0 ? 'yes' : 'no',
    questionText: currentNumber.toString(),
  };
};

const gameEven = () => {
  const ruleText = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(ruleText, generateAnswerAndQuestionForEven);
};

export default gameEven;
