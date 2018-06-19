var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var guess; //user guess
var letters = []; //correctly guessed letters
var wrongLetters = []; //incorrectly guessed letters
var counter = 0; //counts correct letters
var guessesLeft = 13;
var lives; //counts users lives

var wordList = ["blaster", "spaceship", "asteroid", "cruiser", "laser", "starship", "space", "lightspeed", "star destroyer"]; //FILL LIST LATER!!

//randomly chooses a word from wordList
var word = wordList[Math.floor(Math.random() * wordList.length)];

//choosen word is replaced with
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
    var found = false; //lets use bool to check if a letter was found
    for (i = 0; i < word.length; i++) {
      if (guess === word[i]) {
        letters[i] = guess;
        document.getElementById("answer").innerHTML = letters.join(" ");
        found = true;
      }
    }
    //now all letters have been checked, was any found
    if (found) return; //if yes return
    
    //wrong, lets also see if 
    //it's not already logged, if not add it
    //you could also then use  wrongLetters.length
    //for working out if gueses area all used up.
    if (wrongLetters.indexOf(guess) < 0) {
      wrongLetters.push(guess);
      guessesLeft--;
      document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

    }
  }
}

start();
checkLetter();












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