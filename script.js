const blurpanel = document.querySelector('.blur')
let clickSound = new Audio("click1.mp3")
let navigation = document.querySelector('.navigation')
let hoverSound = new Audio("hover.mp3")
function blur()
{
    document.querySelector('.main').classList.toggle('blurred');
    clickSound.play()
    clickSound.volume= 0.2
    blurpanel.classList.toggle('button_blurred');
}
function navisound()
{
    hoverSound.play()
    console.log("hovered")
    hoverSound.volume =0.2
}
navigation.addEventListener("pointerenter", navisound);
blurpanel.addEventListener('click',blur);
