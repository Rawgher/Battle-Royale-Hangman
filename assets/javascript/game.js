// $(document).ready (function()

// Special thanks to The Mushroom Kingdon page for these sound files!
// See: http://www.themushroomkingdom.net
var coin_sound = new Audio("assets/audio/smw_coin.wav");
var defeat_sound = new Audio("assets/audio/smb_defeat.wav");
var victory_sound = new Audio("assets/audio/smb_victory.wav");

// Special thanks to HelpTheWretched for this sound file!
// See HelpTheWretched's site at: http://www.ZeldaSounds.com
var hurt_sound = new Audio("assets/audio/loz_hurt.wav");

// Game State object containing the state of the game
// and functions used to process and update the game
// when the player enters letters
var game_state = {
    won_games: 0,
    secret: {},
    displayed_letters: [],
    guessesLeft: 0,
    total_attempts_allowed: 10,
    wrongLetters: [],
    victory_text: "You did it! Now play again...",
    defeat_text = { text: "GAME OVER! *Teleports behind you* Nothing personal, kid",
                   image: "assets/images/nothing-personal.jpeg"
  },

    reset:                function() { alert("reset not implemented"); },
    update_game_play:     function() { alert("update_game_play not implemented"); },
    update_game_info:     function() { alert("update_game_info not implemented"); },
    user_won_game:        function() { alert("user_won_game not implemented"); },
    user_lost_game:       function() { alert("user_lost_game not implemented"); },
    letter_used:          function() { alert("letter_used not implemented"); },
    apply_letter:         function() { alert("apply_letter not implemented"); },
    process_player_input: function() { alert("process_player_input not implemented"); },
}

// Resets the game with new word and game variables
game_state.reset = function()
{
    this.guessesLeft = this.total_attempts_allowed;
    this.wrongLetters = [];

    var word_index = Math.floor(Math.random() * myWords.length);
    this.secret = myWords[word_index];

    this.displayed_letters = [];
    for (var i = 0; i < this.secret.word.length; i++)
    {
        if (this.secret.word[i] === " ")
        {
            this.displayed_letters.push(" ");
        }
        else
        {
            this.displayed_letters.push("_");
        }
    }
}

// Updates the document text with current game 
// play section with the number of wins, remaining
// attempts, the correctly guessed letters and the
// letters that have been used so far.
game_state.update_game_play = function()
{
    document.getElementById("wins").textContent = "Wins: " + this.won_games;

    document.getElementById("guessesLeft").textContent = this.guessesLeft;

    var displayed_word_string = "";
    for (var i = 0; i < this.displayed_letters.length; i++)
    {
        displayed_word_string += this.displayed_letters[i];
    }
    document.getElementById("answer").textContent = displayed_word_string;

    var wrongLettersString = "";
    for (var i = 0; i < this.wrongLetters.length; i++)
    {
        wrongLettersString += this.wrongLetters[i] + " ";
    }
    document.getElementById("wrongGuesses").textContent = wrongLettersString;
}

// Updates the game info section with a victory or
// defeat message and displays the secret word along
// with a description and image of the character.
game_state.update_game_info = function(win_or_lost_msg)
{
    var game_text = win_or_lost_msg + " ";
    game_text += this.secret.word + ": ";
    game_text += this.secret.description;
    document.getElementById("game-text").textContent = game_text; // need to add thsi

    document.getElementById("game-image").src = this.secret.image; // need to add this
}

// Check if user won the game by seeing if there
// are any remaining blanks/underscores
game_state.user_won_game = function()
{
    for (var i = 0; i < this.displayed_letters.length; i++)
    {
        if (this.displayed_letters[i] === '_')
        {
            return false;
        }
    }
    return true;
}

// Check if user lost the game (what a loser!)
game_state.user_lost_game = function()
{
    return this.guessesLeft === 0;
}

// Check if the letter has already been used
game_state.letter_used = function(letter)
{
    for (var i = 0; i < this.wrongLetters.length; i++)
    {
        if (letter === this.wrongLetters[i])
        {
            return true;
        }
    }
    return false;
}

// Attempts to apply the guessed letter
// If the letter was correctly guessed,
// returns true and updates the displayed letters
// If the letter isn't in the secret word,
// returns false
game_state.apply_letter = function(letter)
{
    var did_swap = false;
    for (var i = 0; i < this.secret.word.length; i++)
    {
        if (letter === this.secret.word[i])
        {
            this.displayed_letters[i] = letter;
            did_swap = true;
        }
    }
    return did_swap;
}

