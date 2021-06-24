const getRandomNumber = (min, max) => {
  const result = Math.random() * (max - min);
  return Math.trunc(result) + min + 1;
};

export default getRandomNumber;
