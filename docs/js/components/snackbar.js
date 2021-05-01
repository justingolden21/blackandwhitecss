let timeout;

function showSnackbar(txt, ms=2000) {
	let s = document.getElementById('snackbar');

	s.innerText = txt;
	s.classList.add('show');

	clearTimeout(timeout);
	timeout = setTimeout(()=> s.classList.remove('show'), ms);
}