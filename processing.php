<?php
	ini_set('display_errors',1);
	error_reporting(E_ALL);
	session_start();
	$DB_HOST = 'localhost';
	$DB_USER = 'root';
	$DB_PASS = 'techhounds';
	$DB_NAME = 'scoutingDB';
	$con = mysqli_connect($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
	if (mysqli_connect_errno() ) {
		die ('Failed to connect to MySQL: ' .mysqli_connect_error());
	}
	
	echo "php has started 2 ";
	
	// Pregame Data
	$matchNo = $_GET['matchNo_php'];
	$teamNo = $_GET['teamNo_php'];
	
	// Midgame Data
	$pcAutonBotScore = $_GET['pcAutonBotScore_php'];
	$pcAutonOutScore = $_GET['pcAutonOutScore_php'];
	$pcAutonInScore = $_GET['pcAutonInScore_php'];
	$pcAutonBotMiss = $_GET['pcAutonBotMiss_php'];
	$pcAutonTopMiss = $_GET['pcAutonTopMiss_php'];
	$pcTeleopBotScore = $_GET['pcTeleopBotScore_php'];
	$pcTeleopOutScore = $_GET['pcTeleopOutScore_php'];
	$pcTeleopInScore = $_GET['pcTeleopInScore_php'];
	$pcTeleopBotMiss = $_GET['pcTeleopBotMiss_php'];
	$pcTeleopTopMiss = $_GET['pcTeleopTopMiss_php'];
	$revolutionsCheck = $_GET['revolutionsCheck_php'];
	$colorCheck = $_GET['colorCheck_php'];
	$defense = $_GET['defense_php'];
	$moveStart = $_GET['moveStart_php'];
	
	// Endgame Data
	$park = $_GET['park_php'];
	$climb = $_GET['climb_php'];
	$generatorLevel = $_GET['generatorLevel_php'];
	$noClimb = $_GET['noClimb_php'];
	$climbPos = $_GET['climbPos_php'];
	
	// Replacement of Comments
	$yellow = $_GET['yellow_php'];
	$red = $_GET['red_php'];
	$lostComms = $_GET['lostComms_php'];
	$disabled = $_GET['disabled_php'];
	$fall = $_GET['fall_php'];
	
	$comments = $_GET['comments_php'];
	
	//echo $matchNo. $teamNo. $compId. $sandstormnoOfCargo. $sandstormnoOfHatch. $teleop_noOfCargo. $teleop_noOfHatch. $comments;
	$sql = "INSERT INTO scoutingData(matchNo, teamNo, pcAutonBotScore, pcAutonOutScore, pcAutonInScore, pcAutonBotMiss, pcAutonTopMiss, pcTeleopBotScore, pcTeleopOutScore, pcTeleopInScore, pcTeleopBotMiss, pcTeleopTopMiss, revolutionsCheck, colorCheck, defense, moveStart, park, climb, generatorLevel, noClimb, climbPos, yellow, red, lostComms, disabled, fall, comments) 
	VALUES ('$matchNo', '$teamNo', '$pcAutonBotScore', '$pcAutonOutScore', '$pcAutonInScore', '$pcAutonBotMiss', '$pcAutonTopMiss', '$pcTeleopBotScore', '$pcTeleopOutScore', '$pcTeleopInScore', '$pcTeleopBotMiss', '$pcTeleopTopMiss', '$revolutionsCheck', '$colorCheck', '$defense', '$moveStart', '$park', '$climb', '$generatorLevel', '$noClimb', '$climbPos', '$yellow', '$red', '$lostComms', '$disabled', '$fall', '$comments')";
	
	
	//echo "Worked";
	echo "$sql";
	mysqli_query($con, $sql) or die(mysqli_error($con));
	header("location:index.html");
?>