const calculations = require("./calculateScore");

let response = calculations(`history`,[0, 1, 2, 1,1])

function display (response) {

    this.response = response;
    
    let total = response.total;
    let average = response.average;

    console.log("Thanks for taking the test")
    console.log('you got a total of ' + total + ' questions')
    console.log('and your average is ' + average ) 

    if (average >= 70) {
        return ('Thumbs Up!!!! you are a genius')
    }else if (average >= 50 && average < 70) {
        return ('You did great you are smart')
    }else if (average >= 30 && average < 50) {
        return ('That was fair but you could have done better')
    }else {
        return ('That was horrible is your head empty??')
    }
}

console.log(display(response))