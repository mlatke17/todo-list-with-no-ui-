// select the elements
let form = document.querySelector("#new-item-form");
let input = document.querySelector("#item-input");
let list = document.querySelector("#list");

form.addEventListener("submit", function (e) {
	e.preventDefault();
	// console.log(input.value);
	// create a new item
	let item = document.createElement("div");
	item.innerText = input.value;
	item.classList.add("list-item");
	// add the new item to the list div
	list.appendChild(item);
	// clear the input element
	input.value = "";
	// delete the list item
	item.addEventListener("click", function () {
		item.remove();
	});
});
