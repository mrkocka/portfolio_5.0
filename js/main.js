//Menu code

const menuButton = document.getElementById('js-menu')
const menuList = document.getElementById('js-menuList')


menuButton.addEventListener('click', menuOpen);


function menuOpen() {
    menuList.classList.toggle('nemu-active')
    menuButton.classList.toggle('fa-times')
}

