// Переменные для свайпера
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
    },

    // slidesPerView: 1.1
});

//Переменные для меню-бургера и логотипа
const logoHeader = document.querySelector('.header__logo')
const burgerList = document.querySelector('#menu');
const allBurgerButtons = burgerList.querySelectorAll('.burgerButton');
const burgerMain = document.querySelector('#burgerMain');
const burgerPrice = document.querySelector('#burgerPrice');
const burgerCredit = document.querySelector('#burgerCredit');
const burgerAboutMobile = document.querySelector('#burgerAbout');
const burgerComments = document.querySelector('#burgerComments');
const burgerContacts = document.querySelector('#burgerContacts');
var burgerMenu = document.getElementById('burger-menu');
var overlay = document.querySelector('.burger__list');

//Переменные разделов сайта
const header = document.querySelector('.header');
const sectionMain = document.querySelector('.first-screen');
const sectionPrice = document.querySelector('.price');
const sectionBenefits = document.querySelector('.benefits');
const sectionAboutMobile = document.querySelector('.about-mobile');
const sectionCommentsMobile = document.querySelector('.comments-mobile');
const sectionContactsMobile = document.querySelector('.footer-mobile');

//Переменные для кнопок обратной связи
const buttonConsultationFirstScreen = document.querySelector('.consultation__button');
const buttonsConsultationPrice = document.querySelectorAll('.cards__button');
const buttonStartCard = document.querySelector('#buttonStartCard');
const buttonsConsultation = document.querySelectorAll('.open-popup');
const buttonCloseConsultationFirstScreenDesktop = document.querySelector('.popup__close-button');

//Переменные для работы попапов
const popup = document.querySelector('.popup')

//Переменные для отправки данных формы в телеграм
const forms = document.querySelectorAll('.form');
const TOKEN = '6295689013:AAH5h3VkKwxmeYIZzN_KuX2gb6TPwm1lX60';
const CHAT_ID = '-1001953490570';
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

//Переменные для прелоадера
const preloader = document.querySelector('.preloader');

//Работа меню-бургера
burgerMenu.addEventListener('click', burgerMenuToggle);

function burgerMenuToggle(){
    burgerMenu.classList.toggle("close");
    overlay.classList.toggle("overlay");
}

function closeMenuBurger() {
    burgerMenu.classList.remove("close");
    overlay.classList.remove("overlay");
}

//Удаление стандартного поведения ссылок
allBurgerButtons.forEach(button => {
    button.addEventListener('click', clickMenuButton)
})

function clickMenuButton(evt) {
    evt.preventDefault();
}

//Прокрутка до соответствующего раздела сайта
logoHeader.addEventListener('click', () => {
    window.scroll({
        left: 0,
        top: sectionMain.offsetTop - header.offsetHeight,
        behavior: 'smooth'
    })
    closeMenuBurger()
})

burgerMain.addEventListener('click', () => {
    window.scroll({
        left: 0,
        top: sectionMain.offsetTop - header.offsetHeight,
        behavior: 'smooth'
    })
    closeMenuBurger()
})

burgerPrice.addEventListener('click', () => {
    window.scroll({
        left: 0,
        top: sectionPrice.offsetTop - header.offsetHeight,
        behavior: 'smooth'
    })
    closeMenuBurger()
})

burgerCredit.addEventListener('click', () => {
    window.scroll({
        left: 0,
        top: sectionBenefits.offsetTop - header.offsetHeight,
        behavior: 'smooth'
    })
    closeMenuBurger()
})

burgerAboutMobile.addEventListener('click', () => {
    window.scroll({
        left: 0,
        top: sectionAboutMobile.offsetTop - header.offsetHeight,
        behavior: 'smooth'
    })
    closeMenuBurger()
})

burgerComments.addEventListener('click', () => {
    window.scroll({
        left: 0,
        top: sectionCommentsMobile.offsetTop - header.offsetHeight,
        behavior: 'smooth'
    })
    closeMenuBurger()
})

burgerContacts.addEventListener('click', () => {
    window.scroll({
        left: 0,
        top: sectionContactsMobile.offsetTop - header.offsetHeight,
        behavior: 'smooth'
    })
    closeMenuBurger()
})


//Обработчики для кнопок обратной связи

buttonConsultationFirstScreen.addEventListener('click', openPopup)

buttonsConsultationPrice.forEach(button => {
    button.addEventListener('click', openPopup)
})

buttonStartCard.addEventListener('click', clickMenuButton)
buttonStartCard.addEventListener('click', openPopup)


//Работа попапов
function openPopup() {
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

buttonsConsultation.forEach(button => {
    button.addEventListener('click', openPopup);
})

buttonCloseConsultationFirstScreenDesktop.addEventListener('click', closePopup)

popup.addEventListener('click', (evt) => {
    if (evt.target == popup) {
        closePopup()
    }
})


//Отправка данных в телеграм
forms.forEach(form => {
    form.addEventListener('submit', sendForm)
})

function sendForm(evt) {
    evt.preventDefault();

    let message = `<b>Заявка с сайта</b>\n`;
    message += `<b>Имя клиента:</b> ${ this.name.value }\n`;
    message += `<b>Телефон клиента:</b> ${ this.phone.value }\n`;
    message += `<b>Комментарий клиента:</b> ${ this.comment.value }`;

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        this.name.value = '';
        this.phone.value = '';
        this.comment.value = '';
        closePopup();
        alert('Данные успешно отправлены')
    })
}


//Работа прелоадера
document.body.onload = function() {
    setTimeout(function() {
        if(!preloader.classList.contains('preloader__done')) {
            preloader.classList.add('preloader__done')
        }
    }, 3500)
}