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
var choiceArray = ["abandoned","abilities","absent","accepted","according","accusations","accused","acting","activities","actually","adaptations","addition","address","adjustments","admired","adopted","advancements","advantage","advent","advertisements","advertisers","advertising","advertizing","affairs","affected","affecting","afghanistan","africa","african","afterwards","against","agency","agenda","agreement","agrees","alberta","albertville","alcohol","allegation","allegations","alleged","allocated","allowed","allowing","allows","almaty","almost","alongside","alphabetically","already","alternate","alternating","although","altius","amateur","amateurism","amateurs","america","american","americans","amount","amphetamines","analyzed","ancient","and/or","angeles","animal","announce","annual","annually","another","anthem","anthems","anthropological","antilles","antisemitism","antonio","antwerp","apart","apartheid","appeal","appeared","appears","applicant","applies","apply","approach","appropriation","approval","approved","approving","arabia","ardently","arenas","argued","argument","aristocracy","aristocratic","around","article","artistic","aruba","aruban","asian","asked","assemble","assets","associated","association","assurances","athens","athlete","athletic","atlanta","attacks","attain","attained","attempt","attend","attendance","attended","attending","attitude","attitudes","attract","attracted","attributed","audience","audiences","august","auspices","australia","austria","austrian","authority","available","avenue","averoff","avery","avoid","avoiding","awarded","awash","badge","badminton","bahiya","bahrain","banned","banning","barcelona","baron","barred","baseball","based","basis","basketball","bearer","became","because","becky","become","becoming","before","began","beginning","beginnings","begins","beijing","being","belgium","belief","believed","benchmark","benefit","benefits","benevolent","berlin","bermuda","bernard","bertrand","better","between","bicycle","bidding","bigger","biggest","billion","birthplace","black","blair","bless","blood","blunted","board","bodies","bombing","boost","bourgeois","boxers","boxing","boycott","boycotted","boycotting","boycotts","brand","breaking","bribe","bribery","bribes","briefly","britain","british","broad","broadcast","broadcasting","broken","bronze","brookes","brought","brundage","brunei","budget","built","business","buying","cable","cafeterias","calgary","called","callousness","calls","cambodia","campaign","campden","canada","canadian","cancel","cancellation","cancelled","candidate","candidates","candidature","capacity","capital","capture","carlos","carried","carrier","carry","cartoon","cases","cáslavská","category","cauldron","caused","celebrate","celebrated","celebration","celebrations","centennial","centre","centuries","century","ceremonies","ceremony","certain","certainty","certificates","cessation","chair","chairman","challenges","chamonix","champion","champions","chance","change","changed","changes","changing","channels","charge","charged","chariot","charles","charlotte","charter","chauvinistic","cheating","cheers","chess","china","chinese","chipping","chirac","choose","choosing","chosen","cited","cities","citing","citius","citizen","citizens","citizenship","civil","claimed","class","cleared","clinics","closed","closing","coach","coffers","coincide","coined","colonial","colonialism","colonies","color","colored","colors","columbia","combat","combined","coming","commemorative","commercial","commercialization","commercialized","commission","committee","committee","committees","commodification","commonly","communist","communities","community","companies","compared","compassionate","compete","compete","competition","competitor","competitors","complemented","complete","completed","completion","complexity","comply","comprising","compromise","conceded","conceived","concept","concern","concerned","concessions","concluded","conditions","conflict","conflicts","congress","connected","connection","conquered","consensus","consequently","consideration","considered","consisting","consists","constitute","constitution","constitutional","construction","contain","contending","content","contents","contested","continents","continue","continued","continues","continuing","continuity","contract","contracted","contracts","contributed","contributions","control","controls","controversial","controversially","controversies","controversy","conversely","cooper","coroebus","corporate","corporations","corpore","corresponding","corruption","costing","costs","cotswold","coubertin","could","council","counter","countered","counterpart","countries","country","country","cousin","covert","create","created","creation","creed","crisis","criteria","criticism","criticized","critics","crystal","cults","cultural","culture","curaçao","current","currently","custom","customary","cycle","cyclist","czechoslovakia","dance","daniel","danish","deadline","death","decades","decathlon","december","decided","decision","declined","decreed","defeated","defended","defining","definition","defrantz","degrees","delanoë","delegation","delegation","delegations","delivered","demand","demanded","demetrius","demonstration","dependencies","depending","describe","describing","designated","desire","desired","despite","destruction","detailed","detect","detection","determined","determines","detonated","development","devised","dialogue","dictate","didon","different","diplomas","diplomas","directly","director","disability","disadvantage","disadvantaged","disambiguation","disciplines","disciplines:","discovered","discriminating","discrimination","discus","displaced","display","displays","disproportionately","disputes","disqualifications","disqualified","disrupt","dissolved","distance","distinction","disturbances","divine","diving","documentary","documented","doing","domestic","dominican","doping","dover","drawn","dropped","drugs","drugs","during","earlier","early","earned","eastern","economic","economists","economy","edition","editor","education","effect","effects","effort","efforts","egypt","eight","either","elected","elements","elements:","eleven","eligible","eliminated","embodied","embraced","emerged","emigrated","emirates","emperor","emphasizing","empire","emulate","enable","enabled","encompass","encompasses","encroachment","ended","enemark","enforcement","engaged","england","english","enhancing","enshrine","enter","entered","enthusiastic","entire","entitled","envisioned","equal","equestrian","erasure","eroded","erroneous","erupted","especially","essential","establish","established","establishing","establishment","estimates","ethos","europe","european","evaluation","evangelos","event","eventing","events","every","evictions","evolution","evolved","example","examples","excellence","excess","excluded","exclusion","exclusive","executive","exemplified","exerted","exists","expand","expanded","expansion","expect","expected","expediting","expensive","experience","explore","explored","exponentially","exports","exposition","exposure","expressed","expression","expulsion","external","extinguished","facilitate","facilities","factors:","failed","fairness","family","famous","fariba","faster","fatema","father","feature","featured","features","featuring","federation","fédération","federations","feeling","feels","female","fencing","festival","festivals","field","fielding","fifth","fifty","fight","figure","filled","final","finalists:","finally","finance","financially","finding","findings","finished","finisher","finishers","finland","first","flagbearer","flags","flame","floor","flown","focuses","followed","following","football","footrace","force","foremost","forerunner","forerunners","formally","format","formation","formed","former","forms","formulated","fortius","fought","found","foundation","founded","four","fourteen","fourth","frame","framework","france","france","franco","freestyle","french","french:","friend","friendship","fronts","fulfilling","fully","fundamental","funded","funding","funds","furnished","further","furthermore","future","gained","gains","games","gather","gathered","gathering","gender","general","generate","generated","generating","generously","gentleman","gentlemen","george","georgia","gerashi","german","germany","ghost","gilded","given","global","gold","golf","goods","governed","governing","government","governments","governs","gradually","grams","grand","grandfather","granted","great","greater","greatly","greece","greek","green","ground","grounds","group","grouped","groups","growing","grown","growth","guarantee","guaranteeing","guarded","guardian","guards","guttmann","guyana","gymnast","gymnastics","hameed","hammon","handling","happened","having","headed","headquartered","headquarters","healing","health","heightened","helped","helsinki","henri","heracles","heritage","hicks","higher","hilli","himself","history","hobby","hockey","hodler","hoisted","hoisting","holding","holds","homogeneous","honor","honoring","horse","hospitals","hostage","hosted","hostilities","hosting","hosts","housed","housing","however","hulley","human","hungarian","hungary","hurdles","hysteria","ibolya","ideals","ideas","identical","identifies","identity","ideological","ideologies","ideology","ignites","image","imagines","immortalized","impact","importance","important","impossible","improve","improved","inappropriate","inaugural","inception","include","included","includes","including","inclusion","income","increase","increased","increasing","incurred","incurs","independence","independent","indian","indicated","indigenous","indistinguishable","individual","influence","influenced","information","information:","inhabited","initial","initiating","injured","innsbruck","inquiry","inscriptions","insensitivity","inside","insisted","inspecting","inspiration","inspired","instate","instead","institute","institution","integrated","intended","intensification","intentionally","intercalated","interest","interests","interlocking","internal","international","internationale","internationally","internet","intertwined","interview","interviewing","interviews","interwar","intractable","introduced","introduces","introduction","invasion","investigated","investigation","investments","involved","involvement","involving","iranian","ireland","irish","island","israel","israeli","issue","issues","isthmian","italy","itself","jacques","jamal","janeiro","japan","javelin","jensen","jeopardizing","jesse","jintao","jockeyed","johnson","joined","judge","judges","judoka","jumping","karate","kazakhstan","kenya","kenyan","killed","kingdom","kingdoms","knowledge","known","kodak","konstantinos","korea","krasnodar","labors","lagat","lands","language","languages","large","later","later","latifa","latin","latin:","lausanne","lawyer","leadership","leading","league","least","lebanon","legally","legend","legend","level","levelled","lewis","liberation","lights","likely","likewise","liljenwall","limited","linked","links","listing","lists","liverpool","lobby","local","locations","logistically","london","longer","losers","loudspeakers","louis","lower","lowest","lucrative","ludwig","luncheon","maarten","mahusin","mainly","maitha","major","majority","making","maktoum","manage","mandated","mandeville","marathon","mariam","marked","market","markets","maryam","mascot","massacre","match","maximum","mayor","maziah","meaning","meant","measure","measurement","medal","medal","medalist","medalists","medals","medals:","media","medium","meeting","melbourne","melly","member","members","membership","memorability","memory","mentioned","merchants","merely","message","meters","metre","metric","mexico","might","million","million","minister","miresmaeili","miresmaeli","mirror","misha","missouri","mixed","mixed:","modern","mohamed","moment","money","month","months","montreal","moreover","moritz","moscow","motto","mouthwash","movement","multiple","munich","muqimyar","murdered","music","mystery","mythical","myths","nadzeya","nagano","named","namely","narrowly","natalia","nation","national","nationality","nationals","nations","nature","nearly","needed","negative","neglect","negotiate","negotiating","neither","nemean","nepotism","netherlands","never","nevertheless","newly","newspaper","nights","nomination","nongovernmental","nonprofit","nordic","norman","north","norway","notable","notably","noted:","notes","november","number","numbers","numerous","objects","observed","obsolete","occasion","occasions","occur","occurred","occurring","occurs","oceania","ocogs","october","oenomaus","offenses","offering","office","officer","official","officially","officials","offseason","often","olimpick","olive","olympia","olympiad","olympiads","olympian","olympians","olympic","olympics","olympics:","olympiques","ongoing","onward","opening","openness","operation","opponents","opportunities","opportunity","opted","order","ordered","organising","organization","organizations","organized","organizes","organizing","origin","original","originally","origins","ossetia","ostapchuk","other","others","ottoman","outcast","outdated","outlasts","outlook","outset","outside","overall","overseeing","overview","overweight","owens","pacific","paderina","pagan","palace","palestinian","panagiotis","panathenaic","panathinaiko","panhellenic","pankration","panorama:","parabolic","parade","parallel","paralympic","paralympics","paris","parisian","participants","participate","participated","participating","participation","particular","parties","partners","party","passed","passes","payment","peace","pelops","penny","pentathlete","pentathlon","people","peoples","percent","percentage","performance",,"performed","performer","period","perished","permanent","permanently","permitted","persist","person","peter","phase","phased","phases","phidias","philanthropic","philanthropist","pictured","pierre","pilgrims","pisatis","pistol","place","places","placid","placing","planners","planning","platform","played","played:","player","players","plays","podium","poems","point","poland","police","policies","political","politics","popular","popularity","portion","portray","position","positive","possible","postage","posthumously","postponed","potential","potentially","powder","power","practiced","practices","practicing","predecessor","preparation","present","presentation","presentations","presented","presents","presidency","president","presidential","pressure","prevailing","prevent","prevented","previous","previously","priest","priestess","primarily","prime","prior","prize","prizes","proceed","process","proclamation","product","production","products","professional","professionalism","professionally","professionals","profits","progenitors","program","programme","programs","project","prominent","promote","promoted","promotion","proposal","proposals","proposed","prospective","protected","protest","protests","provide","provided","provides","public","publications","publicity","publicized","published","puerto","pursued","putin","putter","pythian","qatar","qualified","qualify","quebec","questionnaire","questionnaires","quickly","race","racing","racism","radio","raised","rapidly","rather","ratings","ravenstein","rays","reached","reaches","reading","reasons","rebounded","receipt","receive","received","receiving","recent","recognized","recommended","reconstruction","record","records","recouped","redirects","reduce","reduced","references","referred","reflects","reforms","refurbishment","refusal","refused","regarding","regime","regimen","regimes","region","regularly","regulate","regulations","rehabitation","reich","rejected","related","relatively","relay","relays","released","religious","reluctant","relying","remained","renounce","replaced","report","reported:","reportedly","reports","represent","representative","representatives","represented","representing","represents","repression","republic","république","required","requirements","requires","research","resignation","resistance","resisted","respective","respectively","responded","response","responsible","restoration","restored","restricted","result","resulted","resulting","results","retired","retirement","return","returned","returning","revenue","reviewed","reviewing","revision","revisions","revival","reviving","revoked","revolutionary","rezayee","rhodesia","rhythmic","right","rights","rings","ritual","rituals","rival","robert","robina","rodríguez","rogge","roller","romans","rostrum","rotated","rotating","roughly","rudolph","rugby","rules","ruling","runner","running","russia","russian","sacrifices","safety","salukvadze","salute","samaranch","sanctuary","satellites","saturation","saudi","saying","scale","scandal","scandals","scene","scheduled","scholarly","school","schools","scope","sebastian","second","sector","security","seems","segment","segregationist","select","selected","selecting","selection","selects","selling","semifinal","sending","sends","senior","sentence","sentiments","seoul","separate","september","served","services","serving","session","seven","seventh","several","shaded","shared","sharp","shift","shifted","shooter","shooting","short","shorter","shortly","should","showcase","showing","shown","shows","shropshire","shrouded","signal","signed","significant","significantly","signs","silence","silver","similar","since","singapore","singing","single","sites","sixth","skating","skeptical","skiers","skiing","slovakia","small","smaller","smith","sochi","social","socialist","society","softball","soldiers","solid","sometimes","sought","sound","source","sources","south","southern","soutsos","sovereignty","soviet","soviets","spain","spartakiads","speaking","special","specialized","specific","specifically","spectacle","spectacles","spectators","speeches","speed","spent","spoke","spoken","sponsor","sponsored","sponsors","sponsorship","sponsorships","sport","sporting","sports","sprinter","square","squash","stadion","stadium","stadiums","stage","staged","stagnation","stamp","stand","standard","stanozolol","stardom","start","started","starting","starts","state","stated","statement","states","statistics","statue","statues","status","statuses","steps","still","stirrings","stockholm","stoke","stood","straight","stream","strict","stripped","strong","stronger","strongly","structure","struggle","strychnine","stubborn","studios","study","subject","submission","submit","submits","subscribed","subsequent","subsequently","substance","substances","succeeded","success","successful","successive","successor","suggested","suggests","summed","summer","superiority","superpower","superpowers","supervise","supervisors","support","supported","supremacy","surfing","surplus","survival","suspended","suspension","suspicion","sweden","swedish","swelled","swimming","swiss","switzerland","sydney","symbol","symbolism","symbols","synchronized","system","systematic","systematize","tables","taekwondo","taipei","taiwan","taken","takes","taking","tangible","tantamount","targets","tasked","teachers","teams","technical","technological","teenage","televised","television","temple","temples","temporary","tenure","terms","territories","terrorism","terrorist","terrorists","tested","testing","tests","theater","theft","their","themselves","theodosius","there","thereafter","thereby","therefore","these","thing","third","thirty","thomas","thoroughly","thorpe","those","though","thousand","thousands","threat","threaten","threatened","three","through","throughout","throws","tibetan","tickets","time:","times","together","tokyo","tommie","topics","torch","toured","tournament","toward","towards","track","trade","tradition","traditional","traditionally","training","transfers","traveling","travelling","triumph","truce","trust","trying","turin","turmoil","turned","twelve","twenty","twice","typically","ueberroth","ultimately","umbrella","unable","uncovered","under","understand","unduly","unfair","union","united","units","unity","universality","university","unknown","unmolested","unpatriotic","unprecedented","until","updating","upheld","upholding","uprising","urine","using","usually","vancouver","variations","variety","various","venue","venues","version","victories","victory","video","viewers","viewership","vikelas","village","violation","violence","visit","visualization","volleyball","volunteering","voted","voting","waiting","walked","wanted","wares","warring","watched","watershed","wealthy","weight","weightlifting","wenlock","western","where","whereas","whether","which","while","whipped","white","whole","wholly","widely","william","winner","winners","winning","winter","wished","withdraw","withdrawal","withdrew","within","without","witness","woman","women","workers","world","worldwide","would","wreaths","wrestling","writer","written","wrote","years","yellow","yielding","youth","zappas","zealand","zenith"];


function initialize() {

	// 	Randomly select word for game from array
	var randomNumber = Math.floor(Math.random() * choiceArray.length);
	currentWord = choiceArray[randomNumber];
	choiceArray.splice(randomNumber, 1);
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
		// lettersGuessed.push(letterPlayed);
		checkValidSelection(letterPlayed,"true");
		printLetters();
		updateBoardImage();
		wordComplete();
	}
	
	if (matchedGuess == false) {
		checkValidSelection(letterPlayed,"false");

	}
	
}


function checkValidSelection(letter,matchStatus) {
	//check if letter already guessed
	for (j=0; j <lettersGuessed.length; j++) {
		if (letter == lettersGuessed[j]) {
			return;
		} 
	}

	//check letter is a-z
	for (i=0; i < alphabet.length; i++) {
		if (letter == alphabet[i]) {
			if (matchStatus == "false") {
				guesses++;
			}
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
		// console.log("changing to dark");
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
		newGame();
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



	} else if (themeSelected == "theme1" && difficultySetting == "hard") {
		theme = "traditional";

		//update pills
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
