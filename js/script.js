//================== WebpCss===================
function testWebP(callback) {

   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});;
const burger = document.querySelector('.burger');
const body = document.querySelector('body');
const menu = document.querySelector('.menu');

const headerLogItem = document.querySelector('.header__item_log');
const menuBody = document.querySelector('.menu__body');
const headerContent = document.querySelector('.header__content');

const logo = document.querySelector('.header__logo');
const menuLinks = document.querySelectorAll('.menu__link');
const login = document.querySelector('.header__login');
const sign = document.querySelector('.header__sign');
const choose = document.querySelector('.header__choose');

function logItemMove() {
   const widthValue = body.clientWidth;
   if (widthValue < 767.98) {
      menuBody.appendChild(headerLogItem);
   } else {
      headerContent.appendChild(headerLogItem);
   }
}

function burgerClick() {
   if (!burger.classList.contains('active')) {
      burger.classList.add('active');
      burger.classList.remove('not-active');
      body.classList.add('lock');
      menu.classList.add('active');
   } else {
      burger.classList.remove('active');
      burger.classList.add('not-active');
      body.classList.remove('lock');
      menu.classList.remove('active');
   }
}

function logoLinksClick() {
   burger.classList.remove('active');
   burger.classList.add('not-active');
   body.classList.remove('lock');
   menu.classList.remove('active');
}

function linksClick() {
   menuLinks.forEach(function (link) {
      link.addEventListener('click', logoLinksClick);
   });
}

linksClick();
logItemMove();

window.addEventListener('resize', logItemMove);
burger.addEventListener('click', burgerClick);
logo.addEventListener('click', logoLinksClick);
login.addEventListener('click', logoLinksClick);
sign.addEventListener('click', logoLinksClick);
choose.addEventListener('click', logoLinksClick);
;