
export function scoreQuiz(userName, correctAnswers, wrongAnswers){

    if (wrongAnswers === 0) { 
        alert(`Good Job ${userName}!\n You got a perfect score!`);
        finalScore(correctAnswers, wrongAnswers);

    } else if (wrongAnswers >= correctAnswers) {
        alert(`I'm afraid you didn't kill it ${userName}.`);
        alert(`You should really work on your reading comprehension`);
        finalScore(correctAnswers, wrongAnswers);
    } else {
        alert(`Alright ${userName}, respect. \nYou did alright.`)
        finalScore(correctAnswers, wrongAnswers);
    }
}

function finalScore(correctAnswers, wrongAnswers){
    alert(`You had ${correctAnswers} correct answers \nAND ${wrongAnswers} wrong answers!`)
}