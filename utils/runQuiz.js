import { userMeantYes } from './translateToYes.js';
import { scoreQuiz } from './scoreQuiz.js';



let correctAnswers = 0;
let wrongAnswers = 0;
let userCorrect = false;
let answer = '';

//array of questions, their answers
const quizQuestions = [
    ["Is the antagonist's name Gruntilda?", true],
    ["Is Banjo's sister named Tooty?", true],
    ['Is Banjo best friends with Clifford the dog?', false]
]

//runs through each of the questions and prompts the user for their anwser
export function runQuiz(userName){
    for (let i=0; i<quizQuestions.length; i++) {
        while (!userCorrect) {
            answer = userMeantYes(prompt(quizQuestions[i][0]));
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
    correctAnswers = 0;
    wrongAnswers = 0;
}

