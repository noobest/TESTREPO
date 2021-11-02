var database = [
	{
		username: "banban",
		password: "bamnxbamn",
	},
	{
		username: "aejee",
		password: "bebeh",
	},
	{
		username: "anon",
		password: "123",
	},
];

var newsfeed = [
	{ username: "banban", timeline: "lol" },
	{ username: "familia", timeline: "happy halloween! MoOoOoOoO" },
	{ username: "bebeh", timeline: "banban berto banban berto huehue" },
];

var usernamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
	check = false;
	for (var i = 0; i < database.length; i++) {
		if (user === database[i].username && pass === database[i].password) {
			console.log(newsfeed);
			check = true;
		}
		if (i === database.length - 1 && check === false) {
			alert("Sorry, incorrect username or password.");
		}
	}
}

signIn(usernamePrompt, passwordPrompt);
