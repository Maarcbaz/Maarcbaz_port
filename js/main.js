let menu = document.querySelector('.open')
let overlay = document.querySelector('.overlay')
menu.addEventListener('click', () => {
    if (overlay.style.width == '230px') {
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
let btnFt = document.getElementById('btnFooter')
btnFt.addEventListener('suubmit', () => {
    function validateForm() {
        return false
    }
})
validateForm()

function validateForm() {
    return false
}

function popNav() {
    document.getElementById('popup_msg').classList.toggle('activePop')
}


// let inputs = document.querySelectorAll('input')
// let textAreas = document.querySelectorAll('textarea')
// textAreas.forEach((textArea) => {
//     textArea.addEventListener('focus', function () {
//         textArea.style.borderColor = 'white'
//     })
//     textArea.addEventListener('blur', function () {
//         textArea.style.borderColor = ''
//     })
// })
// inputs.forEach((input) => {
//     input.addEventListener('focus', function () {
//         input.style.borderColor = 'white'
//     })
//     input.addEventListener('blur', function () {
//         input.style.backgroundColor = ''
//     })
// })



// function navNavigation(evt) {
//     let allNav = document.querySelectorAll('.allNav')
//     let i;
//     for (i = 0; i < allNav.lenght; i++) {
//         allNav.className[i] = allNav.className[i].replace(" active", '')
//     }
//     if (allNav[i] === allNav.className == ('allNav')) {
//         allNav.classList.remove(' active')
//     }
//     evt.currentTarget.className = ' active'
// }