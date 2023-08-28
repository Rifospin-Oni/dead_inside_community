const blurpanel = document.querySelector('.blur');
console.log(blurpanel);
function blur()
{
    document.querySelector('.main').classList.toggle('blurred');
}

blurpanel.addEventListener('click',blur);