// Processes the players guess, checks if the letter
// was already used and, if so, tries to apply it.
// After that, determines if the player has already won
// or lost the game and updates the game information.
game_state.process_player_input = function(letter)
{
    if (!this.letter_used(letter))
    {
        this.used_letters.push(letter);

        // Try to apply the letter to the secret.
        // If fail, reduce the number of attempts left.
        if (this.apply_letter(letter))
        {
            coin_sound.play();
        }
        else
        {
            hurt_sound.play();
            this.guessesLeft -= 1;
        }

        if (this.user_won_game())
        {
            victory_sound.play();
            this.won_games += 1;
            this.update_game_info(this.victory_text);
            this.reset();
        }
        else if (this.user_lost_game())
        {
            defeat_sound.play();
            this.update_game_info(this.defeat_text);
            this.reset();
        }

        this.update_game_play();
    }
}

// Check if text is letter or number
function is_letter_or_number(text)
{
    var letterNumber = /^[0-9a-zA-Z]$/;
    if(text.match(letterNumber)) 
    {
        return true;
    }
    else
    { 
        return false; 
    }
}

function game_input(event)
{
    var letter = event.key.toUpperCase();
    console.log("User entered: " + letter);
    if (is_letter_or_number(letter))
    { 
        game_state.process_player_input(letter);
    }
}

// Grab keystrokes and apply them to the game
document.onkeyup = game_input;
document.getElementById("hidden-input").addEventListener("keydown input", game_input);

// Initialize the game and display
game_state.reset();
game_state.update_game_play();











// });

// var guess; //user guess
// var letters = []; //correctly guessed letters
// //var availableLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "_"];
// var wrongLetters = []; //incorrectly guessed letters
// var guessesLeft = 13;
// var wins;
// var losses; 
// var youWin = "You won! Can you get the next one though?";
// var youLose = "No hard feelings kid. Try again";

// // change this into an array filled with objects. add an image to each word. {word: "--", image: "location.png"},
// var wordList = ["blaster", "spaceship", "asteroid", "cruiser", "laser", "space station", "space", "lightspeed"]; 

// //randomly chooses a word from wordList
// var word = wordList[Math.floor(Math.random() * wordList.length)];

// // add document.ready funciton

// //line 19-33 are new lines
// // function reset() {
// //     guessesLeft = 13;
// //     wrongLetters = [];
// //     word;
// //     letters = [];
// //     for (var i = 0; i < word.length; i++) {
// //         if (word[i] === " ") {
// //             letters.push(" ");
// //         }
// //         else {
// //             letters.push("__");
// //         }
// //     }
// // }

// //this should update what the current game shows on screen

// // function continuedGame() {
    
// // }

// //chosen word is replaced with __
// function start() {
//   for (i = 0; i < word.length; i++) {
//     letters[i] = "__";
//   }

//   document.getElementById("answer").innerHTML = letters.join(" ");
//   console.log(word);
// }

// //need to change 53 - 65 to be more like 67 - 81

// function checkLetter() {
//   document.onkeyup = function(event) {
//     guess = event.key.toLowerCase();
//     var found = false; //checking if a letter was found in word
//     for (i = 0; i < word.length; i++) {
//       if (guess === word[i]) {
//         letters[i] = guess;
//         document.getElementById("answer").innerHTML = letters.join(" ");
//         found = true;
//       }
//     }

//     if (found) return; //if yes return

//     // function letterGuess(letter) {

// //     if (guessedLetters.indexOf(letter) === -1) {
// //         guessedLetters.push(letter);

// //         for (var i = 0; i < randomWord.length; i++) {
// //             if (randomWord[i].toLowerCase() === letter.toLowerCase) {
// //                 randomWordHolder[i] = letter;
// //             }
// //         }
// //     }

// //     $randomWord.textContent = randomWordHolder.join("");

// // }
    

//     //for working out if gueses area all used up.
//     if (wrongLetters.indexOf(guess) < 0) {
//       wrongLetters.push(guess);
//       guessesLeft--;
//       document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

//     }
//     document.getElementById("guessesLeft").textContent = guessesLeft;
//   }
// }


// // function checkIncorrect(letter) {
// //     if (randomWordHolder.indexOf(letter) === -1 && randomWordHolder.indexOf(letter.toUpperCase)) === -1 {
// //         guessesLeft--;
// //         incorrectLetters.push(letter);
// //         $guessedLetters.textContent = incorrectLetters.join(" ");
// //         $guessedLetters.textContent = guessesLeft;
// //     }
// //     checkLoss();
// // )
    
// // function checkLoss() {
// //     if (guessesLeft === 0) {
// //         losses++;
// //         $losses.textContent = losses;
// //         alert("you suck");
// //         gameReset;
// //     }
// // }

// // function checkWin() {
// //     if (randomWord.toLowerCase() === randomWordHolderjoin("").toLowerCase()) {
// //         wins++;
// //         alert("you win");
// //         $wins.textContent = wins;
// //     }
// //     checkWin();
// // }


// start();
// checkLetter();






// //     document.onKeyUp = function(event) {
// //     if (event.keyCode >= 65 && event.keyCode <= 90) {
// //         checkLetter(event.key);
// //     }

// // }





