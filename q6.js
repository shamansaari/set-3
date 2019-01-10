//Question(3.6)
//Your task is to develop the High Score feature in the game Colorless - A Memory Game. It should print:
//.Congratulations!! Your new high score is <user's high score> if the user's score is greater than the current high score.
//.Try Again. You just need <the number of more points needed to beat the high score> to win!. 
//if the user's score is less than the current high score.
let highScore = 75;
let userScore = 67;
if (userScore > highScore) {
    console.log("Congratulations!! Your new high score is " + userScore);
} else {
    console.log("Try Again. You just need " + (highScore - userScore + 1) + " points to win!");
}
//Answer(Try Again. You just need 9 points to win!)