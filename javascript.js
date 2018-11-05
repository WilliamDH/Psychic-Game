var wins = 0;
var losses = 0;
var guessesLeft = 12;
var yourGuess = [];
var computerChoice;

// Start the game
playGame();

function playGame() {
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
	"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice);
    
    testUserInput();
    function testUserInput() {
        document.onkeyup = function (event) {
            var userChoice = String.fromCharCode(event.keyCode).toLowerCase();

            if (event.keyCode < 65 || event.keyCode > 90) {
                alert("Pick a letter");

            } else if (yourGuess.indexOf(userChoice) >= 0) {
                alert("You already guessed that!");

            } else if (userChoice === computerChoice) {

                alert("You're a psychic!")
                wins = wins + 1;
                document.getElementById("your-wins").innerHTML = wins;

                resetGame();

            } else {
                guessesLeft = guessesLeft - 1;

                document.getElementById("guesses-left").innerHTML = guessesLeft;
                yourGuess.push(userChoice);

                document.getElementById("your-guesses").innerHTML = yourGuess;

                noGuessesLeft();
            }
        }
    }
    function resetGame() {
        guessesLeft = 12;
        yourGuess = []; 
        document.getElementById("guesses-left").innerHTML = guessesLeft;
        document.getElementById("your-guesses").innerHTML = yourGuess; 
        playGame(); 

    }

    function noGuessesLeft() {
        if (guessesLeft === 0) {
            alert("YOU LOSE!");
            losses = losses + 1
            document.getElementById("your-losses").innerHTML = losses;

            resetGame();

        } else {
            testUserInput();
        }

    }

}