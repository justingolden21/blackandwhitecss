window.addEventListener('load', ()=> {
	let expand_btns = document.getElementsByClassName('expand-btn');
	for(expand_btn of expand_btns) {
		expand_btn.onclick = function(event) {
			let elm = event.target;
			while(elm.tagName != 'BUTTON' && elm.tagName != 'A') {
				elm = elm.parentNode;
			}
			if(elm.getAttribute('data-expanded')=='true') {
				elm.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 6v12"></path><path d="M6 12h12"></path></g></svg>';
				elm.setAttribute('data-expanded', 'false');
				elm.setAttribute('aria-expanded', 'false');
				document.querySelector(elm.getAttribute('href')).classList.add('show');
				document.querySelector(elm.getAttribute('href')).classList.remove('hide');
			} else {
				elm.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M6 12h12"></path></g></svg>';
				elm.setAttribute('data-expanded', 'true');
				elm.setAttribute('aria-expanded', 'true');
				document.querySelector(elm.getAttribute('href')).classList.add('hide');
				document.querySelector(elm.getAttribute('href')).classList.remove('show');
			}
		}
		expand_btn.setAttribute('aria-haspopup', 'true');
		expand_btn.click();
		expand_btn.click();
		// TODO: content that defaults to hidden transitions on page load
	}
});