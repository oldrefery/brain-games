const maxNumber = 1000;

const getRandomNumber = () => {
  const result = Math.random() * maxNumber;
  return Math.trunc(result) + 1;
};

export default getRandomNumber;
