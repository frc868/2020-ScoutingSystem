var macro = 1;
var i = 0;
var c = 0
var h = 0
var img = 0;
var seconds = 0;
var goalList = ["Rocket Ship Level 1: Far", "Rocket Ship Level 1: Near", "Rocket Ship Level 2: Far", "Rocket Ship Level 2: Near", "Rocket Ship Level 3: Far", "Rocket Ship Level 3: Near", "Rocket Ship Level 1", "Rocket Ship Level 2", "Rocket Ship Level 3", "Cargo Ship", "Missed"];
var hatchList = ["Rocket Ship Level 1: Far", "Rocket Ship Level 1: Near", "Rocket Ship Level 2: Far", "Rocket Ship Level 2: Near", "Rocket Ship Level 3: Far", "Rocket Ship Level 3: Near", "Cargo Ship", "Missed"];
var cargoList = ["Rocket Ship Level 1", "Rocket Ship Level 2", "Rocket Ship Level 3", "Cargo Ship", "Missed"];
var itemList = ["LZ: Hatch", "LZ: Cargo", "CD: Cargo", "Ground: Cargo", "Ground: Hatch"];
var eventList = [];
var timeList = [];
var goalIndex = 0;
var cargoIndex = 0;
var hatchIndex = 0;
var itemIndex = 0;
var lastUpdate = 0;

function macroToggle() {
	if (macro == 0) {
		document.getElementById("macroButt").setAttribute("style", "color: yellow");
		macro = 1;
	} else {
		document.getElementById("macroButt").setAttribute("style", "color: red");
		macro = 0;
	}

	if (macro == 0)
		document.getElementById("macroButt").innerHTML = "Keybinds: Off";

	if (macro == 1)
		document.getElementById("macroButt").innerHTML = "Keybinds: On";
}

var ind = 0;
var imageList = ['images/fieldBlueLeft.png', 'images/fieldRedLeft.png'];

function rotateField() {
	ind = ind + 1;
	if (ind == imageList.length) {
		ind = 0;
	}

	var image1 = document.getElementById("fieldIMG");
	image1.src = imageList[ind];
}

function submit1(){
		document.getElementById('name').innerHTML = document.getElementById('number').value;
}

function submit2(){
		document.getElementById('match').innerHTML = document.getElementById('matchType').value;
}

function alertArray() {
	alert(eventList);
}

function startTimer() {
	document.getElementById("i0").click();
	document.getElementById("g0").click();
	updateFunction();
	macroToggle();
}

function buttonClick(index, entry) {
	document.getElementById("i" + itemIndex).setAttribute("style", "color: black");
	document.getElementById("g" + goalIndex).setAttribute("style", "color: black");

	if (index == 'hatch'){
		hatchIndex = entry;
	}else if (index == 'item'){
		itemIndex = entry;
	}else if (index == 'cargo') {
		cargoIndex = entry;
	}
	updateFunction();
	document.getElementById("i" + itemIndex).setAttribute("style", "color: orange");
	document.getElementById("g" + goalIndex).setAttribute("style", "color: orange");

	if (index == 'cargo' && entry == 3) {
		document.getElementById("g09").setAttribute("style", "color: orange");
		document.getElementById("g6").setAttribute("style", "color: black");
		document.getElementById("g7").setAttribute("style", "color: black");
		document.getElementById("g8").setAttribute("style", "color: black");
		document.getElementById("g010").setAttribute("style", "color: black");
	} else if (index == 'cargo' && entry == 4) {
		document.getElementById("g09").setAttribute("style", "color: black");
		document.getElementById("g6").setAttribute("style", "color: black");
		document.getElementById("g7").setAttribute("style", "color: black");
		document.getElementById("g8").setAttribute("style", "color: black");
		document.getElementById("g010").setAttribute("style", "color: orange");
	}

	if (index == 'cargo' && (entry == 0 || entry == 1 || entry == 2)) {
		document.getElementById("g09").setAttribute("style", "color: black");
		document.getElementById("g010").setAttribute("style", "color: black");
	}

	picFunc();
	updateFunction();
}

function cycleplace1() {
	if (document.getElementById('1-1').checked == true) {
		document.getElementById('1-11').hidden = false;
	} else {
		document.getElementById('1-11').hidden = true;
		document.getElementById('1-12').hidden = true;
		document.getElementById('1-13').hidden = true;
		document.getElementById('1-4').checked = false;
		document.getElementById('1-5').checked = false;
		document.getElementById('1-6').checked = false;
		document.getElementById('1-7').checked = false;
		document.getElementById('1-8').checked = false;
		document.getElementById('1-9').checked = false;
		document.getElementById('1-10').checked = false;
	}
}

function cycleplace2() {
	if (document.getElementById('2-1').checked == true) {
		document.getElementById('2-11').hidden = false;
	} else {
		document.getElementById('2-11').hidden = true;
		document.getElementById('2-12').hidden = true;
		document.getElementById('2-13').hidden = true;
		document.getElementById('2-4').checked = false;
		document.getElementById('2-5').checked = false;
		document.getElementById('2-6').checked = false;
		document.getElementById('2-7').checked = false;
		document.getElementById('2-8').checked = false;
		document.getElementById('2-9').checked = false;
		document.getElementById('2-10').checked = false;
	}
}

function cycleplace3() {
	if (document.getElementById('3-1').checked == true) {
		document.getElementById('3-11').hidden = false;
	} else {
		document.getElementById('3-11').hidden = true;
		document.getElementById('3-12').hidden = true;
		document.getElementById('3-13').hidden = true;
		document.getElementById('3-4').checked = false;
		document.getElementById('3-5').checked = false;
		document.getElementById('3-6').checked = false;
		document.getElementById('3-7').checked = false;
		document.getElementById('3-8').checked = false;
		document.getElementById('3-9').checked = false;
		document.getElementById('3-10').checked = false;
	}
}

function cycleplace4() {
	if (document.getElementById('4-1').checked == true) {
		document.getElementById('4-11').hidden = false;
	} else {
		document.getElementById('4-11').hidden = true;
		document.getElementById('4-12').hidden = true;
		document.getElementById('4-13').hidden = true;
		document.getElementById('4-4').checked = false;
		document.getElementById('4-5').checked = false;
		document.getElementById('4-6').checked = false;
		document.getElementById('4-7').checked = false;
		document.getElementById('4-8').checked = false;
		document.getElementById('4-9').checked = false;
		document.getElementById('4-10').checked = false;
	}
}

function cyclelevel1() {
	document.getElementById('1-12').hidden = false;
}

function cyclelevel2() {
	document.getElementById('2-12').hidden = false;
}

function cyclelevel3() {
	document.getElementById('3-12').hidden = false;
}

function cyclelevel4() {
	document.getElementById('4-12').hidden = false;
}

function cyclerocket1() {
	document.getElementById('1-13').hidden = false;
	if (document.getElementById('cargo2').checked == true) {
		document.getElementById('1-13').hidden = true;
		document.getElementById('cargo1').disabled = false;
		document.getElementById('hatch1').disabled = false;
		document.getElementById('none1').disabled = false;
	}
}

