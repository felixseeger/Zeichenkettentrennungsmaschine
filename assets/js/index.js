function work() {}

/* festlegen der schnittstellen */
let davor = document.getElementById('davor');
let hinten = document.getElementById('hinten');
let vorne = document.getElementById('vorne');

/* einbinden in html mit Prüfung des Inputs und kontitioneler trennung  */
function trennen() {
	const zkTrennung = document.getElementById('zk-tp').value;
	const zkInput = document.getElementById('zk-input').value;

	/* wenn entsprechend gewählt, entsprechend trennen */
	if (davor.checked) {
		vorne.innerHTML = zkInput.split(zkTrennung)[0];
		hinten.innerHTML = zkTrennung + zkInput.split(zkTrennung)[1];
	} else {
		vorne.innerHTML = zkInput.split(zkTrennung)[0] + zkTrennung;
		hinten.innerHTML = zkInput.split(zkTrennung)[1];
	}
}

/* zurücksetzten der inputfelder */
function löschen() {
	document.getElementById('zk-tp').value = '';
	document.getElementById('zk-input').value = '';
	vorne.innerHTML = '';
	hinten.innerHTML = '';
}
