function sayHello() {
	console.log("Hello");
}
sayHello();

var sayBye = function () {
	return "<p>Testing from sayBye function</p>";
};

sayBye();

function sing(song) {
	console.log(song);
}

sing("i dont relate to you");
sing("habata i ta ra");
sing("ise no se~");

function multiply(x, y) {
	return x * y;
}

function checkDriverAge() {
	var age = prompt("What is your age?");

	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

checkDriverAge();

var checkDriverAge2 = function (age) {
	if (Number(age) < 18) {
		console.log("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		console.log("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		console.log(
			"Congratulations on your first year of driving. Enjoy the ride!"
		);
	}
};

checkDriverAge2();
