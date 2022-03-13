const navIconEl = document.querySelector('.nav_icon');
const navCloseEl = document.querySelector('.nav_close');
const navList = document.querySelector('.nav_list');
const navBgOverLayEl = document.querySelector('.nav_bgOverLay');

const navOpen = () => {
	navList.classList.add('show');
	navBgOverLayEl.classList.add('active');
	document.body.style='visibility: visible; height: 100vh; width: 100vw; overflow: hidden;';
}

const navClose = () => {
	navList.classList.remove('show');
	navBgOverLayEl.classList.remove('active');
	document.body.style='visibility: visible; height: initial; width: 100%; overflow-x: hidden;';
}


navIconEl.addEventListener('click', navOpen);
navCloseEl.addEventListener('click', navClose);
navBgOverLayEl.addEventListener('click', navClose);


// aos
AOS.init({
	offset: 200,
	delay: 100,
	duration: 400,
	easing: 'ease',
	once: false,
	mirror: false,
	anchorPlacement: 'top-bottom'
})