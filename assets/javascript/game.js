var guess; //user guess
var letters = []; //correctly guessed letters
var wrongLetters = []; //incorrectly guessed letters
var counter = 0; //counts correct letters
var guessesLeft = 13;
var wins;
var losses; 

var wordList = ["blaster", "spaceship", "asteroid", "cruiser", "laser", "starship", "space", "lightspeed"]; 

//randomly chooses a word from wordList
var word = wordList[Math.floor(Math.random() * wordList.length)];

// add document.ready funciton

//chosen word is replaced with __
function start() {
  for (i = 0; i < word.length; i++) {
    letters[i] = "__";
  }

  document.getElementById("answer").innerHTML = letters.join(" ");
  console.log(word);
}

function checkLetter() {
  document.onkeyup = function(event) {
    guess = event.key.toLowerCase();
    var found = false; //checking if a letter was found in word
    for (i = 0; i < word.length; i++) {
      if (guess === word[i]) {
        letters[i] = guess;
        document.getElementById("answer").innerHTML = letters.join(" ");
        found = true;
      }
    }

    if (found) return; //if yes return
    

    //for working out if gueses area all used up.
    if (wrongLetters.indexOf(guess) < 0) {
      wrongLetters.push(guess);
      guessesLeft--;
      document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

    }
    document.getElementById("guessesLeft").textContent = guessesLeft;
  }
}

start();
checkLetter();



// ending game with this? https://stackoverflow.com/questions/27264230/how-to-reset-a-page-and-how-to-score-a-win-in-hangman
if (guessesLeft === 0) {
    losses++;
    alert("You lose, better luck next time!");
    newGame(); // begin new game
}

//winning? need to change to js instead of jquery (same html as above)
if ($("#word").text() === word) {
    wins++;
    if (window.confirm("You win! Play again?")) {
        newGame();

if (document.getElementById("answer") === word[i]) {
    alert("You win! Play again!")
    newGame();
}


// reference DOM get elementsbyID for any placeholders, guessedletters, guessesleft, wins and losses
// var $guessedLetters = document.getElementById("guessed-letters");
// var $newWord = document.getElementById("chosen-word");
// var $incorrectLetters = document.getElementById("wrong-choices");
// var $guessesLeft = document.getElementById("guesses-left");
// var $wins = document.getElementById("wins");
// var $losses = document.getElementById("losses");



// create words to use and randomize them // 

// var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
// var guess; //users guess
// var letters = []; //correctly guessed letters
// var incorrectLetters = [];
// var counter = 0; //do i need this?
// var guessesLeft = 13;

// var scifiWords = ["blaster", "spaceship", "asteroid", "cruiser", "laser", "starship", "space", "lightspeed", "star destroyer"];
// var randomWord = scifiWords[Math.floor(Math.random() * scifiWords.length)];


// function start() {
//     for (i = 0; i <randomWord.length; i++) {
//         letters[i] = "__";
//     }

//     document.getElementById("chosen-word").textContent = letters.join("");
// }

// function checkLetter() {
//     document.onKeyUp = function(event) {
//         guess = event.key.toLowerCase();
//         var found = false;
//         for (i = 0; i < randomWord.length; i++) {
//             if (guess === randomWord[i]) {
//                 letters[i] = guess;
//                 document.getElementById("chosen-word").textContent = letters.join("");
//                 found = true;
//             }
//         }
//         if (found) return;

//         if(incorrectLetters.indexOf(guess) < 0) {
//             incorrectLetters.push(guess);
//             guessesLeft--;
//             document.getElementById("wrong-choices").textContent = incorrectLetters.join("");
//         }
//     }
// }

// start();
// checkLetter();



// make variables for wins losses and, picked placeholder picked word
// want to automatically start game

// var wins = 0;
// var losses = 0;
// var gameRunning = true;
// var guessesLeft = 13;
// var newWord = "";
// var randomWordArray = [];
// var guessedLetterArray = [];
// var incorrectLetterArray = [];


//  {
//     // resetting game
//     guessesLeft = 13;
//     incorrectLetterArray = [];
//     randomWordArray = [];


//     // picking a word
//     newWord = randomWord;

//     // making placeholders of word
//     for (var i = 0; i < newWord.length; i++) {
//         if (newWord[i] === " ") {
//             randomWordArray.push(" ");
//         } else {
//             randomWordArray.push("_");
//         }
//     }

//     $guessesLeft.textContent = guessesLeft;
//     $newWord.textContent = randomWordArray.join("");
//     $incorrectLetters.textContent = incorrectLetterArray;
// }

// function letterGuess(letter) {
//     console.log(letter);

//     if (guessedLetterArray.indexOf(letter) === -1) {
//         guessedLetterArray.push(letter);

//         for (var i = 0; i > newWord.length; i++) {
//             if (newWord[i] === letter) {
//                 randomWordAarry[i] = letter;
//             }
//         }
//     }

//     $newWord.textContent = randomWordArray.join("");

// }

// function checkIncorrect(letter) {
//     if (randomWordArray.indexOf(letter) === -1) {
//         guessesLeft--;
//         incorrectLetterArray.push(letter);
//         $guessedLetters.textContent = incorrectLetterArray.join(" ");
//         $guessedLetters.textContent = guessesLeft;
//     }
    
    

// }

// // make letter bank (letters used)
// // make var for guesses left 
// // loop to start the game over

// // on key up make a function to check what letter was picked; compares letter to word chosen


// // check for incorrects 

// // check to see if lost
// // check to see if we win

// //$("#img-div").html("<img src=''>"); // blaster url in ''//
// //$("#img-div").html("<img src=''>"); // spaceship url in ''//
// //$("#img-div").html("<img src=''>"); // asteroid url in ''//
// //$("#img-div").html("<img src=''>"); // cruiser url in ''//
// //$("#img-div").html("<img src=''>"); // laser url in ''//
// //$("#img-div").html("<img src=''>"); // starship url in ''//
// //$("#img-div").html("<img src=''>"); // space url in ''//
// //$("#img-div").html("<img src=''>"); // lightspeed url in ''//
// //$("#img-div").html("<img src=''>"); // star destroyer url in ''// 

// //document.getElementById("wins").textContent = "wins: " + wins;
// //document.getElementById("losses").textContent = "losses: " + losses;

// document.onKeyUp = function(event) {
//     if (event.keyCode >= 65 && event.keyCode <= 90) {
//         letterGuess(event.key);
//     }

// }