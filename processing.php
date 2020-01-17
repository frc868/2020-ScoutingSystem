<?php
	ini_set('display_errors',1);
	error_reporting(E_ALL);
	session_start();
	$DB_HOST = 'localhost';
	$DB_USER = 'loginUser';
	$DB_PASS = 'techhounds';
	$DB_NAME = 'scoutingTest';
	$con = mysqli_connect($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
	if (mysqli_connect_errno() ) {
		die ('Failed to connect to MySQL: ' .mysqli_connect_error());
	}
	
	// Pregame Data
	$matchNo = $_POST[matchNo_php];
	$teamNo = $_POST[teamNo_php];
	
	// Midgame Data
	$pcAutonBotScore = $_POST[pcAutonBotScore_php];
	$pcAutonOutScore = $_POST[pcAutonOutScore_php];
	$pcAutonInScore = $_POST[pcAutonInScore_php];
	$pcAutonBotMiss = $_POST[pcAutonBotMiss_php];
	$pcAutonTopMiss = $_POST[pcAutonTopMiss_php];
	$pcTeleopBotScore = $_POST[pcTeleopBotScore_php];
	$pcTeleopOutScore = $_POST[pcTeleopOutScore_php];
	$pcTeleopInScore = $_POST[pcTeleopInScore_php];
	$pcTeleopBotMiss = $_POST[pcTeleopBotMiss_php];
	$pcTeleopTopMiss = $_POST[pcTeleopTopMiss_php];
	$revolutionsCheck = $_POST[revolutionsCheck_php];
	$colorCheck = $_POST[colorCheck_php];
	$defense = $_POST[defense_php];
	$moveStart = $_POST[moveStart_php];
	
	// Endgame Data
	$park = $_POST[park_php];
	$climb = $_POST[climb_php];
	$generatorLevel = $_POST[generatorLevel_php];
	$noClimb = $_POST[noClimb_php];
	$climbPos = $_POST[climbPos_php];
	
	// Replacement of Comments
	$yellow = $_POST[yellow_php];
	$red = $_POST[red_php];
	$lostComms = $_POST[lostComms_php];
	$disabled = $_POST[disabled_php];
	$fall = $_POST[fall_php];
	
	$comments = $_POST[comments_php];
	
	//echo $matchNo. $teamNo. $compId. $sandstormnoOfCargo. $sandstormnoOfHatch. $teleop_noOfCargo. $teleop_noOfHatch. $comments;
	$sql = "INSERT INTO scoutingData(matchNo, teamNo, pcAutonBotScore, pcAutonOutScore, pcAutonInScore, pcAutonBotMiss, pcAutonTopMiss, pcTeleopBotScore, pcTeleopOutScore, pcTeleopInScore, pcTeleopBotMiss, pcTeleopTopMiss, revolutionsCheck, colorCheck, defense, moveStart, park, climb, generatorLevel, noClimb, climbPos, yellow, red, lostComms, disabled, fall, comments) 
	VALUES ($matchNo, $teamNo, $pcAutonBotScore, $pcAutonOutScore, $pcAutonInScore, $pcAutonBotMiss, $pcAutonTopMiss, $pcTeleopBotScore, $pcTeleopOutScore, $pcTeleopInScore, $pcTeleopBotMiss, $pcTeleopTopMiss, $revolutionsCheck, $colorCheck, $defense, $moveStart, $park, $climb, $generatorLevel, $noClimb, $climbPos, $yellow, $red, $lostComms, $disabled, $fall, $comments)";
	
	
	//echo "Worked";
echo "$sql";
mysqli_query($con, $sql) or die(mysqli_error($con));
	header("location:index.html");
?>