function cyclerocket2() {
	document.getElementById('2-13').hidden = false;
	if (document.getElementById('cargo1').checked == true) {
		document.getElementById('2-13').hidden = true;
		document.getElementById('cargo').disabled = false;
		document.getElementById('hatch').disabled = false;
		document.getElementById('none').disabled = false;
	}
}

function cyclerocket3() {
	document.getElementById('3-13').hidden = false;
	if (document.getElementById('cargo').checked == true) {
		document.getElementById('3-13').hidden = true;
	}
}

function cyclerocket4() {
	document.getElementById('4-13').hidden = false;
}

function cycle2Add () {
	document.getElementById('grid2').style.display = "";
	document.getElementById('cycle2Add').style.display = "none";
}

function cycle2Remove () {
	document.getElementById('grid2').style.display = "none";
	document.getElementById('cycle2Add').style.display = "";
	document.getElementById('2-1').disabled=true;
	document.getElementById('2-2').disabled=true;
	document.getElementById('2-3').disabled=true;
	document.getElementById('2-4').disabled=true;
	document.getElementById('2-5').disabled=true;
	document.getElementById('2-6').disabled=true;
	document.getElementById('2-7').disabled=true;
	document.getElementById('2-8').disabled=true;
	document.getElementById('2-9').disabled=true;
	document.getElementById('2-10').disabled=true;
	document.getElementById('2-1').checked=false;
	document.getElementById('2-2').checked=false;
	document.getElementById('2-3').checked=false;
	document.getElementById('2-4').checked=false;
	document.getElementById('2-5').checked=false;
	document.getElementById('2-6').checked=false;
	document.getElementById('2-7').checked=false;
	document.getElementById('2-8').checked=false;
	document.getElementById('2-9').checked=false;
	document.getElementById('2-10').checked=false;
	document.getElementById('cargo1').checked=false;
	document.getElementById('hatch1').checked=false;
	document.getElementById('none1').checked=false;

}

function cycle3Add() {
	document.getElementById('grid3').style.display = "";
	document.getElementById('cycle3Add').style.display = "none";
	document.getElementById('cycle2Remove').style.display = "none";
}

function cycle3Remove() {
	document.getElementById('grid3').style.display = "none";
	document.getElementById('cycle3Add').style.display = "";
	document.getElementById('cycle2Remove').style.display = "";
	document.getElementById('3-1').disabled=true;
	document.getElementById('3-2').disabled=true;
	document.getElementById('3-3').disabled=true;
	document.getElementById('3-4').disabled=true;
	document.getElementById('3-5').disabled=true;
	document.getElementById('3-6').disabled=true;
	document.getElementById('3-7').disabled=true;
	document.getElementById('3-8').disabled=true;
	document.getElementById('3-9').disabled=true;
	document.getElementById('3-10').disabled=true;
	document.getElementById('3-1').checked=false;
	document.getElementById('3-2').checked=false;
	document.getElementById('3-3').checked=false;
	document.getElementById('3-4').checked=false;
	document.getElementById('3-5').checked=false;
	document.getElementById('3-6').checked=false;
	document.getElementById('3-7').checked=false;
	document.getElementById('3-8').checked=false;
	document.getElementById('3-9').checked=false;
	document.getElementById('3-10').checked=false;
	document.getElementById('cargo').checked=false;
	document.getElementById('hatch').checked=false;
	document.getElementById('none').checked=false;
}

function cycle1Remove () {
	document.getElementById('grid1').style.display = "none";
	document.getElementById('cycle2Add').style.display = "";
	document.getElementById('1-1').disabled=true;
	document.getElementById('1-2').disabled=true;
	document.getElementById('1-3').disabled=true;
	document.getElementById('1-4').disabled=true;
	document.getElementById('1-5').disabled=true;
	document.getElementById('1-6').disabled=true;
	document.getElementById('1-7').disabled=true;
	document.getElementById('1-8').disabled=true;
	document.getElementById('1-9').disabled=true;
	document.getElementById('1-10').disabled=true;
	document.getElementById('1-1').checked=false;
	document.getElementById('1-2').checked=false;
	document.getElementById('1-3').checked=false;
	document.getElementById('1-4').checked=false;
	document.getElementById('1-5').checked=false;
	document.getElementById('1-6').checked=false;
	document.getElementById('1-7').checked=false;
	document.getElementById('1-8').checked=false;
	document.getElementById('1-9').checked=false;
	document.getElementById('1-10').checked=false;
}

function didNotExit () {
	cycle3Remove();
	cycle2Remove();
	cycle1Remove();
}

function exited() {
	document.getElementById('grid1').style.display = "block";
	document.getElementById('cycle2Add').style.display = "block";
}

function cycle4Add () {
	document.getElementById('grid4').style.display = "";
	document.getElementById('cycle4Add').style.display = "none";
	document.getElementById('cycle3Remove').style.display = "none";
}

function cycle4Remove () {
	document.getElementById('grid4').style.display = "none";
	document.getElementById('cycle4Add').style.display = "";
	document.getElementById('cycle3Remove').style.display = "";
}

function optionid(){
	if (document.getElementById('T').clicked == true)
		document.getElementById('option').setID == "T";

	if (document.getElementById('I').clicked == true)
	document.getElementById('option').setID == "I";

	if (document.getElementById('C').clicked == true)
	document.getElementById('option').setID == "C";
}

/* function displayFarNear() {
	if (document.getElementById('1-7').checked == true) {
		document.getElementById('1-9').style.display = "inline";
		document.getElementById('1-10').style.display = "inline";
	}
	if (document.getElementById('2-7').checked == true) {
		document.getElementById('2-9').style.display = "inline";
		document.getElementById('2-10').style.display = "inline";
	}
	if (document.getElementById('3-7').checked == true) {
		document.getElementById('3-9').style.display = "inline";
		document.getElementById('3-10').style.display = "inline";
	}
	if (document.getElementById('1-8').checked == true) {
		document.getElementById('1-9').style.display = "inline";
		document.getElementById('1-10').style.display = "inline";
	}
	if (document.getElementById('2-8').checked == true) {
		document.getElementById('2-9').style.display = "inline";
		document.getElementById('2-10').style.display = "inline";
	}
	if (document.getElementById('3-8').checked == true) {
		document.getElementById('3-9').style.display = "inline";
		document.getElementById('3-10').style.display = "inline";
	}
}
 */

