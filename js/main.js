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
let all = document.querySelector('.all')
all.addEventListener('click', () => {
    if (overlay.style.width == '230px') {
        overlay.style.width = '0'
    }
})