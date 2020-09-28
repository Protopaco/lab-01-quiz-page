import { runQuiz } from './runQuiz.js';
import { userMeantYes } from './translateToYes.js';

let userName = '';
let gaveFalseName = false;
let excited= '';


//prompts user for name, and has them confirm they want to take the quiz
//if they fail to give a name the interface gets a little more hostile
//if they don't want to take the quiz they are forwarded to a different site.
export function quizSetup() {
    while (userName === '' || userName === null){
        userName = prompt('What is your name?');
        if (userName === '' || userName === null) {
            alert('Nice try buddy!  \nGive me a name!')
            gaveFalseName = true;
        }
    }

    if (gaveFalseName === true) {
        alert('Thats better.');
    }
    alert(`Hello ${userName}!`);

    
    if (gaveFalseName === true) {
    alert('If that is your real name');
    }

    while (excited === '' || excited === null) {
        excited = prompt('Are you excited to take the quiz?');
        if (userMeantYes(excited)){
            alert('Excited to take a quiz?  \nOk, weirdo.')
        }
        else if (excited != '') {
            const quit = confirm("Life is too short to do things you hate. \nClick 'OK' to continue with the quiz \nClick cancel to exit");
            if (!quit){
                alert('BYE!');
                return window.location.replace("https://www.alchemycodelab.com/");
            }
        } else {
            alert(`Hello? ${userName}? \nSilence isn't going to help you now \nI'm going to need an answer`);
        }
    }   
    runQuiz(userName);
    userName = '';
}