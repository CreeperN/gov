



// Small helper: add `loaded` class to `body` to trigger staged entrance animations
document.addEventListener('DOMContentLoaded', () => {
	// use requestAnimationFrame so the browser has painted initial state
	requestAnimationFrame(() => document.body.classList.add('loaded'));
});