function cargohatch() {
	if ((document.getElementById('cargo2').checked == true) && (document.getElementById('exitY').checked == true)){
		document.getElementById('1-1').disabled = false;
		document.getElementById('grid1').style.display = "block";
		document.getElementById('cycle2Add').style.display = "block";
	}
	if ((document.getElementById('cargo2').checked == true) && (document.getElementById('exitY').checked == true)){
		document.getElementById('1-2').disabled = false;
	}
	if ((document.getElementById('cargo2').checked == true) && (document.getElementById('exitY').checked == true)){
		document.getElementById('1-3').disabled = false;
	}
	if ((document.getElementById('hatch2').checked == true) && (document.getElementById('exitY').checked == true)){
		document.getElementById('1-1').disabled = false;
		document.getElementById('grid1').style.display = "block";
		document.getElementById('cycle2Add').style.display = "block";
	}
	if ((document.getElementById('hatch2').checked == true) && (document.getElementById('exitY').checked == true)){
		document.getElementById('1-2').disabled = false;
	}
	if ((document.getElementById('hatch2').checked == true) && (document.getElementById('exitY').checked == true)){
		document.getElementById('1-3').disabled = false;
	}
	if (document.getElementById('cargo1').checked == true){
		document.getElementById('2-1').disabled = false;
	}
	if (document.getElementById('cargo1').checked == true){
		document.getElementById('2-2').disabled = false;
	}
	if (document.getElementById('cargo1').checked == true){
		document.getElementById('2-3').disabled = false;
	}
	if (document.getElementById('hatch1').checked == true){
		document.getElementById('2-1').disabled = false;
	}
	if (document.getElementById('hatch1').checked == true){
		document.getElementById('2-2').disabled = false;
	}
	if (document.getElementById('hatch1').checked == true){
		document.getElementById('2-3').disabled = false;
	}
	if (document.getElementById('cargo').checked == true){
		document.getElementById('3-1').disabled = false;
	}
	if (document.getElementById('cargo').checked == true){
		document.getElementById('3-2').disabled = false;
	}
	if (document.getElementById('cargo').checked == true){
		document.getElementById('3-3').disabled = false;
	}
	if (document.getElementById('hatch').checked == true){
		document.getElementById('3-1').disabled = false;
	}
	if (document.getElementById('hatch').checked == true){
		document.getElementById('3-2').disabled = false;
	}
	if (document.getElementById('hatch').checked == true){
		document.getElementById('3-3').disabled = false;
	}
	/*if (document.getElementById('cargo3').checked == true){
		document.getElementById('4-1').disabled = false;
	}
	if (document.getElementById('cargo3').checked == true){
		document.getElementById('4-2').disabled = false;
	}
	if (document.getElementById('cargo3').checked == true){
		document.getElementById('4-3').disabled = false;
	}
	if (document.getElementById('hatch3').checked == true){
		document.getElementById('4-1').disabled = false;
	}
	if (document.getElementById('hatch3').checked == true){
		document.getElementById('4-2').disabled = false;
	}
	if (document.getElementById('hatch3').checked == true){
		document.getElementById('4-3').disabled = false;
	}*/
	if (document.getElementById('1-1').checked == true){
		document.getElementById('1-4').disabled = false;
	}
	if (document.getElementById('1-1').checked == true){
		document.getElementById('1-5').disabled = false;
	}
	if (document.getElementById('1-1').checked == true){
		document.getElementById('1-6').disabled = false;
	}
	if (document.getElementById('1-4').checked == true){
		document.getElementById('1-7').disabled = false;
	}
	if (document.getElementById('1-4').checked == true){
		document.getElementById('1-8').disabled = false;
	}
	if (document.getElementById('1-5').checked == true){
		document.getElementById('1-7').disabled = false;
	}
	if (document.getElementById('1-5').checked == true){
		document.getElementById('1-8').disabled = false;
	}
	if (document.getElementById('1-6').checked == true){
		document.getElementById('1-7').disabled = false;
	}
	if (document.getElementById('1-6').checked == true){
		document.getElementById('1-8').disabled = false;
	}
	if (document.getElementById('1-7').checked == true){
		document.getElementById('1-9').disabled = false;
	}
	if (document.getElementById('1-7').checked == true){
		document.getElementById('1-10').disabled = false;
	}
	if (document.getElementById('1-8').checked == true){
		document.getElementById('1-9').disabled = false;
	}
	if (document.getElementById('1-8').checked == true){
		document.getElementById('1-10').disabled = false;
	}
	if (document.getElementById('1-2').checked == true){
		document.getElementById('cargo1').disabled = false;
	}
	if (document.getElementById('1-3').checked == true){
		document.getElementById('cargo1').disabled = false;
	}
	if (document.getElementById('1-9').checked == true){
		document.getElementById('cargo1').disabled = false;
	}
	if (document.getElementById('1-10').checked == true){
		document.getElementById('cargo1').disabled = false;
	}
	if (document.getElementById('1-2').checked == true){
		document.getElementById('hatch1').disabled = false;
	}
	if (document.getElementById('1-3').checked == true){
		document.getElementById('hatch1').disabled = false;
	}
	if (document.getElementById('1-9').checked == true){
		document.getElementById('hatch1').disabled = false;
	}
	if (document.getElementById('1-10').checked == true){
		document.getElementById('hatch1').disabled = false;
	}
	if (document.getElementById('1-2').checked == true){
		document.getElementById('none1').disabled = false;
	}
	if (document.getElementById('1-3').checked == true){
		document.getElementById('none1').disabled = false;
	}
	if (document.getElementById('1-9').checked == true){
		document.getElementById('none1').disabled = false;
	}
	if (document.getElementById('1-10').checked == true){
		document.getElementById('none1').disabled = false;
	}
	if (document.getElementById('2-1').checked == true){
		document.getElementById('2-4').disabled = false;
	}
	if (document.getElementById('2-1').checked == true){
		document.getElementById('2-5').disabled = false;
	}
	if (document.getElementById('2-1').checked == true){
		document.getElementById('2-6').disabled = false;
	}
	if (document.getElementById('2-4').checked == true){
		document.getElementById('2-7').disabled = false;
	}
	if (document.getElementById('2-4').checked == true){
		document.getElementById('2-8').disabled = false;
	}
	if (document.getElementById('2-5').checked == true){
		document.getElementById('2-7').disabled = false;
	}
	if (document.getElementById('2-5').checked == true){
		document.getElementById('2-8').disabled = false;
	}
	if (document.getElementById('2-6').checked == true){
		document.getElementById('2-7').disabled = false;
	}
	if (document.getElementById('2-6').checked == true){
		document.getElementById('2-8').disabled = false;
	}
	if (document.getElementById('2-7').checked == true){
		document.getElementById('2-9').disabled = false;
	}
	if (document.getElementById('2-7').checked == true){
		document.getElementById('2-10').disabled = false;
	}
	if (document.getElementById('2-8').checked == true){
		document.getElementById('2-9').disabled = false;
	}
	if (document.getElementById('2-8').checked == true){
		document.getElementById('2-10').disabled = false;
	}
	if (document.getElementById('2-2').checked == true){
		document.getElementById('cargo').disabled = false;
	}
	if (document.getElementById('2-3').checked == true){
		document.getElementById('cargo').disabled = false;
	}
	if (document.getElementById('2-9').checked == true){
		document.getElementById('cargo').disabled = false;
	}
	if (document.getElementById('2-10').checked == true){
		document.getElementById('cargo').disabled = false;
	}
	if (document.getElementById('2-2').checked == true){
		document.getElementById('hatch').disabled = false;
	}
	if (document.getElementById('2-3').checked == true){
		document.getElementById('hatch').disabled = false;
	}
	if (document.getElementById('2-9').checked == true){
		document.getElementById('hatch').disabled = false;
	}
	if (document.getElementById('2-10').checked == true){
		document.getElementById('hatch').disabled = false;
	}
	if (document.getElementById('2-2').checked == true){
		document.getElementById('none').disabled = false;
	}
	if (document.getElementById('2-3').checked == true){
		document.getElementById('none').disabled = false;
	}
	if (document.getElementById('2-9').checked == true){
		document.getElementById('none').disabled = false;
	}
	if (document.getElementById('2-10').checked == true){
		document.getElementById('none').disabled = false;
	}
	if (document.getElementById('3-1').checked == true){
		document.getElementById('3-4').disabled = false;
	}
	if (document.getElementById('3-1').checked == true){
		document.getElementById('3-5').disabled = false;
	}
	if (document.getElementById('3-1').checked == true){
		document.getElementById('3-6').disabled = false;
	}
	if (document.getElementById('3-4').checked == true){
		document.getElementById('3-7').disabled = false;
	}
	if (document.getElementById('3-4').checked == true){
		document.getElementById('3-8').disabled = false;
	}
	if (document.getElementById('3-5').checked == true){
		document.getElementById('3-7').disabled = false;
	}
	if (document.getElementById('3-5').checked == true){
		document.getElementById('3-8').disabled = false;
	}
	if (document.getElementById('3-6').checked == true){
		document.getElementById('3-7').disabled = false;
	}
	if (document.getElementById('3-6').checked == true){
		document.getElementById('3-8').disabled = false;
	}
	if (document.getElementById('3-7').checked == true){
		document.getElementById('3-9').disabled = false;
	}
	if (document.getElementById('3-7').checked == true){
		document.getElementById('3-10').disabled = false;
	}
	if (document.getElementById('3-8').checked == true){
		document.getElementById('3-9').disabled = false;
	}
	if (document.getElementById('3-8').checked == true){
		document.getElementById('3-10').disabled = false;
	}
	/*if (document.getElementById('3-2').checked == true){
		document.getElementById('cargo3').disabled = false;
	}
	if (document.getElementById('3-3').checked == true){
		document.getElementById('cargo3').disabled = false;
	}
	if (document.getElementById('3-9').checked == true){
		document.getElementById('cargo3').disabled = false;
	}
	if (document.getElementById('3-10').checked == true){
		document.getElementById('cargo3').disabled = false;
	}
	if (document.getElementById('3-2').checked == true){
		document.getElementById('hatch3').disabled = false;
	}
	if (document.getElementById('3-3').checked == true){
		document.getElementById('hatch3').disabled = false;
	}
	if (document.getElementById('3-9').checked == true){
		document.getElementById('hatch3').disabled = false;
	}
	if (document.getElementById('3-10').checked == true){
		document.getElementById('hatch3').disabled = false;
	}
	if (document.getElementById('3-2').checked == true){
		document.getElementById('none3').disabled = false;
	}
	if (document.getElementById('3-3').checked == true){
		document.getElementById('none3').disabled = false;
	}
	if (document.getElementById('3-9').checked == true){
		document.getElementById('none3').disabled = false;
	}
	if (document.getElementById('3-10').checked == true){
		document.getElementById('none3').disabled = false;
	}
	/*if (document.getElementById('4-1').checked == true){
		document.getElementById('4-4').disabled = false;
	}
	if (document.getElementById('4-1').checked == true){
		document.getElementById('4-5').disabled = false;
	}
	if (document.getElementById('4-1').checked == true){
		document.getElementById('4-6').disabled = false;
	}
	if (document.getElementById('4-4').checked == true){
		document.getElementById('4-7').disabled = false;
	}
	if (document.getElementById('4-4').checked == true){
		document.getElementById('4-8').disabled = false;
	}
	if (document.getElementById('4-5').checked == true){
		document.getElementById('4-7').disabled = false;
	}
	if (document.getElementById('4-5').checked == true){
		document.getElementById('4-8').disabled = false;
	}
	if (document.getElementById('4-6').checked == true){
		document.getElementById('4-7').disabled = false;
	}
	if (document.getElementById('4-6').checked == true){
		document.getElementById('4-8').disabled = false;
	}
	if (document.getElementById('4-7').checked == true){
		document.getElementById('4-9').disabled = false;
	}
	if (document.getElementById('4-7').checked == true){
		document.getElementById('4-10').disabled = false;
	}
	if (document.getElementById('4-8').checked == true){
		document.getElementById('4-9').disabled = false;
	}
	if (document.getElementById('4-8').checked == true){
		document.getElementById('4-10').disabled = false;
	} */
}

