// reference DOM get elementsbyID for any placeholders, guessedletters, guessesleft, wins and losses
var randomWord = document.getElementById("chosen-word");
var incorrectLetters = document.getElementById("wrong-choices");
var guessesLeft = document.getElementById("guesses-left");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");



// create words to use and randomize them // 

var scifiWords = ["blaster", "spaceship", "asteroid", "cruiser", "laser", "starship", "space", "lightspeed", "star destroyer"];
var randomWord = scifiWords[Math.floor(Math.random() * scifiWords.length)];

// make variables for wins losses and, picked placeholder picked word
// want to automatically start game

var wins = 0;
var losses = 0;
var guessesLeft = 13;
var newWord = "";
var answerArray = [];
var incorrectLetters = [];

document.onKeyUp = function startUp() {
    //incorrectLetters = [];
    //randomWordHolder = [];
    //newWord = randomWord;
    for (var i = 0; i < randomWord.length; i++) {
        if (answerArray[i] === " ") {
            answerArray.push(" ");
        } else{
        answerArray.push("_");
        }
    }
    guessesLeft.textContent = guessesLeft;
    newWord.textContent = randomWordHolder.join("");
    incorrectLetters.textContent = incorrectLetters;
}

function Letter () {
    
    if (letter.length > 0) {
        for (var i = 0; i <randomWord.length; i++) {
            if (randomWord[i] === letter) {
                answerArray[i] = letter;
            }
        }
    }
    guessesLeft--;
}

// make letter bank (letters used)
// make var for guesses left 
// loop to start the game over

// on key up make a function to check what letter was picked; compares letter to word chosen


// check for incorrects 

// check to see if lost
// check to see if we win

//$("#img-div").html("<img src=''>"); // blaster url in ''//
//$("#img-div").html("<img src=''>"); // spaceship url in ''//
//$("#img-div").html("<img src=''>"); // asteroid url in ''//
//$("#img-div").html("<img src=''>"); // cruiser url in ''//
//$("#img-div").html("<img src=''>"); // laser url in ''//
//$("#img-div").html("<img src=''>"); // starship url in ''//
//$("#img-div").html("<img src=''>"); // space url in ''//
//$("#img-div").html("<img src=''>"); // lightspeed url in ''//
//$("#img-div").html("<img src=''>"); // star destroyer url in ''// 

//document.getElementById("wins").textContent = "wins: " + wins;
//document.getElementById("losses").textContent = "losses: " + losses;
