const username = document.getElementById('Username');
const saveScore = document.getElementById('saveScore');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;
username.addEventListener ('keyup', () => {
    console.log(username.value);
    saveScore.disabled = !username.value;
});

saveHighScore = e => {
    console.log("clicked save");
    e.preventDefault();
};