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

var answerArray = [];
var word = "";
var remainingLetters = 0;
var alreadyGuessedArray = [];

var randomWord = function() {
  word = words[Math.floor(Math.random() * words.length)];
  remainingLetters = word.length;
  answerArray= [];
  
  for (var i=0; i<word.length; i++) {
    answerArray[i] = "_";
  };
};

randomWord();

currentwordp.textContent = answerArray;
console.log("answerarray " + answerArray);
console.log("wordpicked " + word);

var reset = function () {
  guessesRemaining = 12;
  guessesRemainingp.textContent = "Guesses Remaining: " + guessesRemaining;
  alreadyGuessedp.textContent = "Letters Already Guessed: ";
  randomWord();
  currentwordp.textContent = answerArray;
  alreadyGuessedArray = [];
  console.log("wordpicked reset " + word);
}

var winLoss = function() {
  if (word == answerArray.join("")) {
  	console.log(answerArray);
    currentwordp = document.getElementById("current-word");
    currentwordp.textContent = answerArray.join(" "); 
  	alert("You win!");
    reset();
  }

  if (guessesRemaining == 0) {
    alert("You lost. Try again.");
    reset();
  }
}

document.onkeyup = function(event) {

  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log("userguess1 " + userGuess);

  if (possible.includes(userGuess)) {
    guessesRemaining--;
    guessesRemainingp.textContent = "Guesses Remaining: " + guessesRemaining;

    for (var j=0; j<word.length; j++) {

      if (word[j] === userGuess) {
        console.log("wordj " + word[j]);
        answerArray[j] = userGuess;
        currentwordp.textContent = answerArray.join(" ");
        console.log("answerarrayj " + answerArray[j]);
        remainingLetters--;
        console.log("userGuess2 " + userGuess);
        console.log("remainingletters " + remainingLetters);
    	  console.log("word " + word);
      }

     	else if ((word[j] !== userGuess) && (alreadyGuessedArray.includes(userGuess) == false)) {
     		alreadyGuessedArray.push(userGuess);
     		alreadyGuessedp.textContent += userGuess + " ";
     	}
    }
  }

  else {
  	alert("You pressed a wrong key! Please select an 'a' through a 'z' key only");
  };
  winLoss();
};