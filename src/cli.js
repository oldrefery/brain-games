import getAnswer from './utils/get-answer.js';

const greetingAndGetUserName = () => {
  console.log('Welcome to the Brain Games!');
  const name = getAnswer('May I have your name? ');
  console.log(`Hi, ${name}!`);
  return name;
};

export default greetingAndGetUserName;
