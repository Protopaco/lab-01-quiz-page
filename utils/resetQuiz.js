const results = document.getElementById('results')
const message = document.getElementById('message');
const score = document.getElementById('score');


//resets results section of the page, doesnt' work very well because it seems that 
//'alert' had precident over any other functionality
export function resetQuiz() {
 results.classList.remove('perfect');
 results.classList.remove('pass');
 results.classList.remove('fail');
 message.textContent = '';
 score.textContent = '';
}