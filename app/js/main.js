$(function(){
   
    const menuBtn = document.querySelector('.menu__btn'),
          menu = document.querySelector('.menu__list');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('menu__list-active');
        menuBtn.style.backgroundColor = "white";
    })

    //scroll

    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header__top');
        const scrollHeight = window.pageYOffset;
        const headerHeight = header.getBoundingClientRect().height;
        if(scrollHeight > headerHeight) {
          
          header.classList.add('fixed-header');
        } else {
          console.log(scrollHeight)
          header.classList.remove('fixed-header')
        }
      })

});