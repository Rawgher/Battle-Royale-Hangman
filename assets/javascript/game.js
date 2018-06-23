$(document).ready(function(){

var goodSound = new Audio("assets/audio/yee.m4a");
var badSound = new Audio("assets/audio/womp-womp.m4a");
var winSound = new Audio("assets/audio/fresh.m4a");

var defeatSound = new Audio("assets/audio/nothing-personal.m4a");

var gameState = {
  wins: 0,
  losses: 0,
  secret: {},
  displayedLetters: [],
  guessesLeft: 0,
  totalGuesses: 10,
  wrongLetters: [],
  reset:          function() { alert("reset not implemented"); },
  updateGame:     function() { alert("updateGame not implemented"); },
  updateInfo:     function() { alert("updateInfo not implemented"); },
  userWin:        function() { alert("userWin not implemented"); },
  userLost:       function() { alert("userLost not implemented"); },
  letterUsed:     function() { alert("letterUsed not implemented"); },
  applyLetter:    function() { alert("applyLetter not implemented"); },
  processInput:   function() { alert("processInput not implemented"); },
}

var winText = "You did it! Now play again...";
var lossText = {
    text: "GAME OVER! Nothing personal, kid!",
    image: "assets/images/nothing-personal.jpg",
}

// reset game and give new word
gameState.reset = function () {
    this.guessesLeft = this.totalGuesses;
    this.wrongLetters = [];

    var wordIndex = Math.floor(Math.random() * myWords.length);
    this.secret = myWords[wordIndex];

    this.displayedLetters = [];
    for (var i = 0; i < this.secret.word.length; i++) {
        if (this.secret.word[i] === " ") {
            this.displayedLetters.push(" ");
        } else {
            this.displayedLetters.push(" _ ");
        }
    }
}
// update the text to show wins and wrong letters and guesses
gameState.updateGame = function() {
    document.getElementById("wins").textContent = this.wins;
    document.getElementById("guessesLeft").textContent = this.guessesLeft;

    var displayedWordString = " ";
    for (var i = 0; i < this.displayedLetters.length; i++) {
        displayedWordString += this.displayedLetters[i];
    } 
    document.getElementById("answer").textContent = displayedWordString;

    var wrongLetterString = "";
    for (var i = 0; i < this.wrongLetters.length; i++) {
        wrongLetterString += this.wrongLetters[i] + " ";
    } 
    document.getElementById("wrongGuesses").textContent = wrongLetterString;
}
//update game with win or loss text and image info and description
gameState.updateInfo = function (winOrLoseMsg) {
    var gameText = winOrLoseMsg + " ";
    gameText += this.secret.word + ": ";
    gameText += this.secret.description;

    document.getElementById("img-text").textContent = gameText;
    document.getElementById("img-div").src = this.secret.image;
}
// sees if we win - might have to change
gameState.userWin = function() {
    for (var i = 0; i < this.displayedLetters.length; i++) {
        if (this.displayedLetters[i] === " _ ") {
            return false;
        }
    }
    return true;
}
// sees if we lost
gameState.userLost = function () {
    return this.guessesLeft === 0;
}

//check if letter has been used
gameState.letterUsed = function(letter) {
    for (var i = 0; i < this.wrongLetters.length; i++) {
        if (letter === this.wrongLetters[i]) {
            return true;
        }
    } 
    return false;
}

// apply guessed letters
gameState.applyLetter = function(letter) {
    var did_swap = false;
    for (var i = 0; i < this.secret.word.length; i++ ) {
        if (letter === this.secret.word[i]) {
            this.displayedLetters[i] = letter;
            did_swap = true;
        }
    }
    return did_swap;
}

//process the players guess
gameState.processInput = function(letter) {
    if (!this.letterUsed(letter)) {
        this.wrongLetters.push(letter);

        if (this.applyLetter(letter)) {
            goodSound.play();
        }
        else {
            badSound.play();
            this.guessesLeft -= 1;
        }

        if (this.userWin()) {
            winSound.play();
            this.wins += 1;
            this.updateInfo(winText);
            this.reset();
        } 
        else if (this.userLost()) {
            defeatSound.play();
            this.losses += 1;
            document.getElementById("losses").textContent = this.losses;
            this.updateInfo(lossText.text);
            document.getElementById("img-div").src = lossText.image;
            this.reset();
        }
        this.updateGame();
    }
}

// check if letter or number
function letterOrNumber(text) {
    var letterNumber = /^[0-9a-zA-Z]$/;
    if (text.match(letterNumber)) {
        return true;
    } else {
        return false;
    }
}

function gameInput(event) {
    var letter = event.key.toUpperCase();
    if (letterOrNumber(letter)) {
        gameState.processInput(letter);
    }
}

document.onkeyup = gameInput;

gameState.reset();
gameState.updateGame();


//  // Visibility Buttons
//  $(".vis-button").on("click", function() {
//     $("img").animate({ opacity: "1" });
//   });
//   $(".invis-button").on("click", function() {
//     $("img").animate({ opacity: "0.05" });
//   });


// try and get this working later -- took CSS out so will have to insert that again?
//   $('.crazy-button').on("click", function(){
//   $('img').animate('transitionend', onTransitionEnd, false);
//   });

//   function onTransitionEnd() {
//     // Handle the transition finishing.
//   }

});