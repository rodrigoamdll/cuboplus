// JavaScript para manejar el evento de clic en el botón de menú
document.getElementById('mobile-menu-button').addEventListener('click', function () {
    var navbar = document.getElementById('navbar-default');
    navbar.classList.toggle('hidden');
});