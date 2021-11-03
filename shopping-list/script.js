var button = document.getElementById("enter");
var newItem = document.getElementById("userinput");
var ul = document.querySelector("ul");

button.addEventListener("click", function () {
	console.log("Clicked!");
});

function itemLen() {
	return newItem.value.length;
}

function addItem() {
	var div = document.createElement("div");
	ul.appendChild(div);

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(newItem.value));
	div.appendChild(li);

	var del = document.createElement("button");
	del.appendChild(document.createTextNode("Delete"));
	del.className = "delbutton";
	div.appendChild(del);

	newItem.value = "";
}

function addItemOnClick() {
	if (itemLen() > 0) {
		addItem();
	}
}

function addItemOnKeypress(event) {
	if (itemLen() > 0 && event.key === "Enter") {
		addItem();
	}
}

function doneTask(event) {
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("done");
	}
}

function deleteTask(event) {
	if (event.target.tagName === "BUTTON") {
		event.target.parentElement.remove();
	}
}

function handleTaskCLick(event) {
	doneTask(event);
	deleteTask(event);
}

ul.addEventListener("click", handleTaskCLick);
button.addEventListener("click", addItemOnClick);
newItem.addEventListener("keypress", addItemOnKeypress);
