const message = document.getElementById('message');
const score = document.getElementById('score');
const results = document.getElementById('results')


//changes the 'results' section on the website after user has finished quiz
export function finalResults(userName, correctAnswers, wrongAnswers){
    if (wrongAnswers === 0) {
        results.classList.add('perfect');
        message.textContent = `Well done ${userName}!`;
        score.textContent = `${correctAnswers} correct & ${wrongAnswers} wrong!`
    } else if (wrongAnswers >= correctAnswers) {
        results.classList.add('fail');
        message.textContent = `Not great ${userName}, not great`;
        score.textContent = `${correctAnswers} correct & ${wrongAnswers} wrong.`;
    } else {
        results.classList.add('pass');
        message.textContent = `You did alright ${userName}, study hardered next time`;
        score.textContent = `${correctAnswers} correct & ${wrongAnswers} wrong.`;
    }    
}

