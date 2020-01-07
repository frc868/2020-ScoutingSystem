function showWeight(id, id2) {
	document.getElementById(id).innerHTML = document.getElementById(id2).value;
	searchCompetition();
}

new Tablesort(document.getElementById('myTable'));

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
	//start by saying: no switching is done:
	switching = false;
	rows = table.rows;
	/*Loop through all table rows (except the
	first, which contains table headers):*/
	for (i = 1; i < (rows.length - 1); i++) {
	  //start by saying there should be no switching:
	  shouldSwitch = false;
	  /*Get the two elements you want to compare,
	  one from current row and one from the next:*/
	  x = rows[i].getElementsByClassName("sort")[0];
	  y = rows[i + 1].getElementsByClassName("sort")[0];
	  //check if the two rows should switch place:
	  if (Number(x.innerHTML) < Number(y.innerHTML)) {
		//if so, mark as a switch and break the loop:
		shouldSwitch = true;
		break;
	  }
	}
	if (shouldSwitch) {
	  /*If a switch has been marked, make the switch
	  and mark that a switch has been done:*/
	  rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
	  switching = true;
	}
  }
}		

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
	td = tr[i].getElementsByTagName("td")[0];
	if (td) {
	  txtValue = td.textContent || td.innerText;
	  if (txtValue.toUpperCase().indexOf(filter) > -1) {
		tr[i].style.display = "";
	  } else {
		tr[i].style.display = "none";
	  }
	}       
  }
}

function update() {
	document.getElementById("teamNumber").innerHTML = activeArray[0];
	document.getElementById("competition").innerHTML = activeArray[1];
	document.getElementById("SandHatch").innerHTML = activeArray[2];
	document.getElementById("SandCargo").innerHTML = activeArray[3];
	document.getElementById("SandMiss").innerHTML = activeArray[0];
	document.getElementById("TeleHatch").innerHTML = activeArray[4];
	document.getElementById("TeleCargo").innerHTML = activeArray[5];
	document.getElementById("TeleMissed").innerHTML = activeArray[0];
	document.getElementById("level").innerHTML = activeArray[0];
	document.getElementById("time").innerHTML = activeArray[0];
	document.getElementById("hiddenExample").innerHTML = activeArray[0];
}

function teamInfo() {
	document.getElementById("teamInfo").click()
}

function setActiveArray(array) {
	activeArray = array;
	console.log(activeArray);
	update();
	teamInfo();
}

function searchTeam(team) {
  var e = document.getElementById("compPick");
  var k = document.getElementById("teleopCargoSlider").value;
  var l = document.getElementById("teleopHatchSlider").value;
  var m = document.getElementById("sandstormCargoSlider").value;
  var n = document.getElementById("sandstormHatchSlider").value;
  var o = document.getElementById("accuracySlider").value;
  var p = document.getElementById("levelSlider").value;
  var q = document.getElementById("baselineSlider").value;
  var compId = e.options[e.selectedIndex].value;
  var xhttp; 
  if (team == "") {
	document.getElementById("txtHint").innerHTML = "";
	return;
  }
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	document.getElementById("txtHint").innerHTML = this.responseText;
	//competitionName();
	}
  };
  xhttp.open("GET", "test.php?j="+team+"&z="+compId+"&k="+k+"&l="+l+"&m="+m+"&n="+n+"&o="+o+"&p="+p+"&q="+q, true);
  xhttp.send();
}

function searchCompetition() {
  var e = document.getElementById("compPick");
  var compId = e.options[e.selectedIndex].value;
  var k = document.getElementById("teleopCargoSlider").value;
  var l = document.getElementById("teleopHatchSlider").value;
  var m = document.getElementById("sandstormCargoSlider").value;
  var n = document.getElementById("sandstormHatchSlider").value;
  var o = document.getElementById("accuracySlider").value;
  var p = document.getElementById("levelSlider").value;
  var q = document.getElementById("baselineSlider").value;
  var xhttp; 
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	document.getElementById("tableBody").innerHTML = this.responseText;
	sortTable();
	}
  };
  xhttp.open("GET", "average.php?z="+compId+"&k="+k+"&l="+l+"&m="+m+"&n="+n+"&o="+o+"&p="+p+"&q="+q, true);
  xhttp.send();
}

function compPickFunc() {
	document.getElementById("searchBox").disabled = false;
	document.getElementById("searchBut").disabled = false;
}

