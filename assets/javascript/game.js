$(document).ready (function()

});

var guess; //user guess
var letters = []; //correctly guessed letters
//var availableLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "_"];
var wrongLetters = []; //incorrectly guessed letters
var guessesLeft = 13;
var wins;
var losses; 
var youWin = "You won! Can you get the next one though?";
var youLose = "No hard feelings kid. Try again";

// change this into an array filled with objects. add an image to each word. {word: "--", image: "location.png"},
var wordList = ["blaster", "spaceship", "asteroid", "cruiser", "laser", "space station", "space", "lightspeed"]; 

//randomly chooses a word from wordList
var word = wordList[Math.floor(Math.random() * wordList.length)];

// add document.ready funciton

//line 19-33 are new lines
// function reset() {
//     guessesLeft = 13;
//     wrongLetters = [];
//     word;
//     letters = [];
//     for (var i = 0; i < word.length; i++) {
//         if (word[i] === " ") {
//             letters.push(" ");
//         }
//         else {
//             letters.push("__");
//         }
//     }
// }

//this should update what the current game shows on screen

// function continuedGame() {
    
// }

//chosen word is replaced with __
function start() {
  for (i = 0; i < word.length; i++) {
    letters[i] = "__";
  }

  document.getElementById("answer").innerHTML = letters.join(" ");
  console.log(word);
}

//need to change 53 - 65 to be more like 67 - 81

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

    // function letterGuess(letter) {

//     if (guessedLetters.indexOf(letter) === -1) {
//         guessedLetters.push(letter);

//         for (var i = 0; i < randomWord.length; i++) {
//             if (randomWord[i].toLowerCase() === letter.toLowerCase) {
//                 randomWordHolder[i] = letter;
//             }
//         }
//     }

//     $randomWord.textContent = randomWordHolder.join("");

// }
    

    //for working out if gueses area all used up.
    if (wrongLetters.indexOf(guess) < 0) {
      wrongLetters.push(guess);
      guessesLeft--;
      document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

    }
    document.getElementById("guessesLeft").textContent = guessesLeft;
  }
}


// function checkIncorrect(letter) {
//     if (randomWordHolder.indexOf(letter) === -1 && randomWordHolder.indexOf(letter.toUpperCase)) === -1 {
//         guessesLeft--;
//         incorrectLetters.push(letter);
//         $guessedLetters.textContent = incorrectLetters.join(" ");
//         $guessedLetters.textContent = guessesLeft;
//     }
//     checkLoss();
// )
    
// function checkLoss() {
//     if (guessesLeft === 0) {
//         losses++;
//         $losses.textContent = losses;
//         alert("you suck");
//         gameReset;
//     }
// }

// function checkWin() {
//     if (randomWord.toLowerCase() === randomWordHolderjoin("").toLowerCase()) {
//         wins++;
//         alert("you win");
//         $wins.textContent = wins;
//     }
//     checkWin();
// }


start();
checkLetter();






//     document.onKeyUp = function(event) {
//     if (event.keyCode >= 65 && event.keyCode <= 90) {
//         checkLetter(event.key);
//     }

// }





// // ending game with this? https://stackoverflow.com/questions/27264230/how-to-reset-a-page-and-how-to-score-a-win-in-hangman
// if (guessesLeft === 0) {
//     losses++;
//     alert("You lose, better luck next time!");
//     newGame(); // begin new game
// }

// //winning? need to change to js instead of jquery (same html as above)
// if ($("#word").text() === word) {
//     wins++;
//     if (window.confirm("You win! Play again?")) {
//         newGame();

// if (document.getElementById("answer") === word[i]) {
//     alert("You win! Play again!")
//     newGame();
// }


// reference DOM get elementsbyID for any placeholders, guessedletters, guessesleft, wins and losses
// var $guessedLetters = document.getElementById("guessed-letters");
// var $randomWord = document.getElementById("chosen-word");
// var $incorrectLetters = document.getElementById("wrong-choices");
// var $guessesLeft = document.getElementById("guesses-left");
// var $wins = document.getElementById("wins");
// var $losses = document.getElementById("losses");


// youtube here

// var scifiWords = ["blaster", "spaceship", "asteroid", "cruiser", "laser", "starship", "space", "lightspeed", "star destroyer"];
// var randomWord = scifiWords[Math.floor(Math.random() * scifiWords.length)];
// var wins = 0;
// var losses = 0;
// var guessesLeft = 13;

// var randomWordHolder = [];
// var guessedLetters = [];
// var incorrectLetters = [];

// function newGame() {
//     guessesLeft = 13;
//     guessedLetters = [];
//     incorrectLetters = [];
//     randomWordHolder = [];

//     randomWord;

//     for (var i = 0; i < newWord.length; i++) {
//         if (newWord[i] === " ") {
//             randomWordHolder.push(" ");
//         } else {
//             randomWordHolder.push("_");
//         }
//     }
//     $guessesLeft.textContent = guessesLeft;
//     $newWord.textContent = randomWordHolder.join("");
//     $incorrectLetters.textContent = incorrectLetterHolder;
// }
// 







// function letterGuess(letter) {

//     if (guessedLetters.indexOf(letter) === -1) {
//         guessedLetters.push(letter);

//         for (var i = 0; i < randomWord.length; i++) {
//             if (randomWord[i].toLowerCase() === letter.toLowerCase) {
//                 randomWordHolder[i] = letter;
//             }
//         }
//     }

//     $randomWord.textContent = randomWordHolder.join("");

// }

// function checkIncorrect(letter) {
//     if (randomWordHolder.indexOf(letter) === -1 && randomWordHolder.indexOf(letter.toUpperCase)) === -1 {
//         guessesLeft--;
//         incorrectLetters.push(letter);
//         $guessedLetters.textContent = incorrectLetters.join(" ");
//         $guessedLetters.textContent = guessesLeft;
//     }
//     checkLoss();
// )
    
// function checkLoss() {
//     if (guessesLeft === 0) {
//         losses++;
//         $losses.textContent = losses;
//         alert("you suck");
//         gameReset;
//     }
// }

// function checkWin() {
//     if (randomWord.toLowerCase() === randomWordHolderjoin("").toLowerCase()) {
//         wins++;
//         alert("you win");
//         $wins.textContent = wins;
//     }
//     checkWin();
// }

    // document.onKeyUp = function(event) {
//     if (event.keyCode >= 65 && event.keyCode <= 90) {
//         letterGuess(event.key);
//     }

// }

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




// create words to use and randomize them // 

// var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
// var guess; //users guess
// var letters = []; //correctly guessed letters
// var incorrectLetters = [];
// var counter = 0; //do i need this?
// var guessesLeft = 13;

});
