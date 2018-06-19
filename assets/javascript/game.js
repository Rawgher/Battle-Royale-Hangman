// reference DOM get elementsbyID for any placeholders, guessedletters, guessesleft, wins and losses

var wins = document.getElementById("#wins").textContent("win: " + wins);
var losses = document.getElementById("#losses").textContent("losses: " + losses);
// create words to use and randomize them // 

var scifiWords = ["blaster", "spaceship", "asteroid", "cruiser", "laser", "starship", "space", "lightspeed"];
var randomWord = scifiWords[Math.floor(Math.random() * scifiWords.length)];

// make variables for wins losses and, picked placeholder picked word
// want to automatically start game

var gameRunning;
var wins = 0;
var losses = 0;
var guessesLeft = 13;
var pickedWord = "";
var pickedWordHolder = [];
var incorrectLetters = [];

function gameStart () {
    gameRunning = true;
    guessesLeft = 13;
    incorrectLetters = [];
    pickedWordHolder = [];
    pickedWord = randomWord;
    for (i = 0; i < pickedWord.length; i++) {
        pickedWordHolder.push("_");
    }
}

// make letter bank (letters used)
// make var for guesses left 
// loop to start the game over

// on key up make a function to check what letter was picked; compares letter to word chosen


// check for incorrects 

// check to see if lost
// check to see if we win

