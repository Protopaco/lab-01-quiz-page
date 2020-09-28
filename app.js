// import functions and grab DOM elements
import { quizSetup } from './utils/quizSetup.js';
import { resetQuiz } from './utils/resetQuiz.js';

const button = document.getElementById('launch-button');


//listens for button press
button.addEventListener('click', () => {
    resetQuiz();
    quizSetup();
})

