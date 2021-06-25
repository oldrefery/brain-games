import getAnswer from './utils/get-answer.js';

const greetingAndGetUserName = () => {
  console.log('Welcome to the Brain Games!');
  const name = getAnswer('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default greetingAndGetUserName;
