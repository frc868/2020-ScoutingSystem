<?php
	ini_set('display_errors',1);
	error_reporting(E_ALL);
	session_start();
	$DB_HOST = '192.168.10.1';
	$DB_USER = 'root';
	$DB_PASS = 'team868!';
	$DB_NAME = 'scoutingDataUp';
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
	
	// Replacement of Comments
	$yellow = $_POST[yellow_php];
	$red = $_POST[red_php];
	$lostComms = $_POST[lostComms_php];
	$disabled = $_POST[disabled_php];
	
	//echo $matchNo. $teamNo. $compId. $sandstormnoOfCargo. $sandstormnoOfHatch. $teleop_noOfCargo. $teleop_noOfHatch. $comments;
	$sql = "INSERT INTO scoutingData(compId, teamNo, matchNo, preload, sandstormExHP, startPosition, sandstormnoOfCargo, sandstormnoOfHatch, sandstormRRLevel1NH,
			sandstormLRLevel1NH, sandstormRRLevel1FH, sandstormLRLevel1FH, sandstormRRLevel1C, sandstormLRLevel1C, sandstormRRLevel2NH,
			sandstormLRLevel2NH, sandstormRRLevel2FH, sandstormLRLevel2FH, sandstormRRLevel2C, sandstormLRLevel2C,sandstormRRLevel3NH,
			sandstormLRLevel3NH, sandstormRRLevel3FH, sandstormLRLevel3FH, sandstormRRLevel3C, sandstormLRLevel3C, sandstormmissed,
			teleop_noOfCargo, teleop_noOfHatch, teleop_groundCargo, teleop_groundHatch, teleop_RLevel1NH, teleop_RLevel1FH, teleop_RLevel2NH,
			teleop_RLevel2FH, teleop_RLevel3NH, teleop_RLevel3FH, teleop_RLevel1C, teleop_RLevel2C, teleop_RLevel3C, teleop_missed, endgame_climbLevel,
			endgame_fail, endgame_buddyClimbGiven, endgame_buddyClimbLvl, defense, comments)
			VALUES ('$compId', '$teamNo', '$matchNo', '$preload', '$sandstormExHP', '$startPos', '$sandstormnoOfCargo', '$sandstormnoOfHatch', '$sandstormRRLevel1NH',
			'$sandstormLRLevel1NH', '$sandstormRRLevel1FH', '$sandstormLRLevel1FH', '$sandstormRRLevel1C', '$sandstormLRLevel1C', '$sandstormRRLevel2NH',
			'$sandstormLRLevel2NH', '$sandstormRRLevel2FH', '$sandstormLRLevel2FH', '$sandstormRRLevel2C', '$sandstormLRLevel2C', '$sandstormRRLevel3NH',
			'$sandstormLRLevel3NH', '$sandstormRRLevel3FH', '$sandstormLRLevel3FH', '$sandstormRRLevel3C', '$sandstormLRLevel3C', '$sandstormmissed',
			'$teleop_noOfCargo', '$teleop_noOfHatch', '$teleop_groundCargo', '$teleop_groundHatch', '$teleop_RLevel1NH', '$teleop_RLevel1FH', '$teleop_RLevel2NH',
			'$teleop_RLevel2FH', '$teleop_RLevel3NH', '$teleop_RLevel3FH', '$teleop_RLevel1C', '$teleop_RLevel2C', '$teleop_RLevel3C', '$teleop_missed', '$endgame_climbLevel',
			'$endgame_fail', '$endgame_buddyClimbGiven', '$endgame_buddyClimbLvl', '$defense', '$comments')";
	//echo "Worked";
echo "$sql";
mysqli_query($con, $sql) or die(mysqli_error($con));
	header("location:index.html");
?>