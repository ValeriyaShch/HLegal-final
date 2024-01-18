(() => {
	const burgerOpen = document.querySelector('.header__box-burger')
	const burgerClose = document.querySelector('.header__nav-close')
	const navigation = document.querySelector('.header__nav')

	burgerOpen.addEventListener('click', () => {
		navigation.classList.add('active')
	})

	burgerClose.addEventListener('click', () => {
		navigation.classList.remove('active')
	})
})();

(() => {
	const tabsItem = document.querySelectorAll('.tabs__links-item')
	const tabsBlock = document.querySelectorAll('.tabs__content-item')
	
	tabsItem.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			tabsBlock.forEach((content) => {
				content.classList.remove('active')
			})
			tabsItem.forEach((tab) => {
				tab.classList.remove('active')
			})
			tabsItem[index].classList.add('active')
			tabsBlock[index].classList.add('active')
		})
	})
})();

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
	loop: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
  },

  });