// // // ending game with this? https://stackoverflow.com/questions/27264230/how-to-reset-a-page-and-how-to-score-a-win-in-hangman
// // if (guessesLeft === 0) {
// //     losses++;
// //     alert("You lose, better luck next time!");
// //     newGame(); // begin new game
// // }

// // //winning? need to change to js instead of jquery (same html as above)
// // if ($("#word").text() === word) {
// //     wins++;
// //     if (window.confirm("You win! Play again?")) {
// //         newGame();

// // if (document.getElementById("answer") === word[i]) {
// //     alert("You win! Play again!")
// //     newGame();
// // }


// // reference DOM get elementsbyID for any placeholders, guessedletters, guessesleft, wins and losses
// // var $guessedLetters = document.getElementById("guessed-letters");
// // var $randomWord = document.getElementById("chosen-word");
// // var $incorrectLetters = document.getElementById("wrong-choices");
// // var $guessesLeft = document.getElementById("guesses-left");
// // var $wins = document.getElementById("wins");
// // var $losses = document.getElementById("losses");


// // youtube here

// // var scifiWords = ["blaster", "spaceship", "asteroid", "cruiser", "laser", "starship", "space", "lightspeed", "star destroyer"];
// // var randomWord = scifiWords[Math.floor(Math.random() * scifiWords.length)];
// // var wins = 0;
// // var losses = 0;
// // var guessesLeft = 13;

// // var randomWordHolder = [];
// // var guessedLetters = [];
// // var incorrectLetters = [];

// // function newGame() {
// //     guessesLeft = 13;
// //     guessedLetters = [];
// //     incorrectLetters = [];
// //     randomWordHolder = [];

// //     randomWord;

// //     for (var i = 0; i < newWord.length; i++) {
// //         if (newWord[i] === " ") {
// //             randomWordHolder.push(" ");
// //         } else {
// //             randomWordHolder.push("_");
// //         }
// //     }
// //     $guessesLeft.textContent = guessesLeft;
// //     $newWord.textContent = randomWordHolder.join("");
// //     $incorrectLetters.textContent = incorrectLetterHolder;
// // }
// // 







// // function letterGuess(letter) {

// //     if (guessedLetters.indexOf(letter) === -1) {
// //         guessedLetters.push(letter);

// //         for (var i = 0; i < randomWord.length; i++) {
// //             if (randomWord[i].toLowerCase() === letter.toLowerCase) {
// //                 randomWordHolder[i] = letter;
// //             }
// //         }
// //     }

// //     $randomWord.textContent = randomWordHolder.join("");

// // }

// // function checkIncorrect(letter) {
// //     if (randomWordHolder.indexOf(letter) === -1 && randomWordHolder.indexOf(letter.toUpperCase)) === -1 {
// //         guessesLeft--;
// //         incorrectLetters.push(letter);
// //         $guessedLetters.textContent = incorrectLetters.join(" ");
// //         $guessedLetters.textContent = guessesLeft;
// //     }
// //     checkLoss();
// // )
    
// // function checkLoss() {
// //     if (guessesLeft === 0) {
// //         losses++;
// //         $losses.textContent = losses;
// //         alert("you suck");
// //         gameReset;
// //     }
// // }

// // function checkWin() {
// //     if (randomWord.toLowerCase() === randomWordHolderjoin("").toLowerCase()) {
// //         wins++;
// //         alert("you win");
// //         $wins.textContent = wins;
// //     }
// //     checkWin();
// // }

//     // document.onKeyUp = function(event) {
// //     if (event.keyCode >= 65 && event.keyCode <= 90) {
// //         letterGuess(event.key);
// //     }

// // }

// // }

// // // make letter bank (letters used)
// // // make var for guesses left 
// // // loop to start the game over

// // // on key up make a function to check what letter was picked; compares letter to word chosen


// // // check for incorrects 

// // // check to see if lost
// // // check to see if we win

// // //$("#img-div").html("<img src=''>"); // blaster url in ''//
// // //$("#img-div").html("<img src=''>"); // spaceship url in ''//
// // //$("#img-div").html("<img src=''>"); // asteroid url in ''//
// // //$("#img-div").html("<img src=''>"); // cruiser url in ''//
// // //$("#img-div").html("<img src=''>"); // laser url in ''//
// // //$("#img-div").html("<img src=''>"); // starship url in ''//
// // //$("#img-div").html("<img src=''>"); // space url in ''//
// // //$("#img-div").html("<img src=''>"); // lightspeed url in ''//
// // //$("#img-div").html("<img src=''>"); // star destroyer url in ''// 

// // //document.getElementById("wins").textContent = "wins: " + wins;
// // //document.getElementById("losses").textContent = "losses: " + losses;




// // create words to use and randomize them // 

// // var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
// // var guess; //users guess
// // var letters = []; //correctly guessed letters
// // var incorrectLetters = [];
// // var counter = 0; //do i need this?
// // var guessesLeft = 13;

// });
