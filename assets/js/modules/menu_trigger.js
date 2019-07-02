// menu trigger -------------------------------------------------

const triggermenu = document.querySelector('.trigger-menu');
const menu = document.querySelector('.mobile-menu');

triggermenu.addEventListener('click',function(){
  menu.classList.toggle('open');
  menu.classList.toggle('close');
});