import "/src/style.scss?t=1709171476029";

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiL3NyYy9zdHlsZS5zY3NzP3Q9MTcwOTE3MTQ3NjAyOVwiO1xuXG5mdW5jdGlvbiB1cGRhdGVGb250U2l6ZSgpIHtcblx0bGV0IHdvcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWpzLXNpemVdXCIpO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgY29udGFpbmVyID0gd29yZHNbaV0uY2xvc2VzdChcIltkYXRhLWpzLWNvbnRhaW5lcl1cIik7XG5cdFx0bGV0IGJhc2VGb250U2l6ZSA9IHdvcmRzW2ldLmRhdGFzZXQuanNTaXplO1xuXHRcdHdvcmRzW2ldLnN0eWxlLmZvbnRTaXplID0gYCR7KGJhc2VGb250U2l6ZSAqIGNvbnRhaW5lci5vZmZzZXRXaWR0aCkgLyAzMX1weGA7XG5cdFx0Y29uc29sZS5sb2coY29udGFpbmVyKTtcblx0fVxufVxuXG4vLyBDYWxsIHRoZSBmdW5jdGlvbiBpbml0aWFsbHkgYW5kIG9uIHdpbmRvdyByZXNpemVcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZUZvbnRTaXplKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCB1cGRhdGVGb250U2l6ZSk7XG4vLyBHZXQgYWxsIGVsZW1lbnRzIHdpdGggZGF0YS1qcy1ncmFiIGF0dHJpYnV0ZVxuY29uc3QgZ3JhYkVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWpzLWdyYWJdXCIpO1xuXG5ncmFiRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXHREcmFnZ2FibGUuY3JlYXRlKGVsZW1lbnQsIHtcblx0XHR0eXBlOiBcIngseVwiLFxuXHRcdGJvdW5kczogXCIuYy1mbHllclwiLFxuXHRcdGVkZ2VSZXNpc3RhbmNlOiAwLjY1LFxuXHR9KTtc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