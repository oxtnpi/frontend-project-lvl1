import readlineSync from 'readline-sync';

const welcome = () => console.log('Welcome to the Brain Games!');
const name = () => readlineSync.question('May I have your name? ');
const isName = name();
const askName = () => console.log(`Hello, ${isName}!`);

export {
  welcome, isName, name, askName,
};
