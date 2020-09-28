// import functions and grab DOM elements
import { quizSetup } from './quizSetup.js';
import { resetQuiz } from './resetQuiz.js';

const button = document.getElementById('launch-button');


// set event listeners to update state and DOM
button.addEventListener('click', () => {
    resetQuiz();
    quizSetup();
})

