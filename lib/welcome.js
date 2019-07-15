const { prompt } = require('inquirer');
const questions = require('./questions.js');
const askQuestion = require('./askQuestions');
const question = {
  type: 'list',
  name: 'subject',
  message: 'Select subject',
  choices: Object.keys(questions)
};

function welcome() {
  console.log('Welcome to Console Cbt');
  prompt(question)
    .then(answer => {
      askQuestion(answer.subject);
    })
    .catch(e => {
      console.log(e);
    });
}

module.exports = welcome;
