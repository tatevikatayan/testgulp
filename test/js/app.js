function email_test(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

"use strict"
document.addEventListener('DOMContentLoaded', function(){
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);
	async function formSend(e) {
		e.preventDefault();
		let error = formValidate(form);
		let formData = new FormData(form);
		
		if(error === 0){
			form.classList.add('_sending');
			let response = await fetch('send.php', {
				method: 'POST',
				body: formData
			});
			if(response.ok){
                let result = await response.json();
				alert(result.message);
				form.reset();
				form.classList.remove('_sending');
			}else{
                alert('Ошибка');
				form.classList.remove('_sending');
			}
           
		}else{
			alert('Заполните обязательно поля, либо проверьте корректность звполненных полей');
		}
	}
	function formValidate(form){
		let error = 0;
		let formReq = document.querySelectorAll('._req');
		for(let index = 0; index < formReq.length; index++){
			const input = formReq[index];

			formRemoveError(input);
			if(input.classList.contains('_email')){
               if(emailTest(input)){
				formAddError(input);
				error++;
			   }
			} else if(phoneTest(input)){
				formAddError(input);
				error++;
			   }
			else{
              if(input.value === ' '){
				formAddError(input);
				error++;
			  }
			}
		}
		return error;
	}
	function formAddError(input){
		// input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input){
		// input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	function emailTest(input){
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
	function phoneTest(input){
        return /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/.test(input.value);
    }
});


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

;

