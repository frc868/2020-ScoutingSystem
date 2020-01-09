var primaryId;
‪var compId, teamNo, matchNo, preload, moveStart, powercellsBotScore, powercellsTopScore, powercellsInScore, powercellsBotAttempt, powercellsTopAttempt, powercellsInAttempt, revolutionsCheck, colorCheck, climb, park, comments;
‪compId = 0;
teamNo = 0;
matchNo = 0;
preload = 0;
moveStart = false;

pcAutonBotScore = 0;
pcAutonTopScore = 0;
‪pcAutonInScore = 0;
‪pcAutonBotAttempt = 0;
‪pcAutonTopAttempt = 0;
‪pcAutonInAttempt = 0;

pcTeleopBotScore = 0;
pcTeleopTopScore = 0;
‪pcTeleopInScore = 0;
‪pcTeleopBotAttempt = 0;
‪pcTeleopTopAttempt = 0;
‪pcTeleopInAttempt = 0;

‪revolutionsCheck = false;
‪colorCheck = false;
‪climb = false;
‪park = false;

var counters = [document.getElementById("counter1"), document.getElementById("counter2"), document.getElementById("counter3"), document.getElementById("counter4"), document.getElementById("counter5")];
var autonVars = [pcAutonBotScore, pcAutonTopScore, pcAutonInScore, pcAutonBotAttempt, pcAutonTopAttempt, pcAutonInAttempt];
var teleopVars = [pcTeleopBotScore, pcTeleopTopScore, pcTeleopInScore, pcTeleopBotAttempt, pcTeleopTopAttempt, pcTeleopInAttempt];


//Endgame (THIS YEAR)
function climbAttempt() {
	document.getElementById('climbS').disabled = false;
	document.getElementById('climbF').disabled = false;
} 