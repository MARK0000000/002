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