var list = ["kitkat", "galaxy", "M&Ms", "pepero", "goya"];
console.log(list[0]);

var functions_arr = [
	function apple() {
		console.log("apple");
	},
	function orange() {
		console.log("orange");
	},
	function grapes() {
		console.log("grapes");
	},
];

var mixed = [
	true,
	28,
	"Berto gwapo",
	undefined,
	function mix() {
		console.log("mix function in the mixed array");
	},
];

// EXERCISE 6==========================
var array = ["Banana", "Apples", "Oranges", "Blueberries"];
array.shift();
array.sort();
array = array.concat("Kiwi");
array.shift();
array.reverse();
console.log(array);
//=====================================
