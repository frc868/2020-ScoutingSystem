var primaryId;
‪var compId, teamNo, matchNo, preload, moveStart, powercellsBotScore, powercellsTopScore, powercellsInScore, powercellsBotAttempt, powercellsTopAttempt, powercellsInAttempt, revolutionsCheck, colorCheck, climb, park, comments;
‪compId = 0;
teamNo = 0;
matchNo = 0;
preload = 0;
moveStart = false;
powercellsBotScore = 0;
powercellsTopScore = 0;
‪powercellsInScore = 0;
‪powercellsBotAttempt = 0;
‪powercellsTopAttempt = 0;
‪powercellsInAttempt = 0;
‪revolutionsCheck = false;
‪colorCheck = false;
‪climb = false;
‪park = false;

var counters = [document.getElementById("counter1"), document.getElementById("counter2"), document.getElementById("counter3"), document.getElementById("counter4"), document.getElementById("counter5")]


//Endgame (THIS YEAR)
function climbAttempt() {
	document.getElementById('climbS').disabled = false;
	document.getElementById('climbF').disabled = false;
} 