const popup = document.getElementById('popup'),
      button = document.getElementById('addGoods'),
      closeItem = document.getElementsByClassName('close-popup');


button.addEventListener('click', function showPopup(){
   popup.classList.add('open');
});

function test(){
    popup.classList.remove('open');
} 

































// const popupLinks = document.getElementsByClassName('popup_link'),
//       body = document.querySelector('body'),
//       lockPadding = document.getElementsByClassName('lock-padding'),
//       popupCloseItem = document.getElementsByClassName('close-popup');

// let unlock = true;
// const timeout = 400;

// if(popupLinks.length>0){
//     for(let index = 0; index < popupLinks.length; index++){
//         const popupLink = popupLinks[index];
//         popupLink.addEventListener('click', function(e){
//             const popupName = popupLink.getAttribute('href').replace('#', '');
//             const currentPopup = document.getElementById(popupName);
//             popupOpen(currentPopup);
//             e.preventDefault();
//         });
//     }
// }

// if(popupCloseItem.length> 0){
//     for(let i = 0; i < popupCloseItem.length; i++){
//         const el = popupCloseItem[i];
//         el.addEventListener('click', function(e){
//             popupClose(el.closest('.popup'));
//             e.preventDefault();
//         });
//     }
// }

// function popupOpen(currentPopup){
//     if(currentPopup && unlock){
//         const popupActive = document.getElementsByClassName('popup.open');
//         if(popupActive){
//             popupClose(popupActive, false);
//         } else {
//             bodyLock();
//         }
//         currentPopup.classList.add('open');
//         currentPopup.addEventListener('click', function(e){
//             if(!e.target.closest('.popup_content')){
//                 popupClose(e.target.closest('.popup'));
//             }
//         });
//     }
// }

// function popupClose(popupActive, doUnlock = true ){
//     if(unlock){
//         popupActive.classList.remove('open');
//         if(doUnlock){
//             bodyUnLock();
//         }
//     }
// }

// function bodyLock(){
//     const lockPaddingValue = window.innerWidt - document.querySelector('.wrapper').offsetWidth + 'px';

//    if (lockPadding.length > 0){
//         for (let index = 0; index < lockPadding.length; index++){
//             const el = lockPadding [index];
//             el.style.paddingRight = lockPaddingValue;
//         }
//    }
//     body.style.paddingRight = lockPaddingValue;
//     body.classList.add('lock');

//     unlock = false;
//     setTimeout(function (){
//         unlock = true;
//     }, timeout);
// }

// function bodyUnLock(){
//     setTimeout( function(){
//         for (let index = 0; index.lockPadding.length; index++){
//             const el = lockPadding[index];
//             el.style.paddingRight = '0px';
//         }
//         body.style.paddingRight = '0px';

//     });
// }