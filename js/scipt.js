//navbar menu
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let menuBg = document.querySelector('.bg-menu');
let anchor1 = document.querySelector('[href="#a1"]');
let anchor2 = document.querySelector('[href="#a2"]');
let anchor3 = document.querySelector('[href="#a3"]');
let anchor4 = document.querySelector('[href="#a4"]');
let anchor5 = document.querySelector('[href="#a5"]');
let anchor6 = document.querySelector('[href="#a6"]');
let anchor7 = document.querySelector('[href="#a7"]');

menuBtn.addEventListener('click',()=>{
	menu.classList.toggle('active');
	menuBg.classList.toggle('active');
	menuBtn.classList.toggle('active');
});
document.addEventListener('click', (e)=> {
	if(e.target === menuBg) {
		menu.classList.toggle('active');
		menuBg.classList.toggle('active');
		menuBtn.classList.toggle('active');
	};
});
anchor1.addEventListener('click',()=>{
	menu.classList.toggle('active');
	menuBg.classList.toggle('active');
	menuBtn.classList.toggle('active');
});
anchor2.addEventListener('click',()=>{
	menu.classList.toggle('active');
	menuBg.classList.toggle('active');
	menuBtn.classList.toggle('active');
});
anchor3.addEventListener('click',()=>{
	menu.classList.toggle('active');
	menuBg.classList.toggle('active');
	menuBtn.classList.toggle('active');
});
anchor4.addEventListener('click',()=>{
	menu.classList.toggle('active');
	menuBg.classList.toggle('active');
	menuBtn.classList.toggle('active');
});
anchor5.addEventListener('click',()=>{
	menu.classList.toggle('active');
	menuBg.classList.toggle('active');
	menuBtn.classList.toggle('active');
});
anchor6.addEventListener('click',()=>{
	menu.classList.toggle('active');
	menuBg.classList.toggle('active');
	menuBtn.classList.toggle('active');
});
anchor7.addEventListener('click',()=>{
	menu.classList.toggle('active');
	menuBg.classList.toggle('active');
	menuBtn.classList.toggle('active');
});

//map garden, paradice and nether
let paradiseItems = document.querySelectorAll('.padise__item');
let gardenItems = document.querySelectorAll('.garden__item');
let netherItems = document.querySelectorAll('.nether__item');
let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let nether__item1 = document.querySelector('.nether__deskp-0').innerHTML;
let nether__item2 = document.querySelector('.nether__deskp-1').innerHTML;
let nether__item3 = document.querySelector('.nether__deskp-2').innerHTML;
let nether__item4 = document.querySelector('.nether__deskp-3').innerHTML;
let paradise__item1 = document.querySelector('.paradise__deskp-0').innerHTML;
let paradise__item2 = document.querySelector('.paradise__deskp-1').innerHTML;
let paradise__item3 = document.querySelector('.paradise__deskp-2').innerHTML;
let paradise__item4 = document.querySelector('.paradise__deskp-3').innerHTML;
let garden__item1 =  document.querySelector('.garden__deskp-0').innerHTML;
let garden__item2 =  document.querySelector('.garden__deskp-1').innerHTML;
let garden__item3 =  document.querySelector('.garden__deskp-2').innerHTML;
let garden__item4 =  document.querySelector('.garden__deskp-3').innerHTML;
let garden__item5 =  document.querySelector('.garden__deskp-4').innerHTML;
let garden__item6 =  document.querySelector('.garden__deskp-5').innerHTML;
let garden__item7 =  document.querySelector('.garden__deskp-6').innerHTML;
let garden__item8 =  document.querySelector('.garden__deskp-7').innerHTML;
let garden__item9 =  document.querySelector('.garden__deskp-8').innerHTML;
let garden__item10 =  document.querySelector('.garden__deskp-9').innerHTML;
let garden__item11 =  document.querySelector('.garden__deskp-10').innerHTML;
let garden__item12 =  document.querySelector('.garden__deskp-11').innerHTML;


paradiseItems.forEach( (e) =>{
	e.addEventListener('click',function() {
		popup.querySelector('.popup_title').innerText = this.dataset.title;
		if(popup.querySelector('.popup_title').innerText == "Царство Небесное")
			popup.querySelector('.popup__text').innerHTML = paradise__item1;
		if(popup.querySelector('.popup_title').innerText == "Страдание венчается")
			popup.querySelector('.popup__text').innerHTML = paradise__item2;
		if(popup.querySelector('.popup_title').innerText == "Служити Богу выну")
			popup.querySelector('.popup__text').innerHTML = paradise__item3;
		if(popup.querySelector('.popup_title').innerText == "Аггел")
			popup.querySelector('.popup__text').innerHTML = paradise__item4;
		popupBg.classList.add('active');
	});
});

gardenItems.forEach( (e) =>{
	e.addEventListener('click',function() {
		popup.querySelector('.popup_title').innerText = this.dataset.title;
		if(popup.querySelector('.popup_title').innerText == "Лов")
			popup.querySelector('.popup__text').innerHTML = garden__item1;
		if(popup.querySelector('.popup_title').innerText == "Молитва (54)")
			popup.querySelector('.popup__text').innerHTML = garden__item2;
		if(popup.querySelector('.popup_title').innerText == "Отрок (4)")
			popup.querySelector('.popup__text').innerHTML = garden__item3;
		if(popup.querySelector('.popup_title').innerText == "Мира любление")
			popup.querySelector('.popup__text').innerHTML = garden__item4;
		if(popup.querySelector('.popup_title').innerText == "Огнь любве")
			popup.querySelector('.popup__text').innerHTML = garden__item5;
		if(popup.querySelector('.popup_title').innerText == "Мнози суть звании")
			popup.querySelector('.popup__text').innerHTML = garden__item6;
		if(popup.querySelector('.popup_title').innerText == "Мирножитие")
			popup.querySelector('.popup__text').innerHTML = garden__item7;
		if(popup.querySelector('.popup_title').innerText == "Злоба")
			popup.querySelector('.popup__text').innerHTML = garden__item8;
		if(popup.querySelector('.popup_title').innerText == "Мудр кто")
			popup.querySelector('.popup__text').innerHTML = garden__item9;
		if(popup.querySelector('.popup_title').innerText == "Магнит")
			popup.querySelector('.popup__text').innerHTML = garden__item10;
		if(popup.querySelector('.popup_title').innerText == "Огнь похоти")
			popup.querySelector('.popup__text').innerHTML = garden__item11;
		if(popup.querySelector('.popup_title').innerText == "Любовь (15)")
			popup.querySelector('.popup__text').innerHTML = garden__item12;
		popupBg.classList.add('active');
	});
});

netherItems.forEach( (e) =>{
	e.addEventListener('click',function() {
		popup.querySelector('.popup_title').innerText = this.dataset.title;
		if(popup.querySelector('.popup_title').innerText == "Избранных мало (4)")
			popup.querySelector('.popup__text').innerHTML = nether__item1;
		if(popup.querySelector('.popup_title').innerText == "Страсть блуда")
			popup.querySelector('.popup__text').innerHTML = nether__item2;
		if(popup.querySelector('.popup_title').innerText == "Иго Христово")
			popup.querySelector('.popup__text').innerHTML = nether__item3;
		if(popup.querySelector('.popup_title').innerText == "Демон")
			popup.querySelector('.popup__text').innerHTML = nether__item4;
		popupBg.classList.add('active');
	});
});

document.addEventListener('click',(e)=>{
	if(e.target === popupBg) {
		popupBg.classList.remove('active')
	};
});






