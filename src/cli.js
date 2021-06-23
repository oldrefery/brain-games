import readlineSync from "readline-sync";

export const readName = () => {
  return readlineSync.question("May I have your name? ");
};
