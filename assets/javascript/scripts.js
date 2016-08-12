// 	To do
// 	Choose difficulty (easy/hard)
// 	

//Initialize variables
function initialize() {
	wordBeingPlayed = "";
	var opponentChoice;
	var playerWins = 0;
	var playerLosses = 0;
	var choiceArray = ["archery","athletics","badminton","baseball","basketball","basque pelota","boxing","canoeing","cricket","croquet","cycling","diving","equestrian","fencing","field hockey","football","golf","gymnastics","handball","jeu de paume","judo","kayaking","lacrosse","pentathlon","polo","racquets","rhythmic gymnastics","roque","rowing","rugby","sailing","shooting","softball","swimming","synchronized swimming","table tennis","taekwondo","tennis","trampoline","triathlon","tug of war","volleyball","water motorsports","water polo","weightlifting","wrestling"];

	// 	Randomly select word for game from array
	randomNumber = Math.floor(Math.random() * choiceArray.length);
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
	tempWordBeingPlayed = "";
	//Force lowercase
	letterPlayed = String.fromCharCode(event.keyCode).toLowerCase();
	// Compare against word
	for (k = 0; k < currentWord.length; k++) {
		// console.log("Word is " + currentWord + " letterPlayed is " + letterPlayed + " currentWord is " + currentWord);
		if (letterPlayed == currentWord[k]) {
			tempWordBeingPlayed += letterPlayed;
			console.log("Match! tempWordBeingPlayed is " + tempWordBeingPlayed);
		}
		 else if (wordBeingPlayed[k] != "_") {
			tempWordBeingPlayed += wordBeingPlayed[k];
			console.log("Already selected! tempWordBeingPlayed is " + tempWordBeingPlayed);
		} else {
			tempWordBeingPlayed += "_";
			console.log("Blank space! tempWordBeingPlayed is " + tempWordBeingPlayed);
		}

		document.getElementById("wordstatus").innerHTML	= tempWordBeingPlayed;
			//check if current letter in currentWord is already answered
				//add letter to variable
			//check if current letter matches the letter selected
				//add letter to variable
			//write completed word to DOM
			// document.getElementById("wordstatus").innerHTML	+= "_ ";
	}

	// 		Insert that letter where ever it occurs
	// 			Did that complete the word? If so, WIN!
	// 			Did that lose the game? If so, LOSE!
	// 		Display letter in "already used" bin
	
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