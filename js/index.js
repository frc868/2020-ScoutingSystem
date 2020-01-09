var compId = 0;
var compId = 0;
var teamNo = 0;
var matchNo = 0;
var preload = 0;
var moveStart = false;

var pcAutonBotScore = 0;
var pcAutonTopScore = 0;
var pcAutonInScore = 0;
var pcAutonBotAttempt = 0;
var pcAutonTopAttempt = 0;
var pcAutonInAttempt = 0;

var pcTeleopBotScore = 0;
var pcTeleopTopScore = 0;
var pcTeleopInScore = 0;
var pcTeleopBotAttempt = 0;
var pcTeleopTopAttempt = 0;
var pcTeleopInAttempt = 0;

var revolutionsCheck = false;
var colorCheck = false;
var limb = false;
var park = false;
var comments = "";


var auton = true;
var currentCounters = [];
var autonCounters = [document.getElementById("auton1"), document.getElementById("auton2"), document.getElementById("auton3"), document.getElementById("auton4"), document.getElementById("auton5")];
var teleopCounters = [document.getElementById("teleop1"), document.getElementById("teleop2"), document.getElementById("teleop3"), document.getElementById("teleop4"), document.getElementById("teleop5")];

function toggleMidgame() {
	console.log("toggled");
	auton = !auton;
	if (auton) {
		document.getElementById("autonRow").style.display = "block";
		document.getElementById("teleopRow").style.display = "none";
		currentCounters = autonCounters;
	}
	else {
		document.getElementById("autonRow").style.display = "none";
		document.getElementById("teleopRow").style.display = "block";
		currentCounters = teleopCounters;
	}
}

function counterClick(clickedId) {
	switch (clickedId) {
		case "buttonUp1":
			if (auton) {
				var test = document.getElementById('auton1');
				var number = test.innerHTML;
				number++;
				test.innerHTML = number;
			} else {
				var test = document.getElementById('teleop1');
				var number = test.innerHTML;
				number++;
				test.innerHTML = number;
			}
			break;
			
		case "buttonUp2":
			if (auton) {
				var test = document.getElementById('auton2');
				var number = test.innerHTML;
				number++;
				test.innerHTML = number;
			} else {
				var test = document.getElementById('teleop2');
				var number = test.innerHTML;
				number++;
				test.innerHTML = number;
			}
			break;
			
		case "buttonUp3":
			if (auton) {
				var test = document.getElementById('auton3');
				var number = test.innerHTML;
				number++;
				test.innerHTML = number;
			} else {
				var test = document.getElementById('teleop3');
				var number = test.innerHTML;
				number++;
				test.innerHTML = number;
			}
			break;
		
		case "buttonUp4":
			if (auton) {
				var test = document.getElementById('auton4');
				var number = test.innerHTML;
				number++;
				test.innerHTML = number;
			} else {
				var test = document.getElementById('teleop4');
				var number = test.innerHTML;
				number++;
				test.innerHTML = number;
			}
			break;
			
		case "buttonUp5":
			if (auton) {
				var test = document.getElementById('auton5');
				var number = test.innerHTML;
				number++;
				test.innerHTML = number;
			} else {
				var test = document.getElementById('teleop5');
				var number = test.innerHTML;
				number++;
				test.innerHTML = number;
			}
			break;
			
		case "buttonDown1":
			if (auton) {
				var test = document.getElementById('auton1');
				var number = test.innerHTML;
				number--;
				test.innerHTML = number;
			} else {
				var test = document.getElementById('teleop1');
				var number = test.innerHTML;
				number--;
				test.innerHTML = number;
			}
			break;
			
		case "buttonDown2":
			if (auton) {
				var test = document.getElementById('auton2');
				var number = test.innerHTML;
				number--;
				test.innerHTML = number;
			} else {
				var test = document.getElementById('teleop2');
				var number = test.innerHTML;
				number--;
				test.innerHTML = number;
			}
			break;
			
		case "buttonDown3":
			if (auton) {
				var test = document.getElementById('auton3');
				var number = test.innerHTML;
				number--;
				test.innerHTML = number;
			} else {
				var test = document.getElementById('teleop3');
				var number = test.innerHTML;
				number--;
				test.innerHTML = number;
			}
			break;
			
		case "buttonDown4":
			if (auton) {
				var test = document.getElementById('auton4');
				var number = test.innerHTML;
				number--;
				test.innerHTML = number;
			} else {
				var test = document.getElementById('teleop4');
				var number = test.innerHTML;
				number--;
				test.innerHTML = number;
			}
			break;
			
		case "buttonDown5":
			if (auton) {
				var test = document.getElementById('auton5');
				var number = test.innerHTML;
				number--;
				test.innerHTML = number;
			} else {
				var test = document.getElementById('teleop5');
				var number = test.innerHTML;
				number--;
				test.innerHTML = number;
			}
			break;
	}
}

var autonVars = [pcAutonBotScore, pcAutonTopScore, pcAutonInScore, pcAutonBotAttempt, pcAutonTopAttempt, pcAutonInAttempt];
var teleopVars = [pcTeleopBotScore, pcTeleopTopScore, pcTeleopInScore, pcTeleopBotAttempt, pcTeleopTopAttempt, pcTeleopInAttempt];


//Endgame (THIS YEAR)
function renPoint() {
	document.getElementById('climbA').disabled = false;
	if (document.getElementById('ren').checked == false) {
		document.getElementById('climbA').disabled = true;
		document.getElementById('climbS').disabled = true;
		document.getElementById('climbF').disabled = true;
		document.getElementById('climbA').checked = false;
		document.getElementById('climbS').checked = false;
		document.getElementById('climbF').checked = false;
	}
}
function climbAttempt() {
	document.getElementById('climbS').disabled = false;
	document.getElementById('climbF').disabled = false;
	if (document.getElementById('climbA').checked == false) {
		document.getElementById('climbS').disabled = true;
		document.getElementById('climbF').disabled = true;
		document.getElementById('climbS').checked = false;
		document.getElementById('climbF').checked = false;
	}
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