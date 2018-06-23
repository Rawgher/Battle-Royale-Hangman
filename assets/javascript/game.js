//$(document).ready(function(){



//var coin_sound = new Audio("assets/audio/smw_coin.wav");
//var defeat_sound = new Audio("assets/audio/smb_defeat.wav");
//var victory_sound = new Audio("assets/audio/smb_victory.wav");

//var hurt_sound = new Audio("assets/audio/loz_hurt.wav");




var gameState = {
  wins: 0,
  losses: 0,
  secret: {},
  letters: [],
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
    text: "GAME OVER! *Teleports behind you* Nothing personal, kid",
    image: "assets/images/nothing-personal.jpg",
}

// reset game and give new word
gameState.reset = function () {
    this.guessLeft = this.totalGuesses;
    this.wrongLetters = [];

    var wordIndex = Math.floor(Math.random() * myWords.length);
    this.secret = myWords[wordIndex];

    this.letters = [];
    for (var i = 0; i < this.secret.word.length; i++) {
        if (this.secret.word[i] === " ") {
            this.letters.push(" ");
        } else {
            this.letters.push("__");
        }
    }
}
// update the text to show wins and wrong letters and guesses
gameState.updateGame = function() {
    document.getElementById("wins").textContent = this.wins;
    document.getElementById("guessesLeft").textContent = this.guessesLeft;

    var displayedWordString = "";
    for (var i = 0; this.letters.length; i++) {
        displayedWordString += this.letters[i];
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
    for (var i = 0; i < this.letters.length; i++) {
        if (this.letters[i] === "__") {
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
    for (var i = 0; i < this.letters.length; i++) {
        if (letter === this.letters[i]) {
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
            this.letters[i] = letter;
            did_swap = true;
        }
    }
    return did_swap;
}

//process the players guess
gameState.processInput = function(letter) {
    if (!this.letterUsed(letter)) {
        this.letters.push(letter);

        if (this.applyLetter(letter)) {
            //good sound name.play();
        }
        else {
            //bad sound name.play();
            this.guessesLeft -= 1;
        }

        if (this.userWin()) {
            //win sound name.play();
            this.wins += 1;
            this.updateInfo(winText);
            this.reset();
        } 
        else if (this.userLost()) {
            //defeat sound name.play();
            this.losses += 1;
            this.updateInfo(lossText);
            this.reset;
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

// });