import getRandomNumber from '../utils/generator.js';
import greetingAndGetUserName from '../cli.js';
import getAnswer from '../utils/get-answer.js';

const gameEven = () => {
  const name = greetingAndGetUserName();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let leftGuesses = 3;
  let hasError = false;

  while (leftGuesses > 0 && !hasError) {
    // const currentNumber = 3;
    const currentNumber = getRandomNumber(1, 30);
    console.log(`Question: ${currentNumber}`);
    const answer = getAnswer('Your answer: ');
    switch (answer) {
      case 'yes':
        if (currentNumber % 2 === 0) {
          leftGuesses -= 1;
          console.log('Correct!');
        } else {
          hasError = true;
          console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        }
        break;
      case 'no':
        if (currentNumber % 2 === 1) {
          leftGuesses -= 1;
          console.log('Correct!');
        } else {
          hasError = true;
          console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
        }
        break;
      default:
        hasError = true;
        console.log(
          `'${answer}' is wrong answer ;(. Correct answer was '${
            currentNumber % 2 === 0 ? 'yes' : 'no'
          }'.`,
        );
    }
  }

  if (!hasError) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default gameEven;
