import { userMeantYes } from './translateToYes.js';
import { scoreQuiz } from './scoreQuiz.js';


let correctAnswers = 0;
let wrongAnswers = 0;
let userCorrect = false;
let answer = '';

const quizQuestions = [
    ["Is the antagonist's name Gruntilda?", true],
    ["Is Banjo's sister named Tooty?", true],
    ['Is Banjo best friends with Clifford the dog?', false]
]


// initialize state

export function runQuiz(userName){
    for (let i=0; i<quizQuestions.length; i++) {
        while (!userCorrect) {
            answer = userMeantYes(prompt(quizQuestions[i][0]));
            console.log(answer);
            if (answer === quizQuestions[i][1]) {
                correctAnswers++;
                alert(`CORRECT! \n${userName}, you have ${correctAnswers} correct answers!`)
                userCorrect = true;
            } else {
                wrongAnswers++;
                alert(`WRONG! \n${userName}, you have ${wrongAnswers} wrong answers!`)
                alert("Why don't you try again?");
            }
        }
        userCorrect = false;
    }
    scoreQuiz(userName, correctAnswers, wrongAnswers);
}

