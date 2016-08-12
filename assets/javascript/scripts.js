document.onkeydown = function(event) {
	// tomTesting();
}

function tomTesting() {
	alert('Hello world');
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
	}
	if (themeSelected == "theme2") {
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

// 	Pseudocode

// 	Choose theme (traditional/dark)
// 	Choose difficulty (easy/hard)
// 	Randomly select word for game from array
// 	Display underscores indicating word length
// 	Capture user guess
// 		Force lowercase
// 		Compare against word
// 		Insert that letter where ever it occurs
// 			Did that complete the word? If so, WIN!
// 			Did that lose the game? If so, LOSE!
// 		Display letter in "already used" bin

// 	



// 	var opponentChoice;

// 	var playerWins = 0;
// 	var playerLosses = 0;
// 	var choiceArray = ["Archery","Athletics","Badminton","Baseball","Basketball","Basque pelota","Boxing","Canoeing","Cricket","Croquet","Cycling","Diving","Equestrian","Fencing","Field hockey","Football","Golf","Gymnastics","Handball","Jeu de paume","Judo","Kayaking","Lacrosse","list.txt","Pentathlon","Polo","Racquets","Rhythmic gymnastics","Roque","Rowing","Rugby","Sailing","Shooting","Softball","Swimming","Synchronized swimming","Table tennis","Taekwondo","Tennis","Trampoline","Triathlon","Tug of war","Volleyball","Water motorsports","Water polo","Weightlifting","Wrestling"];

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