//Menu code

const menuButton = document.getElementById('js-menu')
const menuList = document.getElementById('js-menuList')


menuButton.addEventListener('click', menuOpen);


function menuOpen() {
    menuList.classList.toggle('nemu-active')
}

/*
function menuOpen() {
    document.getElementById("js-menuList").style.display ="flex";
    menuButton.style.display ="none"
    menuButtonX.style.display =""

} */