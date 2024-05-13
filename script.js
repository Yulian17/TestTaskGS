document.getElementById('burger-menu-btn').addEventListener('click', function() {
    var mainMenu = document.getElementById('main-menu');
    // Переключаем класс для скрытия / отображения меню
    mainMenu.classList.toggle('menu-hidden');
});
