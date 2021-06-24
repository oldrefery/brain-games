import readlineSync from 'readline-sync';

const getAnswer = (question) => readlineSync.question(question);

export default getAnswer;
