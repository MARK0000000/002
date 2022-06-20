const burger = document.querySelector('.burger');
const menuList = document.querySelector('.menu__ul');
console.log(menuList);
document.addEventListener('click', active);



function active(event){
   if (event.target.closest('.burger')) {
		menuList.classList.toggle('_active');
	}
   //menuList.classList.toggle('_active');
   if (!event.target.closest('.burger')) {
		menuList.classList.remove('_active');
	}

}

const select = document.querySelector('.select');
const selectLink = document.querySelectorAll('.select__link');
const selectUl = document.querySelector('.select__ul');
let selectLinkOne = selectLink[0];
let selectLinkTwo = selectLink[1];
document.addEventListener('click', selectActive);
function selectActive(event){
   if (event.target.closest('.select')) {
		selectLinkOne.classList.toggle('_selectActive');
      selectLinkTwo.classList.toggle('_selectActive');
	}
   //menuList.classList.toggle('_active');
   if (!event.target.closest('.select')) {
		selectLinkOne.classList.remove('_selectActive');
      selectLinkTwo.classList.remove('_selectActive');
	}

}
const menuLink = document.querySelectorAll('.menu__link a');
menuLink[0].style.color = '#21243D';
menuLink[1].style.color = '#21243D';
menuLink[2].style.color = '#21243D';
console.log(menuLink);

const dark = document.querySelector('.select__link_dark');
const light = document.querySelector('.select__link_light');
const body = document.body;
const blueBackground = document.querySelector('.blueBackground');
const postsFirst = document.querySelector('.posts__first');
const postsSecond = document.querySelector('.posts__second');
const white = document.querySelector('.burger__block');
document.addEventListener('click', darkLight);
function darkLight(event){
   if (event.target.closest('.select__link_dark')) {
      blueBackground.style.backgroundColor = '#666';
      postsFirst.style.backgroundColor = '#333';
      postsSecond.style.backgroundColor = '#333';
      menuLink[0].style.color = '#fff';
      menuLink[1].style.color = '#fff';
      menuLink[2].style.color = '#fff';
      body.style.cssText =`
      font-family: Heebo;
      background-color: #333;
      color: #fff;
      `
      white.style.cssText = `
      height: 50px;
      width: 50px;
      border-radius: 50%;
      background-color: #EDF7FA;
      margin-right: 13px;
      margin-top: -7px;
      `
	}
   if (event.target.closest('.select__link_light')) {
      blueBackground.style.backgroundColor = '#EDF7FA';
      postsFirst.style.backgroundColor = '#fff';
      postsSecond.style.backgroundColor = '#fff';
      menuLink[0].style.cssText = `
      color: #fff;
      `
      menuLink[1].style.cssText = `
      color: #fff;
      `
      menuLink[2].style.cssText = `
      color: #fff;
      background-color: #142850;
      `

      body.style.cssText =`
      font-family: Heebo;
      background-color: #fff;
      color: #21243D;
      `
      white.style.cssText = `
      height: 50px;
      width: 50px;
      border-radius: 50%;
      background-color: #fff;
      margin-right: 13px;
      margin-top: -7px;
      `
	}
}
