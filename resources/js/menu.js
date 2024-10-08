document.querySelector('.menu__icon').addEventListener('click', function () {
    if (document.querySelector('.menu-dropdown').style.display === 'block') {
        document.querySelector('.menu-dropdown').style.display = 'none';
        document.querySelector('.blackout').style.display = 'none';
    } else {
        document.querySelector('.menu-dropdown').style.display = 'block';
        document.querySelector('.blackout').style.display = 'block';
    }

});