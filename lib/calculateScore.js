const store = require('./questions');
const displayScore = require('./DisplayAnswers');

/**
 *
 * @param {String} subject The subject the user took the test
 * @param {Array} answers The answers from the user test
 * @returns {Object}
 */
function calculateScore(subject, answers) {
  const questions = store[subject];
  let totalScore = 0;
  questions.forEach((question, i, questions) => {
    const correctAnswer = questions[i].answer;
    if (correctAnswer === answers[i]) totalScore++;
  });

  let averageScore = (totalScore / questions.length) * 100;
  averageScore = averageScore.toFixed(1);

  return {
    total: totalScore,
    average: averageScore
  };
}

module.exports = calculateScore;
