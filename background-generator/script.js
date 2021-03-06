var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

function setGradient() {
	body.style.background =
		"linear-gradient(to right," + color1.value + "," + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function randomizeColor() {
	hex = "1234567890ABCDEF";
	var randomcolor = "";
	for (var i = 0; i < 6; i++) {
		randomcolor += hex.charAt(Math.floor(Math.random() * hex.length));
	}
	return "#" + randomcolor;
}

function randomGradient() {
	color1.value = randomizeColor();
	color2.value = randomizeColor();
	setGradient();
}

setGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomGradient);
