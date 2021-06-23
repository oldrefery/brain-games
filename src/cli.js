import readlineSync from 'readline-sync';

const userName = () => {
  const name = readlineSync.question('May I have your name? ');
  return console.log(`Hi, ${name}!`);
};
export default userName;
