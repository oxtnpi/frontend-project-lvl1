import readlineSync from 'readline-sync';

const welcome = () => console.log('Welcome to the Brain Games!');
const name = () => readlineSync.question('May I have your name? ');
let isName;
const assignName = () => {
  isName = name();
};

const getName = () => isName;
const askName = () => console.log(`Hello, ${isName}!`);

export {
  welcome, name, askName, assignName, getName,
};
