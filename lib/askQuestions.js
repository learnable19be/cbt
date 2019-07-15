const inquirer = require('inquirer');
const questions = require('./questions.js');
const displayScores = require('./DisplayAnswers');

function askQuestions(subject) {
  let queries = [];
  let replies = [];

  for (let i = 0; i < questions[subject].length; i++) {
    let query = questions[subject][i];
    queries.push({
      type: 'list',
      name: `${i}`,
      message: query.question,
      choices: query.options
    });
  }

  inquirer.prompt(queries).then(answers => {
    // Test Code
    // for (let i = 0; i < questions[subject].length; i++) {
    //     console.log("answer to number", i + 1 + ":", answers[i],
    //     "| index of answer:", queries[i].choices.indexOf(answers[i]));
    // }
    // console.log(answers);
    for (let i = 0; i < questions[subject].length; i++) {
      replies.push(queries[i].choices.indexOf(answers[i]));
    }
    displayScores(subject, replies);
  });
}

module.exports = askQuestions;
