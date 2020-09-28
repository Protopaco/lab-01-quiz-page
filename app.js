// import functions and grab DOM elements
import { quizSetup } from './quizSetup.js';

const button = document.getElementById('launch-button');

// set event listeners to update state and DOM
button.addEventListener('click', quizSetup)

