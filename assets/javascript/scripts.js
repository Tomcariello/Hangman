//Initialize variables
var wordBeingPlayed = "";
var currentWord;
var guesses = 0;
var totalMatchedGuesses = 0;
var lettersGuessed = [];
var playerWins = 0;
var playerLosses = 0;
var theme = "traditional";
var difficultySetting = "easy";
var imageToSet = 1;
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var opponentChoice;

//Start the game
function initialize() {

	guesses = 0;
	lettersGuessed = [];
	wordBeingPlayed = "";

	// 	Randomly select word for game from array
	var randomNumber = Math.floor(Math.random() * choiceArray.length);
	currentWord = choiceArray[randomNumber];

	//Remove this word from the array so it will not be selected again in this session
	choiceArray.splice(randomNumber, 1);

	// Display underscores indicating word length
	for (i = 0; i < currentWord.length; i++) {
		if (currentWord[i] == " ") {
			wordBeingPlayed += " ";	
		}
		wordBeingPlayed += "_";
	}

	//Replace any existing text with underscores
	document.getElementById("wordstatus").innerHTML	= wordBeingPlayed;
}

function newGame() {
	initialize(); //reset all game vars
	clearLetters(); //Clear scoreboard of guessed letters
	updateBoardImage(); //Change the image
}

//Capture keyboard presses
document.onkeypress = function(event) {
	//wordBeingPlayed is the visual given to the player
	//currentWord is the actual word

	tempWordBeingPlayed = "";
	var matchedGuess = false; //Will track if the guess was successful

	//Force the guess to be lowercase
	letterPlayed = String.fromCharCode(event.keyCode).toLowerCase();
	
	// Compare letter guessed against the word
	for (i = 0; i < currentWord.length; i++) {
		//If its a match
		if (letterPlayed == currentWord[i]) {
			tempWordBeingPlayed += letterPlayed; //Record the *letter*
			matchedGuess = true;
			totalMatchedGuesses++;
		//If its a non-letter character
		} else if (wordBeingPlayed[i] != "_") {
			tempWordBeingPlayed += wordBeingPlayed[i]; //recordthat character
		//This was an incorrect guess
		} else {
			tempWordBeingPlayed += "_"; //Record the underscore
		}
		//Print the resulting string
		document.getElementById("wordstatus").innerHTML	= tempWordBeingPlayed;
	}
	wordBeingPlayed = tempWordBeingPlayed;

	checkValidSelection(letterPlayed,matchedGuess);
	
	if (matchedGuess == true) {
		printLetters(); //Print scoreboard of guessed letters
		updateBoardImage(); //Change the image
		wordComplete(); //Check if word is completed
	}
}


function checkValidSelection(letter,matchStatus) {
	//check if letter already guessed
	for (i=0; i <lettersGuessed.length; i++) {
		if (letter == lettersGuessed[i]) {
			return;
		} 
	}

	//check letter is a-z
	for (i=0; i < alphabet.length; i++) {
		if (letter == alphabet[i]) {
			if (matchStatus == false) {
				guesses++;
			}
			lettersGuessed.push(letter);
		}
	}
	printLetters(); //Print scoreboard of guessed letters
	updateBoardImage();	//Change the image
}

//Check if the player has solved the puzzle
function wordComplete() {
	for (i=0; i < wordBeingPlayed.length; i++) {
		if (wordBeingPlayed[i] == "_") {
			return;
		} 
	}
	playerWins++;
	updateScoreboard("win");
}

//update graphic on board
function updateBoardImage() {
	//If gametype is traditional && easy
	if (theme=="traditional" && difficultySetting=="easy") {
		var imagePath = "assets/images/traditionaleasy/" + guesses + ".png";
		if (guesses < 9) {
			document.getElementById("imagedisplayed").src=imagePath;
		} else if (guesses == 9) {
			document.getElementById("imagedisplayed").src="assets/images/traditionaleasy/9.png";
			playerLosses++;
			updateScoreboard("lose");
		}
	} else if (theme=="traditional" && difficultySetting=="hard") {
		var imagePath = "assets/images/traditionalhard/" + guesses + ".png";
		if (guesses < 6) {
			document.getElementById("imagedisplayed").src=imagePath;
		} else if (guesses == 6) {
			document.getElementById("imagedisplayed").src="assets/images/traditionalhard/6.png";
			playerLosses++;
			updateScoreboard("lose");
		}
	} else if (theme=="dark" && guesses <= 6) {
		var imagePath = "assets/images/dark/" + guesses + ".png";
		if (guesses < 6) {
			document.getElementById("imagedisplayed").src= imagePath;
		} else if (guesses == 6) {
			document.getElementById("imagedisplayed").src="assets/images/dark/6.png";
			playerLosses++;
			updateScoreboard("lose");
		}
	}
}

function updateScoreboard(gameStatus) {
	if (gameStatus == "win") {
		alert("You win!");
		document.getElementById("numberOfWins").innerHTML = playerWins;
	} else if (gameStatus == "lose") {
		alert("You lose!");
		document.getElementById("numberOfLosses").innerHTML = playerLosses;
	}
	newGame();
}

function printLetters() {

	//Clear the letter area
	document.getElementById("usedletters").innerHTML = "";

	// Iterate through the alphabet
	alphabet.forEach(function(letter){
		//If this letter has been guessed already, print with the proper class
		if (lettersGuessed.indexOf(letter) > -1) {
			document.getElementById("usedletters").innerHTML += "<div class='letterUsed'>" + letter + "</div>";
		} else { //If this letter has not been guessed
			document.getElementById("usedletters").innerHTML += "<div class='letterNotUsed'>" + letter + "</div>";
		}
	})
}

function clearLetters() {
	document.getElementById("usedletters").innerHTML = "Your guessed letters will be tracked here." ;
}

//Choose between dark and traditional theme
function setTheme(themeSelected) {
	//Traditional Theme
	if (themeSelected == "theme1") {
		
		//Set the theme variable
		theme = "traditional";

		//Update theme buttons
		document.getElementById("traditional").classList.remove("hideIcon");
		document.getElementById("dark").className = "hideIcon";
						
		//Isolate the proper image for this theme
		var imageToSet = "assets/images/traditional" + difficultySetting + "/" + (guesses)  + ".png"
		document.getElementById("imagedisplayed").src=imageToSet;
		
		//Display difficulty options
		document.getElementById('difficultyGroup').style.display = "inherit";

	} else if (themeSelected == "theme2") {
		if (guesses >= 6) {
			alert("You cannot change the theme at this point of the game because you already have 6 missed guesses.");
			return;
		}

		theme = "dark";
		
		//Update pills
		document.getElementById("traditional").className = "hideIcon";
		document.getElementById("dark").classList.remove("hideIcon");

		//Isolate the proper image for this theme
		var imageToSet = "assets/images/dark/" + (guesses)  + ".png"
		document.getElementById("imagedisplayed").src=imageToSet;

		//hide difficulty options #difficulty
		document.getElementById('difficultyGroup').style.display = "none";
	}
}

function setDifficulty(difficulty) {
	if (guesses >= 6) {
		alert("You cannot change the difficulty at this point of the game because you already have 6 missed guesses.");
		return;
	}

	if (difficulty == "easy") {
		difficultySetting = "easy";
		document.getElementById("easy").classList.remove("hideIcon");
		document.getElementById("hard").className = "hideIcon";
	} else {
		difficultySetting = "hard";
		document.getElementById("easy").className = "hideIcon";
		document.getElementById("hard").classList.remove("hideIcon");
	}

	setTheme("theme1");
}
