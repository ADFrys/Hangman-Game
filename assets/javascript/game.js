var wins = 0;
var guessesRemaining= 12;

var possible = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var currentWord = document.getElementById("current-word");
var words = [
"bird",
"dog",
"fish",
"lizard"
];

var guessesRemainingp = document.getElementById("guesses-remaining");
var alreadyGuessedp = document.getElementById("already-guessed");
var currentwordp = document.getElementById("current-word");

var word = words[Math.floor(Math.random() * words.length)];
// look in to answerArray = "_" * word.length
var answerArray = [];

var remainingLetters = word.length;

var alreadyGuessedp = [];

for (var i=0; i<word.length; i++) {
  answerArray[i] = "_";
  };


document.onkeyup = function(event) {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

while (remainingLetters>0) {

  if (possible.includes(userGuess)) {

    currentwordp.textContent = answerArray.join(" ");

    for (var j=0; j<word.length; j++) {
      answerAray[j] = guess;
      remainingLetters--;
    };

      if (word[j] === guess) {

            answerArray[j] = guess;

            remainingLetters--;

   }

    else if (word[j] !== guess) {
    	guessesRemaining--;
    	guessesRemainingp.textContent = "Guesses Remaining: " + guessesRemaining;
    }

    else if (alreadyGuessedp === userGuess) {
    	alert("You already guessed that letter");
    }

  else {
  	alert("You pressed a wrong key! Please select an 'a' through a 'z' key only");
  };
};
};
};

