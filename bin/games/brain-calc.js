#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getName } from '../../src/cli.js';

let firstNum = 0;
let secondNum = 0;
const startGame = () => console.log('What is the result of the expression?');
const getRandomInt = (max) => Math.floor(Math.random() * max);

const getRandomSign = () => {
  let sign = '';
  const randomNum = getRandomInt(3);
  switch (randomNum) {
    case 0:
      sign = '+';
      break;
    case 1:
      sign = '-';
      break;

    case 2:
      sign = '*';
      break;

    default:
      sign = undefined;
      break;
  }

  return sign;
};

let randomSign = '';
const question = () => console.log(`Question: ${firstNum} ${randomSign} ${secondNum}`);
const answer = () => readlineSync.question('Your answer: ');
let isAnswer = '';
const getCorrestAnswer = (num1, num2, sign) => {
  let value = '';
  switch (sign) {
    case '+':
      value = num1 + num2;
      break;
    case '-':
      value = num1 - num2;
      break;

    case '*':
      value = num1 * num2;
      break;

    default:
      value = undefined;
      break;
  }
  return value;
};
const correctAnswer = () => String(getCorrestAnswer(firstNum, secondNum, randomSign));
const isCorrect = () => console.log('Correct!');
const isWrong = () => console.log(`'${isAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer()}'`);
const isTryAgain = () => console.log(`Let's try again, ${getName()}!`);
const finish = () => console.log(`Congratulations, ${getName()}!`);

const brainCalc = () => {
  startGame();
  let score = 0;
  let value;
  while (score <= 2) {
    firstNum = getRandomInt(100);
    secondNum = getRandomInt(100);
    randomSign = getRandomSign();
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

export default brainCalc;
