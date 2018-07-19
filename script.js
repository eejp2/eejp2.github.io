function AbrirSaibaMais(){
	document.getElementById("saibamaisbtn").style.visibility = "hidden";
	document.getElementById("saibamaisbtn").style.display = "none";
	document.getElementById("voltarbtn").style.visibility = "visible";
	document.getElementById("voltarbtn").style.display = "block";
	document.getElementById("formdiv").style.visibility = "hidden";
	document.getElementById("formdiv").style.display = "none";
	document.getElementById("formdiv").style.background = "#3b6aec";
	document.getElementById("SaibaMaisDiv").style.visibility = "visible";
	document.getElementById("SaibaMaisDiv").style.display = "block";
}

function FecharSaibaMais(){
	document.getElementById("saibamaisbtn").style.visibility = "visible";
	document.getElementById("saibamaisbtn").style.display = "block";
	document.getElementById("voltarbtn").style.visibility = "hidden";
	document.getElementById("voltarbtn").style.display = "none";
	document.getElementById("formdiv").style.visibility = "visible";
	document.getElementById("formdiv").style.display = "block";
	document.getElementById("formdiv").style.background = "-webkit-gradient(linear, left top, left bottom, from(#3b6aec), to(#2f10ca))";
	document.getElementById("SaibaMaisDiv").style.visibility = "hidden";
	document.getElementById("SaibaMaisDiv").style.display = "none";
}