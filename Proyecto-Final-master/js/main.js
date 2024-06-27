document.addEventListener('DOMContentLoaded', (event) => {
	const modeSelector = document.getElementById('mode-selector');
	const pageTitle = document.getElementById('page-title');

	modeSelector.addEventListener('click', () => {
		document.body.classList.toggle('dark-mode');
		if (document.body.classList.contains('dark-mode')) {
			pageTitle.textContent = 'Dark Mode ON';
			modeSelector.textContent = 'Light Mode';
		} else {
			pageTitle.textContent = 'Light Mode ON';
			modeSelector.textContent = 'Dark Mode';
		}
	});
});