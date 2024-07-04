let animation = document.querySelector(".animation")
let containers = document.querySelector(".containers")
let menu = document.querySelector('.open')
let icon_hamburger = document.getElementById('openNav')
let overlay = document.querySelector('.overlay')
let all = document.querySelector('.container')
function loadAnime() {
    setTimeout(() => {
        animation.style.display = 'none'
        if (animation.style.display == 'block') {
            containers.style.display = 'none'
        } else {
            containers.style.display = 'block'
        }
    }, 2500);
}
window.addEventListener("load", function () {
    loadAnime()
})
all.addEventListener('click', () => {
    // if (overlay.style.width == '230px') {
    //     overlay.style.width = '0'
    //     icon_hamburger.setAttribute('src', './images/icon-hambuger.svg')
    // }
    // else if (overlay.style.width === '230') {
    //     icon_hamburger.setAttribute('src', './images/icon-close.svg')
    // } else {
    // }

    if (overlay.className.includes('activeNav')) {
        icon_hamburger.setAttribute('src', './images/icon-hambuger.svg')

    }

    overlay.classList.remove('activeNav')
})
menu.addEventListener('click', () => {

    overlay.classList.toggle('activeNav')
    // if (overlay.style.width == '230px') {
    //     overlay.style.width = '0'
    // }
    // else {
    //     overlay.style.width = '230px'
    // }
    if (overlay.className.includes('activeNav')) {
        icon_hamburger.setAttribute('src', './images/icon-close.svg')
    }
    else {
        icon_hamburger.setAttribute('src', './images/icon-hambuger.svg')
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

let projects = document.querySelectorAll(".projects")
let section_about_text = document.querySelector(".section_about_text")
window.addEventListener("scroll", sci = () => {
    let height = window.innerHeight / 5 * 3
    projects.forEach(project => {
        const protop = project.getBoundingClientRect().bottom
        if (height < protop) {
            project.classList.add("show")
        }
        else {
            project.classList.add("show")
        }
    })
    projects.forEach(project => {
        const protop = project.getBoundingClientRect().top
        if (height < protop) {
            project.classList.remove("show")
        }
        else {
            project.classList.remove("show")
        }
    })
})
sci()