var wins = 0;
var guessesRemaining= 12;

var possible = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

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

currentwordp.textContent = answerArray;
console.log("answerarray " + answerArray);
console.log(currentwordp.textContent + " currentwordp1");
console.log("wordpicked " + word);

  var reset = function () {
    guessesRemaining = 12;
    guessesRemainingp.textContent = "Guesses Remaining: " + guessesRemaining;
  }

document.onkeyup = function(event) {

  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log("userguess1 " + userGuess);

  if (possible.includes(userGuess)) {
    guessesRemaining--;
    guessesRemainingp.textContent = "Guesses Remaining: " + guessesRemaining;
    alreadyGuessedp.textContent = "Already Guessed: " + alreadyGuessedp;
    console.log("alreadyguessed " + alreadyGuessedp);

    // while (remainingLetters>0 && guessesRemaining>0) {

      for (var j=0; j<word.length; j++) {

        if (word[j] === userGuess) {
          console.log("wordj " + word[j]);
          answerArray[j] = userGuess;
          currentwordp.textContent = answerArray.join(" ");
          console.log("answerarrayj " + answerArray[j]);
          remainingLetters--;
          console.log("userGuess2 " + userGuess);
          console.log("remainingletters " + remainingLetters);
          console.log("answerArray " + answerArray);
      	  console.log("word " + word);
        }

      else if (word == answerArray) {
      	alert("You win!");
        reset();
      }
      }
    // }
  }

  else {
  	alert("You pressed a wrong key! Please select an 'a' through a 'z' key only");
  };
};

