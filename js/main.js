const menuToggle = document.querySelector('#menu-toggle'),
    menu = document.querySelector('.sidebar');
//отслеживаем клик по кнопосе меню и запускаем функцию
menuToggle.addEventListener('click', (e) => {
    e.preventDefault(); //отменяет стандартное поведение ссылки
    menu.classList.toggle('visible'); //вешаем класс на меню, когда кликаем по кнопось
});