document.onkeydown = checkKey;
function checkKey(e) {
	if(macro == 1) {
		if (e.keyCode == '38') {
			mainFunction(1);
		} else if (e.keyCode == '40') {
			mainFunction(0);
		} else if (e.keyCode == '37') {
			mainFunction(2);
		} else if (e.keyCode == '39') {
			mainFunction(3);
		} else if (e.keyCode == '46'){
			document.getElementById("remove").click();
		} else if (e.keyCode == '220') {
			document.getElementById("enter").click();
		} else if (e.keyCode == '8') {
			document.getElementById("remove").click();
		}
	}
}

function updateFunction() {
	while (0 > goalIndex) {
		goalIndex += goalList.length;
	}

	while ((goalIndex + 1) > goalList.length) {
		goalIndex -= goalList.length;
	}

	while (0 > itemIndex) {
		itemIndex += itemList.length;
	}

	while ((itemIndex + 1) > itemList.length) {
		itemIndex -= itemList.length;
	}
	while (0 > cargoIndex) {
		cargoIndex += cargoList.length;
	}

	while ((cargoIndex + 1) > cargoList.length) {
		cargoIndex -= cargoList.length;
	}

	while (0 > hatchIndex) {
		hatchIndex += hatchList.length;
	}

	while ((hatchIndex + 1) > hatchList.length) {
		hatchIndex -= hatchList.length;
	}
	if (itemList[itemIndex].indexOf("Cargo") != -1) {
		document.getElementById("cargospecific").setAttribute("style", "display: block;");
		document.getElementById("hatchspecific").setAttribute("style", "display: none;");
	}
	else {
		document.getElementById("hatchspecific").setAttribute("style", "display: block;");
		document.getElementById("cargospecific").setAttribute("style", "display: none;");
	}
	if (itemList[itemIndex].indexOf("Hatch") != -1) {
		if (hatchIndex < 6)
			goalIndex = hatchIndex;
		else if (hatchIndex == 6)
			goalIndex = 9;
		else if (hatchIndex == 7)
			goalIndex = 10;
		document.getElementById("g" + goalIndex).click();
	}
	else {
		if (cargoIndex < 3)
			goalIndex = cargoIndex + 6;
		else if (cargoIndex == 3)
			goalIndex = 9;
		else if (cargoIndex == 4)
			goalIndex = 10;
		document.getElementById("g" + goalIndex).click();
	}
	document.getElementById("i" + itemIndex).click();
	readList();
}