function compareAdd(team) {
	var teamNumber = team;
	var sca = document.getElementById(team + "_sca").innerHTML;
	var sha = document.getElementById(team + "_sha").innerHTML;
	var tca = document.getElementById(team + "_tca").innerHTML;
	var tha = document.getElementById(team + "_tha").innerHTML;
	var cta = document.getElementById(team + "_cta").innerHTML;
	
	if (document.getElementById("teamNo1").innerHTML == "") {
		document.getElementById("sca1").innerHTML = sca;
		document.getElementById("sha1").innerHTML = sha;
		document.getElementById("tca1").innerHTML = tca;
		document.getElementById("tha1").innerHTML = tha;
		document.getElementById("cta1").innerHTML = cta;
		document.getElementById("teamNo1").innerHTML = teamNumber;
		document.getElementById("compareTab").click()
	}
	else if (document.getElementById("teamNo2").innerHTML == "") {
		document.getElementById("sca2").innerHTML = sca;
		document.getElementById("sha2").innerHTML = sha;
		document.getElementById("tca2").innerHTML = tca;
		document.getElementById("tha2").innerHTML = tha;
		document.getElementById("cta2").innerHTML = cta;
		document.getElementById("teamNo2").innerHTML = teamNumber;
		compare();
		document.getElementById("compareTab").click()
	}
	else if (document.getElementById("teamNo3").innerHTML == "") {
		document.getElementById("sca3").innerHTML = sca;
		document.getElementById("sha3").innerHTML = sha;
		document.getElementById("tca3").innerHTML = tca;
		document.getElementById("tha3").innerHTML = tha;
		document.getElementById("cta3").innerHTML = cta;
		document.getElementById("teamNo3").innerHTML = teamNumber;
		compare();
		document.getElementById("compareTab").click()
	}
	else if (document.getElementById("teamNo4").innerHTML == "") {
		document.getElementById("sca4").innerHTML = sca;
		document.getElementById("sha4").innerHTML = sha;
		document.getElementById("tca4").innerHTML = tca;
		document.getElementById("tha4").innerHTML = tha;
		document.getElementById("cta4").innerHTML = cta;
		document.getElementById("teamNo4").innerHTML = teamNumber;
		compare();
		document.getElementById("compareTab").click()
	}
	else {
		alert("All compare spots are full. Please remove a team before adding another.");
	}
}

function clearTeam1() {
	document.getElementById("sca1").innerHTML = "";
	document.getElementById("sha1").innerHTML = "";
	document.getElementById("tca1").innerHTML = "";
	document.getElementById("tha1").innerHTML = "";
	document.getElementById("cta1").innerHTML = "";
	document.getElementById("teamNo1").innerHTML = "";
	document.getElementById("sca1").style.color = "#000000";
	document.getElementById("sha1").style.color = "#000000";
	document.getElementById("tca1").style.color = "#000000";
	document.getElementById("tha1").style.color = "#000000";
	document.getElementById("cta1").style.color = "#000000";
	document.getElementById("sca1").style.backgroundColor = "#e6edeb";
	document.getElementById("sha1").style.backgroundColor = "#e6edeb";
	document.getElementById("tca1").style.backgroundColor = "#e6edeb";
	document.getElementById("tha1").style.backgroundColor = "#e6edeb";
	document.getElementById("cta1").style.backgroundColor = "#e6edeb";
}

function clearTeam2() {
	document.getElementById("sca2").innerHTML = "";
	document.getElementById("sha2").innerHTML = "";
	document.getElementById("tca2").innerHTML = "";
	document.getElementById("tha2").innerHTML = "";
	document.getElementById("cta2").innerHTML = "";
	document.getElementById("teamNo2").innerHTML = "";
	document.getElementById("sca2").style.color = "#000000";
	document.getElementById("sha2").style.color = "#000000";
	document.getElementById("tca2").style.color = "#000000";
	document.getElementById("tha2").style.color = "#000000";
	document.getElementById("cta2").style.color = "#000000";
	document.getElementById("sca2").style.backgroundColor = "#e6edeb";
	document.getElementById("sha2").style.backgroundColor = "#e6edeb";
	document.getElementById("tca2").style.backgroundColor = "#e6edeb";
	document.getElementById("tha2").style.backgroundColor = "#e6edeb";
	document.getElementById("cta2").style.backgroundColor = "#e6edeb";
}

function clearTeam3() {
	document.getElementById("sca3").innerHTML = "";
	document.getElementById("sha3").innerHTML = "";
	document.getElementById("tca3").innerHTML = "";
	document.getElementById("tha3").innerHTML = "";
	document.getElementById("cta3").innerHTML = "";
	document.getElementById("teamNo3").innerHTML = "";
	document.getElementById("sca3").style.color = "#000000";
	document.getElementById("sha3").style.color = "#000000";
	document.getElementById("tca3").style.color = "#000000";
	document.getElementById("tha3").style.color = "#000000";
	document.getElementById("cta3").style.color = "#000000";
	document.getElementById("sca3").style.backgroundColor = "#e6edeb";
	document.getElementById("sha3").style.backgroundColor = "#e6edeb";
	document.getElementById("tca3").style.backgroundColor = "#e6edeb";
	document.getElementById("tha3").style.backgroundColor = "#e6edeb";
	document.getElementById("cta3").style.backgroundColor = "#e6edeb";
}

