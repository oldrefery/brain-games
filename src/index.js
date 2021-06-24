import greetingAndGetUserName from './cli.js';
import getAnswer from './utils/get-answer.js';

const startGame = (generateQuestionAndAnswer) => {
  let leftGuesses = 3;
  let hasError = false;
  const name = greetingAndGetUserName();
  console.log('What is the result of the expression?');

  while (leftGuesses > 0 && !hasError) {
    const { correctAnswer, questionText } = generateQuestionAndAnswer();
    console.log(`Question: ${questionText}`);

    const answer = getAnswer('Your answer: ');
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

export default startGame;
