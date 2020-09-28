import { finalResults } from './resultsDisplay.js';


//scores the quiz, and returns results to user.
export function scoreQuiz(userName, correctAnswers, wrongAnswers){

    if (wrongAnswers === 0) { 
        alert(`Good Job ${userName}!\n You got a perfect score!`);

    } else if (wrongAnswers >= correctAnswers) {
        alert(`I'm afraid you didn't kill it ${userName}.`);
        alert(`You should really work on your reading comprehension`);
    } else {
        alert(`You did alright ${userName}, respect`)
    }
    finalResults(userName, correctAnswers, wrongAnswers);
}

function finalScore(correctAnswers, wrongAnswers){
    alert(`You had ${correctAnswers} correct answers \nAND ${wrongAnswers} wrong answers!`)
}