function clearTeam4() {
	document.getElementById("sca4").innerHTML = "";
	document.getElementById("sha4").innerHTML = "";
	document.getElementById("tca4").innerHTML = "";
	document.getElementById("tha4").innerHTML = "";
	document.getElementById("cta4").innerHTML = "";
	document.getElementById("teamNo4").innerHTML = "";
	document.getElementById("sca4").style.color = "#000000";
	document.getElementById("sha4").style.color = "#000000";
	document.getElementById("tca4").style.color = "#000000";
	document.getElementById("tha4").style.color = "#000000";
	document.getElementById("cta4").style.color = "#000000";
	document.getElementById("sca4").style.backgroundColor = "#e6edeb";
	document.getElementById("sha4").style.backgroundColor = "#e6edeb";
	document.getElementById("tca4").style.backgroundColor = "#e6edeb";
	document.getElementById("tha4").style.backgroundColor = "#e6edeb";
	document.getElementById("cta4").style.backgroundColor = "#e6edeb";
}

function compare() {
	var sh1 = document.getElementById("sha1").innerHTML;
	var sh2 = document.getElementById("sha2").innerHTML;
	var sh3 = document.getElementById("sha3").innerHTML;
	var sh4 = document.getElementById("sha4").innerHTML;
	var sc1 = document.getElementById("sca1").innerHTML;
	var sc2 = document.getElementById("sca2").innerHTML;
	var sc3 = document.getElementById("sca3").innerHTML;
	var sc4 = document.getElementById("sca4").innerHTML;
	var tc1 = document.getElementById("tca1").innerHTML;
	var tc2 = document.getElementById("tca2").innerHTML;
	var tc3 = document.getElementById("tca3").innerHTML;
	var tc4 = document.getElementById("tca4").innerHTML;
	var th1 = document.getElementById("tha1").innerHTML;
	var th2 = document.getElementById("tha2").innerHTML;
	var th3 = document.getElementById("tha3").innerHTML;
	var th4 = document.getElementById("tha4").innerHTML;
	var t1 = document.getElementById("cta1").innerHTML;
	var t2 = document.getElementById("cta2").innerHTML;
	var t3 = document.getElementById("cta3").innerHTML;
	var t4 = document.getElementById("cta4").innerHTML;

/* 			if(document.getElementById("sha2").innerHTML == "")
		{
		if(document.getElementById("sha3").innerHTML == "")
			{
			if(document.getElementById("sha4").innerHTML.length > 0)
				{
					document.getElementById("sha2").innerHTML = document.getElementById("sha4").innerHTML;
					document.getElementById("sc2").innerHTML = document.getElementById("sc4").innerHTML;
					document.getElementById("tc2").innerHTML = document.getElementById("tc4").innerHTML;
					document.getElementById("th2").innerHTML = document.getElementById("th4").innerHTML;
					document.getElementById("t2").innerHTML = document.getElementById("t4").innerHTML;
					document.getElementById("sha4").innerHTML = "";
					document.getElementById("sc4").innerHTML = "";
					document.getElementById("tc4").innerHTML = "";
					document.getElementById("th4").innerHTML = "";
					document.getElementById("t4").innerHTML = "";
				}
			}
		}
		

		if(document.getElementById("sha3").innerHTML == "")
			{
			if(document.getElementById("sha4").innerHTML.length > 0)
				{
					document.getElementById("sha3").innerHTML = document.getElementById("sha4").innerHTML;
					document.getElementById("sc3").innerHTML = document.getElementById("sc4").innerHTML;
					document.getElementById("tc3").innerHTML = document.getElementById("tc4").innerHTML;
					document.getElementById("th3").innerHTML = document.getElementById("th4").innerHTML;
					document.getElementById("t3").innerHTML = document.getElementById("t4").innerHTML;
					document.getElementById("sha4").innerHTML = "";
					document.getElementById("sc4").innerHTML = "";
					document.getElementById("tc4").innerHTML = "";
					document.getElementById("th4").innerHTML = "";
					document.getElementById("t4").innerHTML = "";
				}
			}
		
	if(document.getElementById("sha2").innerHTML == "")
		{
		if(document.getElementById("sha3").innerHTML.length > 0)
			{
			if(document.getElementById("sha4").innerHTML.length > 0)
				{
					document.getElementById("sha2").innerHTML = document.getElementById("sha3").innerHTML;
					document.getElementById("sc2").innerHTML = document.getElementById("sc3").innerHTML;
					document.getElementById("tc2").innerHTML = document.getElementById("tc3").innerHTML;
					document.getElementById("th2").innerHTML = document.getElementById("th3").innerHTML;
					document.getElementById("t2").innerHTML = document.getElementById("t3").innerHTML;
					document.getElementById("sha3").innerHTML = "";
					document.getElementById("sc3").innerHTML = "";
					document.getElementById("tc3").innerHTML = "";
					document.getElementById("th3").innerHTML = "";
					document.getElementById("t3").innerHTML = "";
					
					document.getElementById("sha3").innerHTML = document.getElementById("sha4").innerHTML;
					document.getElementById("sc3").innerHTML = document.getElementById("sc4").innerHTML;
					document.getElementById("tc3").innerHTML = document.getElementById("tc4").innerHTML;
					document.getElementById("th3").innerHTML = document.getElementById("th4").innerHTML;
					document.getElementById("t3").innerHTML = document.getElementById("t4").innerHTML;
					document.getElementById("sha4").innerHTML = "";
					document.getElementById("sc4").innerHTML = "";
					document.getElementById("tc4").innerHTML = "";
					document.getElementById("th4").innerHTML = "";
					document.getElementById("t4").innerHTML = "";
				}
			}
		} */
		
	if (Math.max(sh1, sh2, sh3, sh4) == sh1) {
		document.getElementById("sha1").style.color = "#0a7134";
		document.getElementById("sha2").style.color = "#ba3940";
		document.getElementById("sha3").style.color = "#ba3940";
		document.getElementById("sha4").style.color = "#ba3940";
		document.getElementById("sha1").style.backgroundColor = "#c5f0cd";
		document.getElementById("sha2").style.backgroundColor = "#ffc7ce";
		document.getElementById("sha3").style.backgroundColor = "#ffc7ce";
		document.getElementById("sha4").style.backgroundColor = "#ffc7ce";
	}
	
	if (Math.max(sh1, sh2, sh3) == sh1) {
		document.getElementById("sha1").style.color = "#0a7134";
		document.getElementById("sha2").style.color = "#ba3940";
		document.getElementById("sha3").style.color = "#ba3940";
		document.getElementById("sha1").style.backgroundColor = "#c5f0cd";
		document.getElementById("sha2").style.backgroundColor = "#ffc7ce";
		document.getElementById("sha3").style.backgroundColor = "#ffc7ce";
	}
	
	if (Math.max(sh1, sh2) == sh1) {
		document.getElementById("sha1").style.color = "#0a7134";
		document.getElementById("sha2").style.color = "#ba3940";
		document.getElementById("sha1").style.backgroundColor = "#c5f0cd";
		document.getElementById("sha2").style.backgroundColor = "#ffc7ce";
	}
	
	if (Math.max(sh1, sh2, sh3, sh4) == sh2) {
		document.getElementById("sha1").style.color = "#ba3940";
		document.getElementById("sha2").style.color = "#0a7134";
		document.getElementById("sha3").style.color = "#ba3940";
		document.getElementById("sha4").style.color = "#ba3940";
		document.getElementById("sha1").style.backgroundColor = "#ffc7ce";
		document.getElementById("sha2").style.backgroundColor = "#c5f0cd";
		document.getElementById("sha3").style.backgroundColor = "#ffc7ce";
		document.getElementById("sha4").style.backgroundColor = "#ffc7ce";
	}
	
	if (Math.max(sh1, sh2, sh3) == sh2) {
		document.getElementById("sha1").style.color = "#ba3940";
		document.getElementById("sha2").style.color = "#0a7134";
		document.getElementById("sha3").style.color = "#ba3940";
		document.getElementById("sha1").style.backgroundColor = "#ffc7ce";
		document.getElementById("sha2").style.backgroundColor = "#c5f0cd";
		document.getElementById("sha3").style.backgroundColor = "#ffc7ce";
	}
	
	if (Math.max(sh1, sh2) == sh2) {
		document.getElementById("sha1").style.color = "#ba3940";
		document.getElementById("sha2").style.color = "#0a7134";
		document.getElementById("sha1").style.backgroundColor = "#ffc7ce";
		document.getElementById("sha2").style.backgroundColor = "#c5f0cd";
	}
	
	if (Math.max(sh1, sh2, sh3, sh4) == sh3) {
		document.getElementById("sha1").style.color = "#ba3940";
		document.getElementById("sha2").style.color = "#ba3940";
		document.getElementById("sha3").style.color = "#0a7134";
		document.getElementById("sha4").style.color = "#ba3940";
		document.getElementById("sha1").style.backgroundColor = "#ffc7ce";
		document.getElementById("sha2").style.backgroundColor = "#ffc7ce";
		document.getElementById("sha3").style.backgroundColor = "#c5f0cd";
		document.getElementById("sha4").style.backgroundColor = "#ffc7ce";
	}
	
	if (Math.max(sh1, sh2, sh3) == sh3) {
		document.getElementById("sha1").style.color = "#ba3940";
		document.getElementById("sha2").style.color = "#ba3940";
		document.getElementById("sha3").style.color = "#0a7134";
		document.getElementById("sha1").style.backgroundColor = "#ffc7ce";
		document.getElementById("sha2").style.backgroundColor = "#ffc7ce";
		document.getElementById("sha3").style.backgroundColor = "#c5f0cd";
	}
	
	if (Math.max(sh1, sh2, sh3, sh4) == sh4) {
		document.getElementById("sha1").style.color = "#ba3940";
		document.getElementById("sha2").style.color = "#ba3940";
		document.getElementById("sha3").style.color = "#ba3940";
		document.getElementById("sha4").style.color = "#0a7134";
		document.getElementById("sha1").style.backgroundColor = "#ffc7ce";
		document.getElementById("sha2").style.backgroundColor = "#ffc7ce";
		document.getElementById("sha3").style.backgroundColor = "#ffc7ce";
		document.getElementById("sha4").style.backgroundColor = "#c5f0cd";
	}
	
	if (Math.max(sc1, sc2, sc3, sc4) == sc1) {
		document.getElementById("sca1").style.color = "#0a7134";
		document.getElementById("sca2").style.color = "#ba3940";
		document.getElementById("sca3").style.color = "#ba3940";
		document.getElementById("sca4").style.color = "#ba3940";
		document.getElementById("sca1").style.backgroundColor = "#c5f0cd";
		document.getElementById("sca2").style.backgroundColor = "#ffc7ce";
		document.getElementById("sca3").style.backgroundColor = "#ffc7ce";
		document.getElementById("sca4").style.backgroundColor = "#ffc7ce";
	}
	
	if (Math.max(sc1, sc2, sc3) == sc1) {
		document.getElementById("sca1").style.color = "#0a7134";
		document.getElementById("sca2").style.color = "#ba3940";
		document.getElementById("sca3").style.color = "#ba3940";
		document.getElementById("sca1").style.backgroundColor = "#c5f0cd";
		document.getElementById("sca2").style.backgroundColor = "#ffc7ce";
		document.getElementById("sca3").style.backgroundColor = "#ffc7ce";
	}
	
	if (Math.max(sc1, sc2) == sc1) {
		document.getElementById("sca1").style.color = "#0a7134";
		document.getElementById("sca2").style.color = "#ba3940";
		document.getElementById("sca1").style.backgroundColor = "#c5f0cd";
		document.getElementById("sca2").style.backgroundColor = "#ffc7ce";
	}
	
	if (Math.max(sc1) == sc1) {
		document.getElementById("sca1").style.color = "#0a7134";
		document.getElementById("sca1").style.backgroundColor = "#c5f0cd";
	}
	
	if (Math.max(sc1, sc2, sc3, sc4) == sc2) {
		document.getElementById("sca1").style.color = "#ba3940";
		document.getElementById("sca2").style.color = "#0a7134";
		document.getElementById("sca3").style.color = "#ba3940";
		document.getElementById("sca4").style.color = "#ba3940";
		document.getElementById("sca1").style.backgroundColor = "#ffc7ce";
		document.getElementById("sca2").style.backgroundColor = "#c5f0cd";
		document.getElementById("sca3").style.backgroundColor = "#ffc7ce";
		document.getElementById("sca4").style.backgroundColor = "#ffc7ce";
	}
	
	if (Math.max(sc1, sc2, sc3) == sc2) {
		document.getElementById("sca1").style.color = "#ba3940";
		document.getElementById("sca2").style.color = "#0a7134";
		document.getElementById("sca3").style.color = "#ba3940";
		document.getElementById("sca1").style.backgroundColor = "#ffc7ce";
		document.getElementById("sca2").style.backgroundColor = "#c5f0cd";
		document.getElementById("sca3").style.backgroundColor = "#ffc7ce";
	}
	
	if (Math.max(sc1, sc2) == sc2) {
		document.getElementById("sca1").style.color = "#ba3940";
		document.getElementById("sca2").style.color = "#0a7134";
		document.getElementById("sca1").style.backgroundColor = "#ffc7ce";
		document.getElementById("sca2").style.backgroundColor = "#c5f0cd";
	}
	
	if (Math.max(sc1, sc2, sc3, sc4) == sc3) {
		document.getElementById("sca1").style.color = "#ba3940";
		document.getElementById("sca2").style.color = "#ba3940";
		document.getElementById("sca3").style.color = "#0a7134";
		document.getElementById("sca4").style.color = "#ba3940";
		document.getElementById("sca1").style.backgroundColor = "#ffc7ce";
		document.getElementById("sca2").style.backgroundColor = "#ffc7ce";
		document.getElementById("sca3").style.backgroundColor = "#c5f0cd";
		document.getElementById("sca4").style.backgroundColor = "#ffc7ce";
	}
	
	if (Math.max(sc1, sc2, sc3) == sc3) {
		document.getElementById("sca1").style.color = "#ba3940";
		document.getElementById("sca2").style.color = "#ba3940";
		document.getElementById("sca3").style.color = "#0a7134";
		document.getElementById("sca1").style.backgroundColor = "#ffc7ce";
		document.getElementById("sca2").style.backgroundColor = "#ffc7ce";
		document.getElementById("sca3").style.backgroundColor = "#c5f0cd";
	}
	
	if (Math.max(sc1, sc2, sc3, sc4) == sc4) {
		document.getElementById("sca1").style.color = "#ba3940";
		document.getElementById("sca2").style.color = "#ba3940";
		document.getElementById("sca3").style.color = "#ba3940";
		document.getElementById("sca4").style.color = "#0a7134";
		document.getElementById("sca1").style.backgroundColor = "#ffc7ce";
		document.getElementById("sca2").style.backgroundColor = "#ffc7ce";
		document.getElementById("sca3").style.backgroundColor = "#ffc7ce";
		document.getElementById("sca4").style.backgroundColor = "#c5f0cd";
	}
	
	if (Math.max(tc1, tc2, tc3, tc4) == tc1) {
		document.getElementById("tca1").style.color = "#0a7134";
		document.getElementById("tca2").style.color = "#ba3940";
		document.getElementById("tca3").style.color = "#ba3940";
		document.getElementById("tca4").style.color = "#ba3940";
		document.getElementById("tca1").style.backgroundColor = "#c5f0cd";
		document.getElementById("tca2").style.backgroundColor = "#ffc7ce";
		document.getElementById("tca3").style.backgroundColor = "#ffc7ce";
		document.getElementById("tca4").style.backgroundColor = "#ffc7ce";
	}
	
	if (Math.max(tc1, tc2, tc3) == tc1) {
		document.getElementById("tca1").style.color = "#0a7134";
		document.getElementById("tca2").style.color = "#ba3940";
		document.getElementById("tca3").style.color = "#ba3940";
		document.getElementById("tca1").style.backgroundColor = "#c5f0cd";
		document.getElementById("tca2").style.backgroundColor = "#ffc7ce";
		document.getElementById("tca3").style.backgroundColor = "#ffc7ce";
	}
	
	if (Math.max(tc1, tc2) == tc1) {
		document.getElementById("tca1").style.color = "#0a7134";
		document.getElementById("tca2").style.color = "#ba3940";
		document.getElementById("tca1").style.backgroundColor = "#c5f0cd";
		document.getElementById("tca2").style.backgroundColor = "#ffc7ce";
	}
	
	if (Math.max(tc1) == tc1) {
		document.getElementById("tca1").style.color = "#0a7134";
		document.getElementById("tca1").style.backgroundColor = "#c5f0cd";
	}
	
	if (Math.max(tc1, tc2, tc3, tc4) == tc2) {
		document.getElementById("tca1").style.color = "#ba3940";
		document.getElementById("tca2").style.color = "#0a7134";
		document.getElementById("tca3").style.color = "#ba3940";
		document.getElementById("tca4").style.color = "#ba3940";
		document.getElementById("tca1").style.backgroundColor = "#ffc7ce";
		document.getElementById("tca2").style.backgroundColor = "#c5f0cd";
		document.getElementById("tca3").style.backgroundColor = "#ffc7ce";
		document.getElementById("tca4").style.backgroundColor = "#ffc7ce";
	}
	
	if (Math.max(tc1, tc2, tc3) == tc2) {
		document.getElementById("tca1").style.color = "#ba3940";
		document.getElementById("tca2").style.color = "#0a7134";
		document.getElementById("tca3").style.color = "#ba3940";
		document.getElementById("tca1").style.backgroundColor = "#ffc7ce";
		document.getElementById("tca2").style.backgroundColor = "#c5f0cd";
		document.getElementById("tca3").style.backgroundColor = "#ffc7ce";
	}
	
	if (Math.max(tc1, tc2) == tc2) {
		document.getElementById("tca1").style.color = "#ba3940";
		document.getElementById("tca2").style.color = "#0a7134";
		document.getElementById("tca1").style.backgroundColor = "#ffc7ce";
		document.getElementById("tca2").style.backgroundColor = "#c5f0cd";
	}
	
	if (Math.max(tc1, tc2, tc3, tc4) == tc3) {
		document.getElementById("tca1").style.color = "#ba3940";
		document.getElementById("tca2").style.color = "#ba3940";
		document.getElementById("tca3").style.color = "#0a7134";
		document.getElementById("tca4").style.color = "#ba3940";
		document.getElementById("tca1").style.backgroundColor = "#ffc7ce";
		document.getElementById("tca2").style.backgroundColor = "#ffc7ce";
		document.getElementById("tca3").style.backgroundColor = "#c5f0cd";
		document.getElementById("tca4").style.backgroundColor = "#ffc7ce";
	}
	
	if (Math.max(tc1, tc2, tc3) == tc3) {
		document.getElementById("tca1").style.color = "#ba3940";
		document.getElementById("tca2").style.color = "#ba3940";
		document.getElementById("tca3").style.color = "#0a7134";
		document.getElementById("tca1").style.backgroundColor = "#ffc7ce";
		document.getElementById("tca2").style.backgroundColor = "#ffc7ce";
		document.getElementById("tca3").style.backgroundColor = "#c5f0cd";
	}
	
	if (Math.max(tc1, tc2, tc3, tc4) == tc4) {
		document.getElementById("tca1").style.color = "#ba3940";
		document.getElementById("tca2").style.color = "#ba3940";
		document.getElementById("tca3").style.color = "#ba3940";
		document.getElementById("tca4").style.color = "#0a7134";
		document.getElementById("tca1").style.backgroundColor = "#ffc7ce";
		document.getElementById("tca2").style.backgroundColor = "#ffc7ce";
		document.getElementById("tca3").style.backgroundColor = "#ffc7ce";
		document.getElementById("tca4").style.backgroundColor = "#c5f0cd";
	}
	
	if (Math.max(th1, th2, th3, th4) == th1) {
		document.getElementById("tha1").style.color = "#0a7134";
		document.getElementById("tha2").style.color = "#ba3940";
		document.getElementById("tha3").style.color = "#ba3940";
		document.getElementById("tha4").style.color = "#ba3940";
		document.getElementById("tha1").style.backgroundColor = "#c5f0cd";
		document.getElementById("tha2").style.backgroundColor = "#ffc7ce";
		document.getElementById("tha3").style.backgroundColor = "#ffc7ce";
		document.getElementById("tha4").style.backgroundColor = "#ffc7ce";
	}
	
	if (Math.max(th1, th2, th3) == th1) {
		document.getElementById("tha1").style.color = "#0a7134";
		document.getElementById("tha2").style.color = "#ba3940";
		document.getElementById("tha3").style.color = "#ba3940";
		document.getElementById("tha1").style.backgroundColor = "#c5f0cd";
		document.getElementById("tha2").style.backgroundColor = "#ffc7ce";
		document.getElementById("tha3").style.backgroundColor = "#ffc7ce";
	}
	
	if (Math.max(th1, th2) == th1) {
		document.getElementById("tha1").style.color = "#0a7134";
		document.getElementById("tha2").style.color = "#ba3940";
		document.getElementById("tha1").style.backgroundColor = "#c5f0cd";
		document.getElementById("tha2").style.backgroundColor = "#ffc7ce";
	}
	
	if (Math.max(th1) == th1) {
		document.getElementById("tha1").style.color = "#0a7134";
		document.getElementById("tha1").style.backgroundColor = "#c5f0cd";
	}
	
	if (Math.max(th1, th2, th3, th4) == th2) {
		document.getElementById("tha1").style.color = "#ba3940";
		document.getElementById("tha2").style.color = "#0a7134";
		document.getElementById("tha3").style.color = "#ba3940";
		document.getElementById("tha4").style.color = "#ba3940";
		document.getElementById("tha1").style.backgroundColor = "#ffc7ce";
		document.getElementById("tha2").style.backgroundColor = "#c5f0cd";
		document.getElementById("tha3").style.backgroundColor = "#ffc7ce";
		document.getElementById("tha4").style.backgroundColor = "#ffc7ce";
	}
	
	if (Math.max(th1, th2, th3) == th2) {
		document.getElementById("tha1").style.color = "#ba3940";
		document.getElementById("tha2").style.color = "#0a7134";
		document.getElementById("tha3").style.color = "#ba3940";
		document.getElementById("tha1").style.backgroundColor = "#ffc7ce";
		document.getElementById("tha2").style.backgroundColor = "#c5f0cd";
		document.getElementById("tha3").style.backgroundColor = "#ffc7ce";
	}
	
	if (Math.max(th1, th2) == th2) {
		document.getElementById("tha1").style.color = "#ba3940";
		document.getElementById("tha2").style.color = "#0a7134";
		document.getElementById("tha1").style.backgroundColor = "#ffc7ce";
		document.getElementById("tha2").style.backgroundColor = "#c5f0cd";
	}
	
	if (Math.max(th1, th2, th3, th4) == th3) {
		document.getElementById("tha1").style.color = "#ba3940";
		document.getElementById("tha2").style.color = "#ba3940";
		document.getElementById("tha3").style.color = "#0a7134";
		document.getElementById("tha4").style.color = "#ba3940";
		document.getElementById("tha1").style.backgroundColor = "#ffc7ce";
		document.getElementById("tha2").style.backgroundColor = "#ffc7ce";
		document.getElementById("tha3").style.backgroundColor = "#c5f0cd";
		document.getElementById("tha4").style.backgroundColor = "#ffc7ce";
	}
	
	if (Math.max(th1, th2, th3) == th3) {
		document.getElementById("tha1").style.color = "#ba3940";
		document.getElementById("tha2").style.color = "#ba3940";
		document.getElementById("tha3").style.color = "#0a7134";
		document.getElementById("tha1").style.backgroundColor = "#ffc7ce";
		document.getElementById("tha2").style.backgroundColor = "#ffc7ce";
		document.getElementById("tha3").style.backgroundColor = "#c5f0cd";
	}
	
	if (Math.max(th1, th2, th3, th4) == th4) {
		document.getElementById("tha1").style.color = "#ba3940";
		document.getElementById("tha2").style.color = "#ba3940";
		document.getElementById("tha3").style.color = "#ba3940";
		document.getElementById("tha4").style.color = "#0a7134";
		document.getElementById("tha1").style.backgroundColor = "#ffc7ce";
		document.getElementById("tha2").style.backgroundColor = "#ffc7ce";
		document.getElementById("tha3").style.backgroundColor = "#ffc7ce";
		document.getElementById("tha4").style.backgroundColor = "#c5f0cd";
	}
	
	if (Math.min(t1, t2, t3, t4) == t1) {
		document.getElementById("cta1").style.color = "#0a7134";
		document.getElementById("cta2").style.color = "#ba3940";
		document.getElementById("cta3").style.color = "#ba3940";
		document.getElementById("cta4").style.color = "#ba3940";
		document.getElementById("cta1").style.backgroundColor = "#c5f0cd";
		document.getElementById("cta2").style.backgroundColor = "#ffc7ce";
		document.getElementById("cta3").style.backgroundColor = "#ffc7ce";
		document.getElementById("cta4").style.backgroundColor = "#ffc7ce";
	}
	
	if (Math.min(t1, t2, t3) == t1) {
		document.getElementById("cta1").style.color = "#0a7134";
		document.getElementById("cta2").style.color = "#ba3940";
		document.getElementById("cta3").style.color = "#ba3940";
		document.getElementById("cta1").style.backgroundColor = "#c5f0cd";
		document.getElementById("cta2").style.backgroundColor = "#ffc7ce";
		document.getElementById("cta3").style.backgroundColor = "#ffc7ce";
	}
	
	if (Math.min(t1, t2) == t1) {
		document.getElementById("cta1").style.color = "#0a7134";
		document.getElementById("cta2").style.color = "#ba3940";
		document.getElementById("cta1").style.backgroundColor = "#c5f0cd";
		document.getElementById("cta2").style.backgroundColor = "#ffc7ce";
	}
	
	if (Math.min(t1) == t1) {
		document.getElementById("cta1").style.color = "#0a7134";
		document.getElementById("cta1").style.backgroundColor = "#c5f0cd";
	}
	
	if (Math.min(t1, t2, t3, t4) == t2) {
		document.getElementById("cta1").style.color = "#ba3940";
		document.getElementById("cta2").style.color = "#0a7134";
		document.getElementById("cta3").style.color = "#ba3940";
		document.getElementById("cta4").style.color = "#ba3940";
		document.getElementById("cta1").style.backgroundColor = "#ffc7ce";
		document.getElementById("cta2").style.backgroundColor = "#c5f0cd";
		document.getElementById("cta3").style.backgroundColor = "#ffc7ce";
		document.getElementById("cta4").style.backgroundColor = "#ffc7ce";
	}
	
	if (Math.min(t1, t2, t3) == t2) {
		document.getElementById("cta1").style.color = "#ba3940";
		document.getElementById("cta2").style.color = "#0a7134";
		document.getElementById("cta3").style.color = "#ba3940";
		document.getElementById("cta1").style.backgroundColor = "#ffc7ce";
		document.getElementById("cta2").style.backgroundColor = "#c5f0cd";
		document.getElementById("cta3").style.backgroundColor = "#ffc7ce";
	}
	
	if (Math.min(t1, t2) == t2) {
		document.getElementById("cta1").style.color = "#ba3940";
		document.getElementById("cta2").style.color = "#0a7134";
		document.getElementById("cta1").style.backgroundColor = "#ffc7ce";
		document.getElementById("cta2").style.backgroundColor = "#c5f0cd";
	}
	
	if (Math.min(t1, t2, t3, t4) == t3) {
		document.getElementById("cta1").style.color = "#ba3940";
		document.getElementById("cta2").style.color = "#ba3940";
		document.getElementById("cta3").style.color = "#0a7134";
		document.getElementById("cta4").style.color = "#ba3940";
		document.getElementById("cta1").style.backgroundColor = "#ffc7ce";
		document.getElementById("cta2").style.backgroundColor = "#ffc7ce";
		document.getElementById("cta3").style.backgroundColor = "#c5f0cd";
		document.getElementById("cta4").style.backgroundColor = "#ffc7ce";
	}
	
	if (Math.min(t1, t2, t3) == t3) {
		document.getElementById("cta1").style.color = "#ba3940";
		document.getElementById("cta2").style.color = "#ba3940";
		document.getElementById("cta3").style.color = "#0a7134";
		document.getElementById("cta1").style.backgroundColor = "#ffc7ce";
		document.getElementById("cta2").style.backgroundColor = "#ffc7ce";
		document.getElementById("cta3").style.backgroundColor = "#c5f0cd";
	}
	
	if (Math.min(t1, t2, t3, t4) == t4) {
		document.getElementById("cta1").style.color = "#ba3940";
		document.getElementById("cta2").style.color = "#ba3940";
		document.getElementById("cta3").style.color = "#ba3940";
		document.getElementById("cta4").style.color = "#0a7134";
		document.getElementById("cta1").style.backgroundColor = "#ffc7ce";
		document.getElementById("cta2").style.backgroundColor = "#ffc7ce";
		document.getElementById("cta3").style.backgroundColor = "#ffc7ce";
		document.getElementById("cta4").style.backgroundColor = "#c5f0cd";
	}
}
