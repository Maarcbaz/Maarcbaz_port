let menu = document.querySelector('.open')
let overlay = document.querySelector('.overlay')
menu.addEventListener('click', () => {
    if(overlay.style.width == '230px') {
        overlay.style.width = '0'
    }
    else {
        overlay.style.width = '230px'
    }
})
let all = document.querySelector('.container')
all.addEventListener('click', () => {
    if (overlay.style.width == '230px') {
        overlay.style.width = '0'
    }
})
let anchors = document.querySelectorAll('body > header > nav > div > ul >  a')
function addActive(add) {
    anchors.forEach(anchor => {
        anchor.style.display = 'none'
    })
    document.getElementById(add) = currentTarget.classList.add('active')
    // add.currentTarget.classList.add('active')
}