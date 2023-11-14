let w = window.screen.availWidth;
if(w > 1000){
    let bg = document.querySelector('.BG')
    let FirstLayer = document.querySelector('.main')
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg.style.transform = 'translate(-' + x * 5 + 'px, -' + y * 5 + 'px)';
        FirstLayer.style.transform = 'translate(+' + x * 0 + 'px, +' + y * 0 + 'px)';
    });
};


const blurpanel = document.querySelector('.blur')
let clickSound = new Audio("click1.mp3")
let navigation = document.querySelector('.navigation')
let hoverSound = new Audio("hover.mp3")
let overlay = document.querySelector('.overlay_button')
let nightPanel = document.querySelector('.overlay')
let nightSound = new Audio("nightSound.mp3")
let dicsordSection = document.querySelector('.discord_title')
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
function Night()
{
    navigation.classList.toggle("night_navigation")
    nightPanel.classList.toggle('overlayed');
    nightSound.play()
    nightSound.volume =0.2
}
navigation.addEventListener("pointerenter", navisound);
blurpanel.addEventListener('click',blur);
overlay.addEventListener("click", Night)

function discordEnter()
{
    document.querySelector('.BG').classList.toggle('hidden');
    document.querySelectorAll('.About_Us_text').forEach(element =>
    {
        element.classList.toggle('dark_font')
    })
    document.querySelector('.About_Us_title').classList.toggle('dark_font')
    document.querySelector('.main').classList.toggle('dark_main')
    document.querySelector('.discord_h2').classList.toggle('dark_font')
    document.querySelector('.discord_span').classList.toggle('dark_font')
    document.querySelectorAll('.navigation_button').forEach( element =>
    {
        element.classList.toggle('discord_navigation')
    })
    document.querySelector('.nav_title').classList.toggle("dark_navtitle")
    document.querySelector('.navigation').classList.toggle("navigation_discord_border")
}
//dicsordSection.addEventListener('click', discordEnter)





