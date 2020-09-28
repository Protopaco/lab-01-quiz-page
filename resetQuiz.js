const results = document.getElementById('results')

export function resetQuiz() {
 results.classList.remove('perfect');
 results.classList.remove('pass');
 results.classList.remove('fail');

}