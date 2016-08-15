// 	To do
// 	Choose difficulty (easy/hard)
// 	

//Initialize variables
var wordBeingPlayed = "";
var currentWord;
var guesses = 0;
var totalMatchedGuesses = 0;
var lettersGuessed = [];
var playerWins = 0;
var playerLosses = 0;


function initialize() {
	var opponentChoice;
	var choiceArray = ["archery","athletics","badminton","baseball","basketball","basque pelota","boxing","canoeing","cricket","croquet","cycling","diving","equestrian","fencing","field hockey","football","golf","gymnastics","handball","jeu de paume","judo","kayaking","lacrosse","pentathlon","polo","racquets","rhythmic gymnastics","roque","rowing","rugby","sailing","shooting","softball","swimming","synchronized swimming","table tennis","taekwondo","tennis","trampoline","triathlon","tug of war","volleyball","water motorsports","water polo","weightlifting","wrestling"];

	// 	Randomly select word for game from array
	var randomNumber = Math.floor(Math.random() * choiceArray.length);
	currentWord = choiceArray[randomNumber];
	console.log(currentWord);

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

// 	Capture user guess
document.onkeydown = function(event) {
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
		printLetters();
		updateBoardImage();
		wordComplete();
	}
	
	if (matchedGuess == false) {
		guesses++;
		printLetters();
		updateBoardImage();	
	}
	
}

function wordComplete() {
	for (i=0; i < wordBeingPlayed.length; i++) {
		if (wordBeingPlayed[i] == "_") {
			console.log(wordBeingPlayed[i]);
			return;
		} 
	}
	playerWins++;
	updateScoreboard("win");
}


//update graphic on board
function updateBoardImage() {
	//If gametype is traditional && easy
	if (guesses == 1) {
		document.getElementById("imagedisplayed").src="assets/images/traditionaleasy/1.png";
	} else if (guesses == 2) {
		document.getElementById("imagedisplayed").src="assets/images/traditionaleasy/2.png";
	} else if (guesses == 3) {
		document.getElementById("imagedisplayed").src="assets/images/traditionaleasy/3.png";
	} else if (guesses == 4) {
		document.getElementById("imagedisplayed").src="assets/images/traditionaleasy/4.png";
	} else if (guesses == 5) {
		document.getElementById("imagedisplayed").src="assets/images/traditionaleasy/5.png";
	} else if (guesses == 6) {
		document.getElementById("imagedisplayed").src="assets/images/traditionaleasy/6.png";
	} else if (guesses == 7) {
		document.getElementById("imagedisplayed").src="assets/images/traditionaleasy/7.png";
	} else if (guesses == 8) {
		document.getElementById("imagedisplayed").src="assets/images/traditionaleasy/8.png";
	} else if (guesses == 9) {
		document.getElementById("imagedisplayed").src="assets/images/traditionaleasy/9.png";
		playerLosses++;
		updateScoreboard("lose");
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
	lettersGuessed.push(letterPlayed);
	for (i = 0; i < lettersGuessed.length; i++) {
		if (i == 0) {
			document.getElementById("usedletters").innerHTML = lettersGuessed[i];	
		} else {
		document.getElementById("usedletters").innerHTML += ", " + lettersGuessed[i];
	}
	}
}



//Choose between dark and traditional theme
function setTheme(themeSelected) {
	if (themeSelected == "theme1") {
		//add active class to theme1 & remove active from theme2
		document.getElementById("traditional").className = "active";
		document.getElementById("dark").className = "";

		//change graphic to traditional theme
		var imageValue = document.getElementById("imagedisplayed").src;
		
		//Isolate the current image number
		var imageNumber = imageValue[imageValue.length-5];
		document.getElementById("imagedisplayed").src="assets/images/traditionaleasy/0.png";
		
		//Display difficulty options #difficulty
		document.getElementById('difficulty').style.display = "inline-block";
	} else if (themeSelected == "theme2") {
		//add active class to theme2 & remove active from theme1
		document.getElementById("traditional").className = "";
		document.getElementById("dark").className = "active";

		//change graphic to dark theme
		var imageValue = document.getElementById("imagedisplayed").src;
		
		//Isolate the current image number
		var imageNumber = imageValue[imageValue.length-5];
		document.getElementById("imagedisplayed").src="assets/images/dark/0.png";

		//hide difficulty options #difficulty
		document.getElementById('difficulty').style.display = "none";
	}
	// document.querySelector('#scoreboard').innerHTML = "Player wins: " + playerWins + "<Br><Br>CPU Wins: " +  "<Br><Br>Ties: ";
}






// 	// Captures Key Clicks
// 	document.onkeydown = function(event) {

// 		// Determines which exact key was selected. Make it lowercase
// 		opponentChoice = String.fromCharCode(event.keyCode).toLowerCase();
		
// 		console.log(opponentChoice);


// 		//randomly select choice for computer
// 		var computerChoice = ["rock", "paper", "scissors"];
// 		randomNumber = Math.floor(Math.random() * 3);
// 		computerPlay = computerChoice[randomNumber];
// 		console.log("Computer throws " + computerPlay);

// 		//compare selections:
// 		if (opponentChoice == computerPlay) {
// 			document.querySelector('#scoreboard').innerHTML = "It's a draw!<Br><Br>";
// 		} else if (opponentChoice == "rock" && computerPlay == "scissors") {
// 			document.querySelector('#scoreboard').innerHTML = "You throw rock and the CPU throws scissors...You win!<Br><Br>";
// 			playerWins++;
// 		} 

// 		//Scoreboard
// 		document.querySelector('#scoreboard').innerHTML = "Player wins: " + playerWins + "<Br><Br>CPU Wins: " +  "<Br><Br>Ties: ";
// 	}