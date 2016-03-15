document.querySelector('body').style.textAlign = 'center';
document.querySelector('body').style.marginTop = '25%';

var submitEl = document.querySelector('button');
submitEl.style.height = '6em';
submitEl.style.width = '12em';

function showLoad() {
	submitEl.innerHTML = 'Loading...';
	submitEl.style.color = '#A99B76';
  	setTimeout(resetSubmit, 2000);
}

function resetSubmit() {
	submitEl.innerHTML = 'Submit';
	submitEl.style.color = 'black';
}

submitEl.addEventListener('click', showLoad);
