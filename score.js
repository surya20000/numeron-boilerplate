// Iteration 5: Store the player score and display it on the game over screen
let score = localStorage.getItem("score")
var scoreBoard = document.getElementById("score-board");
scoreBoard.innerHTML=score;
var replay = document.getElementById("play-again-button")
replay.onclick=() => {
    location.href= "./game.html"
};

