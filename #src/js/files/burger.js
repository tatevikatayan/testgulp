const body = document.querySelector('body');
const burger = document.querySelector('.burger');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const formWrapper = document.querySelector('.form__wrapper');
const formClose = document.querySelector('.form__close');
const menuNavLink = document.querySelectorAll('.menu__nav-link');

burger.addEventListener("click", () =>{
    popup.classList.add('show');

});
popupClose.addEventListener("click", () =>{
    popup.classList.remove('show');

});
menuNavLink.forEach(item => {
    item.addEventListener("click", () => {
        formWrapper.classList.add('show');
        body.style.overflow = 'hidden';
    });

});
formWrapper.addEventListener('click', event => {
    const target = event.target;
    if(target === formWrapper || target === formClose){
        formWrapper.classList.remove('show');
    }

});

menuNavLink.forEach(item => {
    item.addEventListener('mouseover', () => {
        if(item.id === 'menu__img'){
           document.querySelector('.small').style.visibility = "visible";
           document.querySelector('.cup').style.visibility = "visible";
           document.querySelector('.big').style.visibility = "visible";
           
        }
        if(item.id === 'cup'){
            document.querySelector('.main').style.visibility = "visible";
            
         }
         if(item.id === 'paper'){
            document.querySelector('.paper').style.visibility = "visible";
            
            // document.querySelector('.second').style.paddingTop = '400px'
         }
    });
    item.addEventListener('mouseout', () => {
        if(item.id === 'menu__img'){
           document.querySelector('.small').style.visibility = "hidden";
           document.querySelector('.cup').style.visibility = "hidden";
           document.querySelector('.big').style.visibility = "hidden";
           
        }
        if(item.id === 'cup'){
            document.querySelector('.main').style.visibility = "hidden";
            
         }
         if(item.id === 'paper'){
            document.querySelector('.paper').style.visibility = "hidden";
            
            // document.querySelector('.second').style.paddingTop = '300px'
         }
    });

});

