var compId = 0;
var teamNo = 0;
var matchNo = 0;
var preload = 0;
var moveStart = false;

var pcAutonBotScore = 0;
var pcAutonOutScore = 0;
var pcAutonInScore = 0;
var pcAutonBotMiss = 0;
var pcAutonTopMiss = 0;
var pcAutonInitiationLine = false;

var pcTeleopBotScore = 0;
var pcTeleopOutScore = 0;
var pcTeleopInScore = 0;
var pcTeleopBotMiss = 0;
var pcTeleopTopMiss = 0;

var revolutionsCheck = false;
var colorCheck = false;
var climb = null;
var park = false;
var comments = "";
var generatorLevel = false;
var noClimb = 0;
var yellow;
var red = false;
var lostComms = false;
var disabled = false;


var auton = true;
var currentCounters = [];
var autonCounters = [document.getElementById("auton1"), document.getElementById("auton2"), document.getElementById("auton3"), document.getElementById("auton4"), document.getElementById("auton5")];
var teleopCounters = [document.getElementById("teleop1"), document.getElementById("teleop2"), document.getElementById("teleop3"), document.getElementById("teleop4"), document.getElementById("teleop5")];

//Setting the variables to what they are at the end of the match
function setVars() {
	pcAutonBotScore = document.getElementById("auton4").innerHTML;
	pcAutonOutScore = document.getElementById("auton2").innerHTML;
	pcAutonInScore = document.getElementById("auton1").innerHTML;
	pcAutonBotMiss = document.getElementById("auton5").innerHTML
	pcAutonTopMiss = document.getElementById("auton3").innerHTML;
	
	pcTeleopBotScore = document.getElementById("teleop4").innerHTML;
	pcTeleopOutScore = document.getElementById("teleop2").innerHTML;
	pcTeleopInScore = document.getElementById("teleop1").innerHTML;
	pcTeleopBotMiss = document.getElementById("teleop5").innerHTML
	pcTeleopTopMiss = document.getElementById("teleop3").innerHTML;
	

	matchNo = document.getElementById("matchType").innerHTML;
	teamNo = document.getElementById("number").innerHTML;
	park = document.getElementById("ren").checked;
	climb = document.getElementById("climbS").checked;
	generatorLevel = document.getElementById("level").checked;
	noClimb = document.getElementById("roboClimb").value;
	yellow = document.getElementById("yellowCard").checked;
	red = document.getElementById("redCard").checked;
	lostComms = document.getElementById("lostCommunication").checked;
	disabled = document.getElementById("disabled").checked;

	console.log("pcAutonBotScore" + pcAutonBotScore);
	console.log("pcAutonOutScore" + pcAutonOutScore);
	console.log("pcAutonInScore" + pcAutonInScore);
	console.log("pcAutonBotMiss" + pcAutonBotMiss);
	console.log("pcAutonTopMiss" + pcAutonTopMiss);
	console.log("pcTeleopBotScore" + pcTeleopBotScore);
	console.log("pcTeleopOutScore" + pcTeleopOutScore);
	console.log("pcTeleopInScore" + pcTeleopInScore);
	console.log("pcTeleopBotMiss" + pcTeleopBotMiss);
	console.log("pcTeleopTopMiss" + pcTeleopTopMiss);
	console.log("matchNo" + matchNo);
	console.log("teamNo" + teamNo);
	console.log("park" + park);
	console.log("climb" + climb);
	console.log("generatorLevel" + generatorLevel);
	console.log("noClimb" + noClimb);
	console.log("yellow" + yellow);
	console.log("red" + red);
	console.log("lostComms" + lostComms);
	console.log("disabled" + disabled);

}

//Allows the toggle button to change the midgame tab from tele-op to auton
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

//Makes it so that the +1 buttons in the midgame tab change the correct number
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
				
				if (number < 0) {
			    test.innerHTML = 0;
			  }
			} else {
				var test = document.getElementById('teleop1');
				var number = test.innerHTML;
				number--;
				test.innerHTML = number;
				
				if (number < 0) {
			    test.innerHTML = 0;
			  }
			}
			break;
			
		case "buttonDown2":
			if (auton) {
				var test = document.getElementById('auton2');
				var number = test.innerHTML;
				number--;
				test.innerHTML = number;
				
				if (number < 0) {
			    test.innerHTML = 0;
			  }
			} else {
				var test = document.getElementById('teleop2');
				var number = test.innerHTML;
				number--;
				test.innerHTML = number;
				
				if (number < 0) {
			    test.innerHTML = 0;
			  }
			}
			break;
			
		case "buttonDown3":
			if (auton) {
				var test = document.getElementById('auton3');
				var number = test.innerHTML;
				number--;
				test.innerHTML = number;
				
				if (number < 0) {
			    test.innerHTML = 0;
			  }
			} else {
				var test = document.getElementById('teleop3');
				var number = test.innerHTML;
				number--;
				test.innerHTML = number;
				
				if (number < 0) {
			    test.innerHTML = 0;
			  }
			}
			break;
			
		case "buttonDown4":
			if (auton) {
				var test = document.getElementById('auton4');
				var number = test.innerHTML;
				number--;
				test.innerHTML = number;
				
				if (number < 0) {
			    test.innerHTML = 0;
			  }
			} else {
				var test = document.getElementById('teleop4');
				var number = test.innerHTML;
				number--;
				test.innerHTML = number;
				
				if (number < 0) {
			    test.innerHTML = 0;
			  }
			}
			break;
			
		case "buttonDown5":
			if (auton) {
				var test = document.getElementById('auton5');
				var number = test.innerHTML;
				number--;
				test.innerHTML = number;
				
				if (number < 0) {
			    test.innerHTML = 0;
			  }
			} else {
				var test = document.getElementById('teleop5');
				var number = test.innerHTML;
				number--;
				test.innerHTML = number;
				
				if (number < 0) {
			    test.innerHTML = 0;
			  }
			}
			break;
	}
}


//Endgame

//Makes it so that the climb attempt is enabled when rendezvos point is checked and disabled when rendezvous point is not checked
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
//Makes it so that the success and failure buttons are enabled when climb attempt is checked and disabled when climb attempt is not checked
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
function climbS() {
	document.getElementById('climbF').checked = false;
}
function climbF() {
	document.getElementById('climbS').checked = false;
}
//Disables the submit button unless there is a team and match number
function subButton() {
	if (document.getElementById('matchType').value == 0 || document.getElementById('number').value == 0) {
		document.getElementById('buttonSubmit').disabled = true;
	}
	else {
		document.getElementById('buttonSubmit').disabled = false;
	}
}
//Sets the value of preload to the selected number of preloaded cells
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