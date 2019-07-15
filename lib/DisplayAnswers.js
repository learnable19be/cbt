const calculations = require('./calculateScore');

function display(subject, answers) {
  let response = calculations(subject, answers);

  let total = response.total;
  let average = response.average;

  console.log('Thanks for taking the test');
  console.log('You got a total of ' + total + ' questions');
  console.log('And your average is ' + average);

  if (average >= 70) {
    console.log('\nThumbs Up!!!! you are a genius');
  } else if (average >= 50 && average < 70) {
    console.log('\nYou did great you are smart');
  } else if (average >= 30 && average < 50) {
    console.log('\nThat was fair but you could have done better');
  } else {
    console.log('\nThat was horrible is your head empty??');
  }
}

module.exports = display;
