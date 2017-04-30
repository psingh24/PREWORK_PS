

function growBox() {
	
	document.getElementById('box').style.height = "200px";
	document.getElementById('box').style.width = "200px";

};
	
function blueBox() {
	document.getElementById('box').style.backgroundColor = "blue";
}

function clearBox() {
	document.getElementById('box').style.opacity = "0";
}

function resetBox() {
	document.getElementById('box').style.height = "150px";
	document.getElementById('box').style.width = "150px";
	document.getElementById('box').style.backgroundColor = "orange";
	document.getElementById('box').style.opacity = "10";
	
}