function indexChange(x) {
	if (itemList[itemIndex].indexOf("Cargo") != -1) {
		cargoIndex += x;
	}
	else {
		hatchIndex += x;
	}
}

function mainFunction(x) {
	if (x == 0) {
		document.getElementById("i" + itemIndex).setAttribute("style", "color: black");
		document.getElementById("g" + goalIndex).setAttribute("style", "color: black");
		indexChange(1);
	} else if (x == 1) {
		document.getElementById("i" + itemIndex).setAttribute("style", "color: black");
		document.getElementById("g" + goalIndex).setAttribute("style", "color: black");
		indexChange(-1);
	} else if (x == 2) {
		document.getElementById("i" + itemIndex).setAttribute("style", "color: black");
		document.getElementById("g" + goalIndex).setAttribute("style", "color: black");
		itemIndex -= 1;
	} else if (x == 3) {
		document.getElementById("i" + itemIndex).setAttribute("style", "color: black");
		document.getElementById("g" + goalIndex).setAttribute("style", "color: black");
		itemIndex += 1;
	} else if (x == 4) {
		eventList.pop();
		timeList.pop();
	} else if (x == 5) {
		if (eventList.length != timeList.length) {
			updateFunction();
			eventList.push(itemList[itemIndex] + "  -  " + goalList[goalIndex]);
		} else {
			updateFunction();
			eventList.push(itemList[itemIndex] + "  -  " + goalList[goalIndex]);
			timeList.push(timeToDigits(seconds));
		}
	} else if (x == 6) {
		eventList.pop();
	} else {}
	updateFunction();
	picFunc();
}

function picFunc() {
	var img1 = document.getElementById("teleopPic1");
	var img2 = document.getElementById("teleopPic2");
    var img3 = document.getElementById("teleopPic3");

	if (itemIndex == 0) {
		img1.src = "images/loadingstationhatch.png";
	} else if (itemIndex == 1) {
		img1.src = "images/loadingZoneCargo.png";
	} else if (itemIndex == 2) {
		img1.src = "images/cargodepot.png";
	} else if (itemIndex == 3) {
		img1.src = "images/cargo_ball.PNG";
	} else if (itemIndex == 4) {
		img1.src = "images/hatch.png";
	}

	if (goalIndex == 0) {
		img2.src = "images/Rocket Level 1 Left.png";
        img3.src = "images/Rocket Level 1 Left.png";
	} else if (goalIndex == 1) {
		img2.src = "images/Rocket Level 1 Right.png";
        img3.src = "images/Rocket Level 1 Right.png";
	} else if (goalIndex == 2) {
		img2.src = "images/Rocket Level 2 Left.png";
        img3.src = "images/Rocket Level 2 Left.png";
	} else if (goalIndex == 3) {
		img2.src = "images/Rocket Level 2 Right.png";
        img3.src = "images/Rocket Level 2 Right.png";
	} else if (goalIndex == 4) {
		img2.src = "images/Rocket Level 3 Left.png";
        img3.src = "images/Rocket Level 3 Left.png";
	} else if (goalIndex == 5) {
		img2.src = "images/Rocket Level 3 Right.png";
        img3.src = "images/Rocket Level 3 Right.png";
	} else if (goalIndex == 6) {
		img2.src = "images/Rocket Level 1.png";
        img3.src = "images/Rocket Level 1.png";
	} else if (goalIndex == 7) {
		img2.src = "images/Rocket Level 2.png";
        img3.src = "images/Rocket Level 2.png";
	} else if (goalIndex == 8) {
		img2.src = "images/Rocket Level 3.png";
        img3.src = "images/Rocket Level 3.png";
	} else if (goalIndex == 9) {
		img2.src = "images/cargoship.png";
        img3.src = "images/cargoship.png";
	} else if (goalIndex == 10) {
		img2.src = "images/failImg.png";
        img3.src = "images/failImg.png";
	}
}

function changeTeleBack() {
	console.log("changeFuncBack");
	document.getElementById("teleopChange").style.display = "inline-block";
	document.getElementById("teleopChange1").style.display = "inline-block";
	document.getElementById("teleopChanges").style.display = "none";
	document.getElementById("teleopChangess").style.display = "none";
}

function changeTele() {
	console.log("changeFunc");
	document.getElementById("teleopChange").style.display = "none";
	document.getElementById("teleopChange1").style.display = "none";
	document.getElementById("teleopChanges").style.display = "inline-block";
	document.getElementById("teleopChangess").style.display = "inline-block";
}

function readList() {
	document.getElementById("eventArea").innerHTML = ("");
	i = 0;
	while (i < eventList.length) {
		document.getElementById("eventArea").innerHTML += (eventList[i] + "</br>");
		i++;
	}
}

/*

Endgame

*/

function climbAbility() {
	var checkBox = document.getElementById("climbAbility")
	var climb = document.getElementById("climb");

	if (checkBox.checked == true){
		climb.style.display = "block";
		//document.getElementById("climbtime100").style.display = "block";
	        //document.getElementById("timepara").style.display = "block";
	        document.getElementById("level2").hidden = false;
	        document.getElementById("level3").hidden = false;

	} else {
		climb.style.display = "none";
		document.getElementById("climbBox").checked = false;
		//document.getElementById("climbtime100").style.display = "none";
		//document.getElementById("timepara").style.display = "none";
	}
}

function buddyClimbGiven() {
	var checkBox = document.getElementById("buddyClimbBox");
	if (checkBox.checked == true) {
		document.getElementById("climbAbility").checked = false;
		document.getElementById("climb").checked = false;
		document.getElementById("buddyLevel1").hidden = false;
		document.getElementById("buddyLevel2").hidden = false;
		document.getElementById("attempt").hidden = true;
		//document.getElementById("timepara").hidden = true;
		//document.getElementById("timeinput").hidden = true;
		document.getElementById("climb").hidden = true;
		document.getElementById("level").hidden = true;
		climbAbility();
	} else {
		document.getElementById("buddyLevel1").hidden = true;
		document.getElementById("buddyLevel2").hidden = true;
		document.getElementById("level2").hidden = true;
		document.getElementById("level3").hidden = true;
		document.getElementById("level").hidden = false;
		document.getElementById("attempt").hidden = false;
		document.getElementById("timepara").hidden = false;
		document.getElementById("timeinput").hidden = false;
		document.getElementById("climb").hidden = false;
	}
}

