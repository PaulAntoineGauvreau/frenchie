import "./style.scss";

function updateFontSize() {
	let words = document.querySelectorAll("[data-js-size]");

	for (let i = 0; i < words.length; i++) {
		let container = words[i].closest("[data-js-container]");
		let baseFontSize = words[i].dataset.jsSize;
		words[i].style.fontSize = `${(baseFontSize * container.offsetWidth) / 31}px`;
		console.log(container);
	}
}

// Call the function initially and on window resize
window.addEventListener("resize", updateFontSize);
window.addEventListener("load", updateFontSize);
// Get all elements with data-js-grab attribute
const grabElements = document.querySelectorAll("[data-js-grab]");

grabElements.forEach((element) => {
	Draggable.create(element, {
		type: "x,y",
		bounds: ".c-flyer",
		edgeResistance: 0.65,
	});
});
