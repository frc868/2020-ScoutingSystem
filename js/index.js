var primaryId;
‪var compId teamNo, matchNo, preload, moveStart, powercellsBotScore, powercellsTopScore, powercellsInScore, powercellsBotAttempt, powercellsTopAttempt, powercellsInAttempt, revolutionsCheck, colorCheck, climb, park, comments;
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

var auton = true;
var autonCounters = [document.getElementById("auton1"), document.getElementById("auton2"), document.getElementById("auton3"), document.getElementById("auton4"), document.getElementById("auton5")];
var teleopCounters = [document.getElementById("teleop1"), document.getElementById("teleop2"), document.getElementById("teleop3"), document.getElementById("teleop4"), document.getElementById("teleop5")];

function toggleMidgame() {
	auton = !auton;
	if (auton) {
		document.getElementById("autonRow").style.display = "none";
	}
}

var autonVars = [pcAutonBotScore, pcAutonTopScore, pcAutonInScore, pcAutonBotAttempt, pcAutonTopAttempt, pcAutonInAttempt];
var teleopVars = [pcTeleopBotScore, pcTeleopTopScore, pcTeleopInScore, pcTeleopBotAttempt, pcTeleopTopAttempt, pcTeleopInAttempt];


//Endgame (THIS YEAR)
function climbAttempt() {
	document.getElementById('climbS').disabled = false;
	document.getElementById('climbF').disabled = false;
}

function powerCellCounter0() {
	preload = document.getElementById('powerCell0').value;
}

function powerCellCounter1() {
	preload = document.getElementById('powerCell1').value;
}

function powerCellCounter2() {
	preload = document.getElementById('powerCell2').value;
}

function powerCellCounter3() {
	preload = document.getElementById('powerCell3').value;
}