function climbSuccess() {
	var checkBox = document.getElementById("climbBox")
	if (checkBox.checked == true){
		document.getElementById("level2").hidden = false;
		document.getElementById("level3").hidden = false;
	} else {
		document.getElementById("level2").hidden = true;
		document.getElementById("level3").hidden = true;
	}
}

/*

Scan Variables

*/
var teamNo = 0;
var matchNo = 0;

var compId = 4;

// Sandstorm Exited Hab Platform
var sandstormExHP = 0;

var startPos = 0;
var preload = 0;

// NOT USING IN DATABASE
var pickup1 = 0;
var pickup2 = 0;
////////////////////////

var sandstormnoOfCargo = 0;
var sandstormnoOfHatch = 0;

var sandstormRRLevel1NH = 0;
var sandstormLRLevel1NH = 0;

var sandstormRRLevel1FH = 0;
var sandstormLRLevel1FH = 0;

var sandstormRRLevel1C = 0;
var sandstormLRLevel1C = 0;

var sandstormRRLevel2NH = 0;
var sandstormLRLevel2NH = 0;

var sandstormRRLevel2FH = 0;
var sandstormLRLevel2FH = 0;

var sandstormRRLevel2C = 0;
var sandstormLRLevel2C = 0;

var sandstormRRLevel3NH = 0;
var sandstormLRLevel3NH = 0;

var sandstormRRLevel3FH = 0;
var sandstormLRLevel3FH = 0;

var sandstormRRLevel3C = 0;
var sandstormLRLevel3C = 0;

var sandstormmissed = 0;

// TELEOP VARIABLES
var teleop_noOfCargo =  0;
var teleop_noOfHatch = 0;

var teleop_groundCargo = 0;
var teleop_groundHatch = 0;

var teleop_RLevel1NH = 0;
var teleop_RLevel1FH = 0;

var teleop_RLevel2NH = 0;
var teleop_RLevel2FH = 0;

var teleop_RLevel3NH = 0;
var teleop_RLevel3FH = 0;

var teleop_RLevel1C = 0;
var teleop_RLevel2C = 0;
var teleop_RLevel3C = 0;

var teleop_missed = 0;

var defense = 0;
var endgame_climbLevel = 0;
var endgame_fail = 0;
var endgame_climbTime = 0;
var endgame_buddyClimbGiven = 0;
var endgame_buddyClimbLvl = 0;

function dataSubmit() {
	// Disable submit button
	$("#btnSubmit").attr("disabled", true);

	// Change style of disabled button
	document.getElementById("btnSubmit").value = "Loading...";
	document.getElementById("btnSubmit").style = "opacity: 0.2";

	console.log("worked");
	teamNo = document.getElementById("number").value;
	matchNo = document.getElementById("matchType").value;
	readFunction();
	//document.getElementById('name').innerHTML = document.getElementById('number').value;
	document.getElementById("teamNo").value = teamNo;
	document.getElementById("matchNo").value = matchNo;
	document.getElementById("compId").value = compId;
	document.getElementById("preload").value = preload;
	document.getElementById("sandstormExHP").value = sandstormExHP;
	document.getElementById("sandstormnoOfCargo").value = sandstormnoOfCargo;
	document.getElementById("sandstormnoOfHatch").value = sandstormnoOfHatch;

	document.getElementById("sandstormRRLevel1NH").value = sandstormRRLevel1NH;
	document.getElementById("sandstormLRLevel1NH").value = sandstormLRLevel1NH;
	document.getElementById("sandstormRRLevel1FH").value = sandstormRRLevel1FH;
	document.getElementById("sandstormLRLevel1FH").value = sandstormLRLevel1FH;
	document.getElementById("sandstormRRLevel1C").value = sandstormRRLevel1C;
	document.getElementById("sandstormLRLevel2C").value = sandstormLRLevel2C;

	document.getElementById("sandstormRRLevel2NH").value = sandstormRRLevel2NH;
	document.getElementById("sandstormLRLevel2NH").value = sandstormLRLevel2NH;
	document.getElementById("sandstormRRLevel2FH").value = sandstormRRLevel2FH;
	document.getElementById("sandstormLRLevel2FH").value = sandstormLRLevel2FH;
	document.getElementById("sandstormRRLevel2C").value = sandstormRRLevel2C;
	document.getElementById("sandstormLRLevel2C").value = sandstormLRLevel2C;

	document.getElementById("sandstormRRLevel3NH").value = sandstormRRLevel3NH;
	document.getElementById("sandstormLRLevel3NH").value = sandstormLRLevel3NH;
	document.getElementById("sandstormRRLevel3FH").value = sandstormRRLevel3FH;
	document.getElementById("sandstormLRLevel3FH").value = sandstormLRLevel3FH;
	document.getElementById("sandstormRRLevel3C").value = sandstormRRLevel3C;
	document.getElementById("sandstormLRLevel3C").value = sandstormLRLevel3C;

	document.getElementById("sandstormmissed").value = sandstormmissed;

	document.getElementById("teleop_noOfCargo").value = teleop_noOfCargo;
	document.getElementById("teleop_noOfHatch").value = teleop_noOfHatch;
	document.getElementById("teleop_groundCargo").value = teleop_groundCargo;
	document.getElementById("teleop_groundHatch").value = teleop_groundHatch;

	document.getElementById("teleop_RLevel1NH").value = teleop_RLevel1NH;
	document.getElementById("teleop_RLevel1FH").value = teleop_RLevel1FH;

	document.getElementById("teleop_RLevel2NH").value = teleop_RLevel2NH;
	document.getElementById("teleop_RLevel2FH").value = teleop_RLevel2FH;

	document.getElementById("teleop_RLevel3NH").value = teleop_RLevel3NH;
	document.getElementById("teleop_RLevel3FH").value = teleop_RLevel3FH;

	document.getElementById("teleop_RLevel1C").value = teleop_RLevel1C;
	document.getElementById("teleop_RLevel2C").value = teleop_RLevel2C;
	document.getElementById("teleop_RLevel3C").value = teleop_RLevel3C;

	document.getElementById("teleop_missed").value = teleop_missed;

	document.getElementById("defense").value = defense;
	document.getElementById("endgame_climbLevel").value = endgame_climbLevel;
	document.getElementById("endgame_fail").value = endgame_fail;
	//document.getElementById("endgame_climbTime").value = endgame_climbTime;
	document.getElementById("endgame_buddyClimbGiven").value = endgame_buddyClimbGiven;
	document.getElementById("endgame_buddyClimbLvl").value = endgame_buddyClimbLvl;
	document.dataForm.submit();
}

var allVars = [];

