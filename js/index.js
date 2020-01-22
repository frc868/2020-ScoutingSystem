var compId = 0;
var teamNo = 0;
var matchNo = 0;
var preload = 0;
var moveStart = 0;

var pcAutonBotScore = 0;
var pcAutonOutScore = 0;
var pcAutonInScore = 0;
var pcAutonBotMiss = 0;
var pcAutonTopMiss = 0;
var pcAutonInitiationLine = 0;

var pcTeleopBotScore = 0;
var pcTeleopOutScore = 0;
var pcTeleopInScore = 0;
var pcTeleopBotMiss = 0;
var pcTeleopTopMiss = 0;

var revolutionsCheck = 0;
var colorCheck = 0;
var defense = 0;

var climb = 0;
var park = 0;
var comments = "";
var generatorLevel = 0;
var noClimb = 0;
var yellow;
var red = 0;
var lostComms = 0;
var disabled = 0;
var fall = 0;
var climbPos = 0;
var comments = "";


var auton = 1;
var currentCounters = [];
var autonCounters = [document.getElementById("auton1"), document.getElementById("auton2"), document.getElementById("auton3"), document.getElementById("auton4"), document.getElementById("auton5")];
var teleopCounters = [document.getElementById("teleop1"), document.getElementById("teleop2"), document.getElementById("teleop3"), document.getElementById("teleop4"), document.getElementById("teleop5")];

function filterCheck() {
	document.getElementById("teamNoList").style.display = "block";
    
    if (document.getElementById("teamNo").value == "") {
    	document.getElementById("teamNoList").style.display = "none";
    }
}

function filterFunc() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("teamNo");
    filter = input.value.toUpperCase();
    ul = document.getElementById("teamNoList");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function numberClick(val) {
	document.getElementById("teamNo").value = val;
	document.getElementById("teamNoList").style.display = "none";
}

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
	

	matchNo = document.getElementById("matchNo").value;
	teamNo = document.getElementById("teamNo").value;
	park = (document.getElementById("ren").checked ? 1 : 0);
	climb = (document.getElementById("climbS").checked ? 1 : 0);
	generatorLevel = (document.getElementById("level").checked ? 1 : 0);
	noClimb = document.getElementById("roboClimb").value;
	climbPos = document.getElementById("generatorPos").value;
	
	yellow = (document.getElementById("yellowCard").checked ? 1 : 0);
	red = (document.getElementById("redCard").checked ? 1 : 0);
	lostComms = (document.getElementById("lostComm").checked ? 1 : 0);
	disabled = (document.getElementById("disabled").checked ? 1 : 0);
	
	revolutionsCheck = (document.getElementById("spinNumber").checked ? 1 : 0);
	colorCheck = (document.getElementById("spinColor").checked ? 1 : 0);
	defense = (document.getElementById("defense").checked ? 1 : 0);
	moveStart = (document.getElementById("initiationLine").checked ? 1 : 0);
	fall = (document.getElementById("fall").checked ? 1 : 0);
	
	comments += document.getElementById("comments").value;

	console.log(comments);
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
	
	var x = document.getElementById("teleOpButtons");
	var y = document.getElementById("autonButtons");
	if(auton){
		x.style.display = "none";
		y.style.display = "";
	} else{
		x.style.display = "";
		y.style.display = "none";
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
		document.getElementById("sGSlid").style.display = "none";
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
		document.getElementById("sGSlid").style.display = "none";
	}
}
function climbS() {
	document.getElementById('climbF').checked = false;
	document.getElementById("sGSlid").style.display = "block";
	if (document.getElementById('climbS').checked == false) {
		document.getElementById("sGSlid").style.display = "none";
	}
}
function climbF() {
	document.getElementById('climbS').checked = false;
	if (document.getElementById('climbS').checked == false) {
		document.getElementById("sGSlid").style.display = "none";
	}
}
//Disables the submit button unless there is a team and match number
function subButton() {
	var team = false;
	var match = false;
	if (document.getElementById('matchNo').value == 0) {
		document.getElementById('sub').disabled = true;
		document.getElementById('matchCheck').innerHTML = "Did not enter match number!";
	} else {
		document.getElementById('matchCheck').innerHTML = "";
		match  = true;
	}
	
	if (document.getElementById('teamNo').value == 0) {
		document.getElementById('sub').disabled = true;
		document.getElementById('teamCheck').innerHTML = "Did not enter team number!";
	} else {
		document.getElementById('teamCheck').innerHTML = "";
		team = true;
	}
	
	/* if (document.getElementById('sGSlid').style.display == "block") {
		document.getElementById('climbCheck').innerHTML = "Make sure to move the slider to the position the robot climbed at!";
	} else {
		document.getElementById('climbCheck').innerHTML = "";
	} */
	
	if (team & match) {
		document.getElementById('sub').disabled = false;
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

$(document).ready(function() {
	$('#sub').click(function() {
		console.log("inside ajax function");
		$.ajax({
			url: '../scouting/processing.php',
			type: 'GET',
			data: {
				pcAutonBotScore_php: pcAutonBotScore,
				pcAutonOutScore_php: pcAutonOutScore,
				pcAutonInScore_php: pcAutonInScore,
				pcAutonBotMiss_php: pcAutonBotMiss,
				pcAutonTopMiss_php: pcAutonTopMiss,
				pcTeleopBotScore_php: pcTeleopBotScore,
				pcTeleopOutScore_php: pcTeleopOutScore,
				pcTeleopInScore_php: pcTeleopInScore,
				pcTeleopBotMiss_php: pcTeleopBotMiss,
				pcTeleopTopMiss_php: pcTeleopTopMiss,
				matchNo_php: matchNo,
				teamNo_php: teamNo,
				park_php: park,
				climb_php: climb,
				climbPos_php: climbPos,
				generatorLevel_php: generatorLevel,
				noClimb_php: noClimb,
				yellow_php: yellow,
				red_php: red,
				lostComms_php: lostComms,
				disabled_php: disabled,
				revolutionsCheck_php: revolutionsCheck,
				colorCheck_php: colorCheck,
				defense_php: defense,
				moveStart_php: moveStart,
				fall_php: fall,
				comments_php: comments
			},
			success: function(data) {
				//$('#result').html(data);
				console.log("ajax function was a success");
				location.reload(true);
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				alert("There was an error in submitting the data.");
			}
		});
	});
});