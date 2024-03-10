import "./style.scss";

function updateFontSize() {
	let words = document.querySelectorAll("[data-js-size]");

	for (let i = 0; i < words.length; i++) {
		let container = words[i].closest("[data-js-container]");
		let baseFontSize = words[i].dataset.jsSize;
		if (window.innerWidth < 768) {
			words[i].style.fontSize = `${(baseFontSize * container.offsetWidth) / 35}px`;
		} else {
			words[i].style.fontSize = `${(baseFontSize * container.offsetWidth) / 31}px`;
		}

	}
}

window.addEventListener("resize", updateFontSize);
window.addEventListener("load", updateFontSize);

const grabElements = document.querySelectorAll("[data-js-grab]");

grabElements.forEach((element) => {
	Draggable.create(element, {
		type: "x,y",
		bounds: ".c-flyer",
		edgeResistance: 0.65,
	});
});
