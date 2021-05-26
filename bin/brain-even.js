import readlineSync from 'readline-sync';
import { isName } from '../src/cli.js';

let number = 0;
const startGame = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');
const question = () => console.log(`Question: ${number}`);
const answer = () => readlineSync.question('Your answer: ');
let isAnswer = '';
const isEvenNumber = (num) => {
  let value = '';
  if (num % 2 === 0) {
    value = 'yes';
  }
  if (num % 2 !== 0) {
    value = 'no';
  }
  return value;
};
const correctAnswer = () => isEvenNumber(number);
const isCorrect = () => console.log('Correct!');
const isWrong = () => console.log(`'${isAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer()}'`);
const isTryAgain = () => console.log(`Let's try again, ${isName}!`);
const finish = () => console.log(`Congratulations, ${isName}!`);

const brainEven = () => {
  startGame();
  let score = 0;
  let value;
  while (score <= 2) {
    number = Math.floor(Math.random() * 100);
    question();
    isAnswer = answer().toLowerCase();
    if (correctAnswer() === isAnswer) {
      isCorrect();
      score += 1;
    } else {
      isWrong();
      value = isTryAgain();
      break;
    }
    if (score === 3) {
      value = finish();
    }
  }
  return value;
};

export default brainEven;
