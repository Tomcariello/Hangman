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
var alphabet = ["a","b","c","d","e","f","g","h','i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var opponentChoice;
var choiceArray = ["archery","athletics","badminton","baseball","basketball","basque pelota","boxing","canoeing","cricket","croquet","cycling","diving","equestrian","fencing","field hockey","football","golf","gymnastics","handball","judo","kayaking","lacrosse","pentathlon","polo","racquets","rhythmic gymnastics","roque","rowing","rugby","sailing","shooting","softball","swimming","synchronized swimming","table tennis","taekwondo","tennis","trampoline","triathlon","tug of war","volleyball","water motorsports","water polo","weightlifting","wrestling"];


function initialize() {

	// 	Randomly select word for game from array
	var randomNumber = Math.floor(Math.random() * choiceArray.length);
	currentWord = choiceArray[randomNumber];
	console.log(currentWord);
	guesses = 0;
	lettersGuessed = [];

	// Display underscores indicating word length
	for (i = 0; i < currentWord.length; i++) {
		j = i;
		while (j == 0) {
			wordBeingPlayed = "";
			j++;
		}
		if (currentWord[i] == " ") {
			wordBeingPlayed += " ";	
		}
		wordBeingPlayed += "_";
	}

	document.getElementById("wordstatus").innerHTML	= wordBeingPlayed;
}


function newGame() {
	initialize();
	clearLetters();
	updateBoardImage();
}


// 	Capture user guess
document.onkeypress = function(event) {
	//wordBeingPlayed is the visual given to the player
	//currentWord is the actual word

	tempWordBeingPlayed = "";
	var matchedGuess = false;
	//Force lowercase
	letterPlayed = String.fromCharCode(event.keyCode).toLowerCase();
	// Compare against word
	for (k = 0; k < currentWord.length; k++) {
		// console.log("Word is " + currentWord + " letterPlayed is " + letterPlayed + " currentWord is " + currentWord);
		if (letterPlayed == currentWord[k]) {
			tempWordBeingPlayed += letterPlayed;
			// console.log("Match! tempWordBeingPlayed is " + tempWordBeingPlayed);
			matchedGuess = true;
			totalMatchedGuesses++;
		}
		 else if (wordBeingPlayed[k] != "_") {
			tempWordBeingPlayed += wordBeingPlayed[k];
			// console.log("Already selected! tempWordBeingPlayed is " + tempWordBeingPlayed);
		} else {
			tempWordBeingPlayed += "_";
			// console.log("Blank space! tempWordBeingPlayed is " + tempWordBeingPlayed);
		}
		document.getElementById("wordstatus").innerHTML	= tempWordBeingPlayed;

	}
	wordBeingPlayed = tempWordBeingPlayed;

	// 		Display letter in "already used" bin
	if (matchedGuess == true) {
		lettersGuessed.push(letterPlayed);
		printLetters();
		updateBoardImage();
		wordComplete();
	}
	
	if (matchedGuess == false) {
		checkValidSelection(letterPlayed);

	}
	
}


function checkValidSelection(letter) {
	//check if letter already guessed
	for (j=0; j <lettersGuessed.length; j++) {
		if (letter == lettersGuessed[j]) {
			return;
		} 
	}

	//check letter is a-z
	for (i=0; i < alphabet.length; i++) {
		if (letter == alphabet[i]) {
			guesses++;
			lettersGuessed.push(letter);
		}
	}
	printLetters();
	updateBoardImage();	
}


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
	if (theme=="traditional") {
		var imagePath = "assets/images/traditionaleasy/" + guesses + ".png";
		if (guesses < 9) {
			document.getElementById("imagedisplayed").src=imagePath;
		} else if (guesses == 9) {
			document.getElementById("imagedisplayed").src="assets/images/traditionaleasy/9.png";
			playerLosses++;
			updateScoreboard("lose");
		}
	} else if (theme=="dark" && guesses <= 6) {
		console.log("changing to dark");
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
	} else if (gameStatus == "lose") {
		alert("You lose!");
	}

	document.getElementById("scoreboard").innerHTML = "<p>Player wins: " + playerWins + "</p><p>Player Losses:" + playerLosses + "</p>";
}

function printLetters() {
	for (i = 0; i < lettersGuessed.length; i++) {
		if (i == 0) {
			document.getElementById("usedletters").innerHTML = lettersGuessed[i];	
		} else {
		document.getElementById("usedletters").innerHTML += ", " + lettersGuessed[i];
	}
	}
}

function clearLetters() {
	document.getElementById("usedletters").innerHTML = "These are the letters that have been guessed" ;
}



//Choose between dark and traditional theme
function setTheme(themeSelected) {
	if (themeSelected == "theme1" && difficultySetting == "easy") {
		theme = "traditional";

		//aupdate pills
		document.getElementById("traditional").className = "active";
		document.getElementById("dark").className = "";

		//change graphic to traditional theme
		var imageValue = document.getElementById("imagedisplayed").src;
		
		//Isolate the current image number
		// var imageNumber = imageValue[imageValue.length-5];
		var imageToSet = "assets/images/traditionaleasy/" + (guesses)  + ".png"
		document.getElementById("imagedisplayed").src=imageToSet;
		
		//Display difficulty options #difficulty
		document.getElementById('difficulty').style.display = "inline-block";



	} else 	if (themeSelected == "theme1" && difficultySetting == "hard") {
		theme = "traditional";

		//aupdate pills
		document.getElementById("traditional").className = "active";
		document.getElementById("dark").className = "";

		//change graphic to traditional theme
		var imageValue = document.getElementById("imagedisplayed").src;
		
		//Isolate the current image number
		// var imageNumber = imageValue[imageValue.length-5];
		var imageToSet = "assets/images/traditionalhard/" + (guesses)  + ".png"
		document.getElementById("imagedisplayed").src=imageToSet;
		
		//Display difficulty options #difficulty
		document.getElementById('difficulty').style.display = "inline-block";




	} else if (themeSelected == "theme2") {
		if (guesses >= 6) {
			alert("You cannot change the theme at this point of the game because you already have 6 missed guesses.");
			return;
		}

		theme = "dark";
		
		//aupdate pills
		document.getElementById("traditional").className = "";
		document.getElementById("dark").className = "active";

		//change graphic to dark theme
		var imageValue = document.getElementById("imagedisplayed").src;
		
		//Isolate the current image number
		// var imageNumber = imageValue[imageValue.length-5];
		var imageToSet = "assets/images/dark/" + (guesses)  + ".png"
		document.getElementById("imagedisplayed").src=imageToSet;

		//hide difficulty options #difficulty
		document.getElementById('difficulty').style.display = "none";
	}
	// document.querySelector('#scoreboard').innerHTML = "Player wins: " + playerWins + "<Br><Br>CPU Wins: " +  "<Br><Br>Ties: ";
}


function setDifficulty(difficulty) {
	if (guesses >= 6) {
		alert("You cannot change the difficulty at this point of the game because you already have 6 missed guesses.");
		return;
	}

	if (difficulty == "easy") {
		difficultySetting = "easy";
		//aupdate pills
		document.getElementById("easy").className = "active";
		document.getElementById("hard").className = "";
	} else {
		difficultySetting = "hard";
		//aupdate pills
		document.getElementById("easy").className = "";
		document.getElementById("hard").className = "active";
	}

	setTheme("theme1");

}