function readFunction() {
	// STARTING POSITION
	startPos = document.getElementById("startPos").value;

	// IF EXITED THE HABITAT
	if (document.getElementById("exitY").checked) {
		sandstormExHP = 1;
	} else if (document.getElementById("exitN").checked) {
		sandstormExHP = 0;
	}

	// PRELOAD
	if (document.getElementById("cargo2").checked) {
		preload = 1;
		sandstormnoOfCargo++;
	} else if (document.getElementById("hatch2").checked) {
		preload = 0;
		sandstormnoOfHatch++;
	}

	// CYCLE 1
	if (document.getElementById("1-1").checked) {
		if (document.getElementById("1-4").checked) {
			if (document.getElementById("1-7").checked) {
				if (preload == 1) {
					sandstormLRLevel1C++;
				}
				else if (document.getElementById("1-9").checked) {
					if (preload == 0) {
						sandstormLRLevel1FH++;
					}
				} else if (document.getElementById("1-10").checked) {
					if (preload == 0) {
						sandstormLRLevel1NH++;
					}
				}
			} else if (document.getElementById("1-8").checked) {
				if (preload == 1) {
						sandstormRRLevel1C++;
					}
				else if (document.getElementById("1-9").checked) {
					if (preload == 0) {
						sandstormRRLevel1FH++;
					}
				} else if (document.getElementById("1-10").checked) {
					if (preload == 0) {
						sandstormRRLevel1NH++;
					}
				}
			}

		} else if (document.getElementById("1-5").checked) {
			if (document.getElementById("1-7").checked) {
				if (preload == 1) {
					sandstormLRLevel2C++;
				}
				else if (document.getElementById("1-9").checked) {
					if (preload == 0) {
						sandstormLRLevel2FH++;
					}
				} else if (document.getElementById("1-10").checked) {
					if (preload == 0) {
						sandstormLRLevel2NH++;
					}
				}
			} else if (document.getElementById("1-8").checked) {
				if (preload == 1) {
					sandstormRRLevel2C++;
				}
				else if (document.getElementById("1-9").checked) {
					if (preload == 0) {
						sandstormRRLevel2FH++;
					}
				} else if (document.getElementById("1-10").checked) {
					if (preload == 0) {
						sandstormRRLevel2NH++;
					}
				}
			}


		} else if (document.getElementById("1-6").checked) {
			if (document.getElementById("1-7").checked) {
				if (preload == 1) {
					sandstormLRLevel3C++;
				}
				else if (document.getElementById("1-9").checked) {
					if (preload == 0) {
						sandstormLRLevel3FH++;
					}
				} else if (document.getElementById("1-10").checked) {
					if (preload == 0) {
						sandstormLRLevel3NH++;
					}
				}
			} else if (document.getElementById("1-8").checked) {
				if (preload == 1) {
					sandstormRRLevel3C++;
				}
				else if (document.getElementById("1-9").checked) {
					if (preload == 0) {
						sandstormRRLevel3FH++;
					}
				} else if (document.getElementById("1-10").checked) {
					if (preload == 0) {
						sandstormRRLevel3NH++;
					}
				}
			}
		}
	}

	// Pickup 1
	if (document.getElementById("cargo1").checked) {
		pickup1 = 1;
		sandstormnoOfCargo++;
	} else if (document.getElementById("hatch1").checked) {
		pickup1 = 0;
		sandstormnoOfHatch++;
	}

	// CYCLE 2
	if (document.getElementById("2-1").checked) {
		if (document.getElementById("2-4").checked) {
			if (document.getElementById("2-7").checked) {
				if (pickup1 == 1) {
					sandstormLRLevel1C++;
				}
				else if (document.getElementById("2-9").checked) {
					if (pickup1 == 0) {
						sandstormLRLevel1FH++;
					}
				} else if (document.getElementById("2-10").checked) {
					if (pickup1 == 0) {
						sandstormLRLevel1NH++;
					}
				}
			} else if (document.getElementById("2-8").checked) {
				if (pickup1 == 1) {
					sandstormRRLevel1C++;
				}
				else if (document.getElementById("2-9").checked) {
					if (pickup1 == 0) {
						sandstormRRLevel1FH++;
					}
				} else if (document.getElementById("2-10").checked) {
					if (pickup1 == 0) {
						sandstormRRLevel1NH++;
					}
				}
			}

		} else if (document.getElementById("2-5").checked) {
			if (document.getElementById("2-7").checked) {
				if (pickup1 == 1) {
						sandstormLRLevel2C++;
					}
				else if (document.getElementById("2-9").checked) {
					if (pickup1 == 0) {
						sandstormLRLevel2FH++;
					}
				} else if (document.getElementById("2-10").checked) {
					if (pickup1 == 0) {
						sandstormLRLevel2NH++;
					}
				}
			} else if (document.getElementById("2-8").checked) {
				if (pickup1 == 1) {
						sandstormRRLevel2C++;
					}
				else if (document.getElementById("2-9").checked) {
					if (pickup1 == 0) {
						sandstormRRLevel2FH++;
					}
				} else if (document.getElementById("2-10").checked) {
					if (pickup1 == 0) {
						sandstormRRLevel2NH++;
					}
				}
			}


		} else if (document.getElementById("2-6").checked) {
			if (document.getElementById("2-7").checked) {
				if (pickup1 == 1) {
						sandstormLRLevel3C++;
					}
				else if (document.getElementById("2-9").checked) {
					if (pickup1 == 0) {
						sandstormLRLevel3FH++;
					}
				} else if (document.getElementById("2-10").checked) {
					if (pickup1 == 0) {
						sandstormLRLevel3NH++;
					}
				}
			} else if (document.getElementById("2-8").checked) {
				if (pickup1 == 1) {
						sandstormRRLevel3C++;
					}
				else if (document.getElementById("2-9").checked) {
					if (pickup1 == 0) {
						sandstormRRLevel3FH++;
					}
				} else if (document.getElementById("2-10").checked) {
					if (pickup1 == 0) {
						sandstormRRLevel3NH++;
					}
				}
			}
		}
	}

	// Pickup 2
	if (document.getElementById("cargo").checked) {
		pickup2 = 1;
		sandstormnoOfCargo++;
	} else if (document.getElementById("hatch").checked) {
		pickup2 = 0;
		sandstormnoOfHatch++;
	}

	// CYCLE 3
	if (document.getElementById("3-1").checked) {
		if (document.getElementById("3-4").checked) {
			if (document.getElementById("3-7").checked) {
				if (pickup2 == 1) {
						sandstormLRLevel1C++;
				}
				else if (document.getElementById("3-9").checked) {
					if (pickup2 == 0) {
						sandstormLRLevel1FH++;
					}
				} else if (document.getElementById("3-10").checked) {
					if (pickup2 == 0) {
						sandstormLRLevel1NH++;
					}
				}
			} else if (document.getElementById("3-8").checked) {
				if (pickup2 == 1) {
						sandstormRRLevel1FC++;
				}
				else if (document.getElementById("3-9").checked) {
					if (pickup2 == 0) {
						sandstormRRLevel1FH++;
					}
				} else if (document.getElementById("3-10").checked) {
					if (pickup2 == 0) {
						sandstormRRLevel1NH++;
					}
				}
			}

		} else if (document.getElementById("3-5").checked) {
			if (document.getElementById("3-7").checked) {
				if (pickup2 == 1) {
						sandstormLRLevel2C++;
				}
				else if (document.getElementById("3-9").checked) {
					if (pickup2 == 0) {
						sandstormLRLevel2FH++;
					}
				} else if (document.getElementById("3-10").checked) {
					if (pickup2 == 0) {
						sandstormLRLevel2NH++;
					}
				}
			} else if (document.getElementById("3-8").checked) {
				if (pickup2 == 1) {
						sandstormRRLevel2C++;
				}
				else if (document.getElementById("3-9").checked) {
					if (pickup2 == 0) {
						sandstormRRLevel2FH++;
					}
				} else if (document.getElementById("3-10").checked) {
					if (pickup2 == 0) {
						sandstormRRLevel2NH++;
					}
				}
			}
		} else if (document.getElementById("3-6").checked) {
			if (document.getElementById("3-7").checked) {
				if (pickup2 == 1) {
						sandstormLRLevel3C++;
				}
				else if (document.getElementById("3-9").checked) {
					if (pickup2 == 0) {
						sandstormLRLevel3FH++;
					}
				} else if (document.getElementById("3-10").checked) {
					if (pickup2 == 0) {
						sandstormLRLevel3NH++;
					}
				}
			} else if (document.getElementById("3-8").checked) {
				if (pickup2 == 1) {
						sandstormRRLevel3C++;
				}
				else if (document.getElementById("3-9").checked) {
					if (pickup2 == 0) {
						sandstormRRLevel3FH++;
					}
				} else if (document.getElementById("3-10").checked) {
					if (pickup2 == 0) {
						sandstormRRLevel3NH++;
					}
				}
			}
		}
	}

	for(var i = 0; i < eventList.length; i++) {
		if(eventList[i].indexOf(": Cargo") != -1)
			teleop_noOfCargo++;
		if(eventList[i].indexOf(": Hatch") != -1)
			teleop_noOfHatch++;
		if(eventList[i].indexOf("Ground: Cargo") != -1)
			teleop_groundCargo++;
		if(eventList[i].indexOf("Ground: Hatch") != -1)
			teleop_groundHatch++;

		if(eventList[i].indexOf("Rocket Ship Level 1: Far") != -1 && eventList[i].indexOf(": Cargo") != -1)
			teleop_RLevel1FC++;
		if(eventList[i].indexOf("Rocket Ship Level 1: Near") != -1 && eventList[i].indexOf(": Hatch") != -1)
			teleop_RLevel1NH++;
		if(eventList[i].indexOf("Rocket Ship Level 1: Far") != -1 && eventList[i].indexOf(": Hatch") != -1)
			teleop_RLevel1FH++;
		if(eventList[i].indexOf("Rocket Ship Level 1: Near") != -1 && eventList[i].indexOf(": Cargo") != -1)
			teleop_RLevel1NC++;

		if(eventList[i].indexOf("Rocket Ship Level 2: Far") != -1 && eventList[i].indexOf(": Cargo") != -1)
			teleop_RLevel2FC++;
		if(eventList[i].indexOf("Rocket Ship Level 2: Near") != -1 && eventList[i].indexOf(": Hatch") != -1)
			teleop_RLevel2NH++;
		if(eventList[i].indexOf("Rocket Ship Level 2: Far") != -1 && eventList[i].indexOf(": Hatch") != -1)
			teleop_RLevel2FH++;
		if(eventList[i].indexOf("Rocket Ship Level 2: Near") != -1 && eventList[i].indexOf(": Cargo") != -1)
			teleop_RLevel2NC++;

		if(eventList[i].indexOf("Rocket Ship Level 3: Far") != -1 && eventList[i].indexOf(": Cargo") != -1)
			teleop_RLevel3FC++;
		if(eventList[i].indexOf("Rocket Ship Level 3: Near") != -1 && eventList[i].indexOf(": Hatch") != -1)
			teleop_RLevel3NH++;
		if(eventList[i].indexOf("Rocket Ship Level 3: Far") != -1 && eventList[i].indexOf(": Hatch") != -1)
			teleop_RLevel3FH++;
		if(eventList[i].indexOf("Rocket Ship Level 3: Near") != -1 && eventList[i].indexOf(": Cargo") != -1)
			teleop_RLevel3NC++;

		if(eventList[i].indexOf("Rocket Ship Level 1") != -1 && eventList[i].indexOf(": Cargo") != -1)
			teleop_RLevel1C++;

		if(eventList[i].indexOf("Rocket Ship Level 2") != -1 && eventList[i].indexOf(": Cargo") != -1)
			teleop_RLevel2C++;

		if(eventList[i].indexOf("Rocket Ship Level 3") != -1 && eventList[i].indexOf(": Cargo") != -1)
			teleop_RLevel3C++;

		if(eventList[i].indexOf("Missed") != -1)
			teleop_missed++;
	}

	if (document.getElementById("buddyClimbBox").checked == true) {
		endgame_buddyClimbGiven = 1;
		var e1 = document.getElementById("buddyClimbRobot");
		var e2 = document.getElementById("buddyClimbBuddy");
		endgame_climbLevel = e1.options[e1.selectedIndex].value;
		endgame_buddyClimbLvl = e2.options[e2.selectedIndex].value;
	} else {
		endgame_buddyClimbGiven = 0;
		var e1 = document.getElementById("climbLvl");
		endgame_climbLevel = e1.options[e1.selectedIndex].value;
	}

	if (document.getElementById("defenseCheck").checked == true) {
		defense = 1;
	} else {
		defense = 0;
	}

	//endgame_climbTime = document.getElementById("timeinput").value;

	if (document.getElementById("climbBox").checked == false) {
		endgame_fail = 1;
	}

/*	allVars = [
 		teamNo,
		matchNo,
		teleop_noOfCargo,
		teleop_noOfHatch,
		teleop_groundCargo,
		teleop_groundHatch,
		teleop_RLevel1NH,
		teleop_RLevel1FH,
		teleop_RLevel2NH,
		teleop_RLevel2FH,
		teleop_RLevel3NH,
		teleop_RLevel3FH,
		teleop_RLevel1C,
		teleop_RLevel2C,
		teleop_RLevel3C,
		teleop_missed,
		teleop_missed,
		sandstormExHP,
		preload,
 		sandstormnoOfCargo,
		sandstormnoOfHatch,
		sandstormRRLevel1NH,
		sandstormLRLevel1NH,
		sandstormRRLevel1FH,
		sandstormLRLevel1FH,
		sandstormRRLevel1C,
		sandstormLRLevel1C,
		sandstormRRLevel2NH,
		sandstormLRLevel2NH,
		sandstormRRLevel2FH,
		sandstormLRLevel2FH,
		sandstormRRLevel2C,
		sandstormLRLevel2C,
		sandstormRRLevel3NH,
		sandstormLRLevel3NH,
		sandstormRRLevel3FH,
		sandstormLRLevel3FH,
		sandstormRRLevel3C,
		sandstormLRLevel3C,
		sandstormmissed];

	alert(allVars); */
}
