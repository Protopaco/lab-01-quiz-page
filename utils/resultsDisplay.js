const message = document.getElementById('message');
const score = document.getElementById('score');
const results = document.getElementById('results')
const percentage = document.getElementById('percentage');


//changes the 'results' section on the website after user has finished quiz
export function finalResults(userName, correctAnswers, wrongAnswers){
    let correctPercentage = Math.round(correctAnswers / (correctAnswers + wrongAnswers) * 100);
    if (wrongAnswers === 0) {
        results.classList.add('perfect');
        message.textContent = `Well done ${userName}!`;
        score.textContent = `${correctAnswers} correct & ${wrongAnswers} wrong! That is a ${correctPercentage}% success rate!`
        percentage.textContent = `That is a ${correctPercentage}% success rate!`;
    } else if (wrongAnswers >= correctAnswers) {
        results.classList.add('fail');
        message.textContent = `Not great ${userName}, not great`;
        score.textContent = `${correctAnswers} correct & ${wrongAnswers} wrong.`;
        percentage.textContent = `That is a ${correctPercentage}% success rate!`;

    } else {
        results.classList.add('pass');
        message.textContent = `You did alright ${userName}, \r\n study hardered next time`;
        score.textContent = `${correctAnswers} correct & ${wrongAnswers} wrong.`;
        percentage.textContent = `That is a ${correctPercentage}% success rate!`;

    }    
}

