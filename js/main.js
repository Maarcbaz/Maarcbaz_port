// const animation = document.querySelector(".animation")
// const containers = document.querySelector(".containers")
// const menu = document.querySelector('.open')
// const icon_hamburger = document.getElementById('openNav')
// const overlay = document.querySelector('.overlay')
// const all = document.querySelector('.container')

// let popmenu_btn = document.querySelector('.popmenu_btn')
// let popup_msg = document.querySelector('#popup_msg')
// const btn = document.querySelector('#email')

// function loadAnime() {
//     setTimeout(() => {
//         animation.style.display = 'none'
//         if (animation.style.display == 'block') {
//             containers.style.display = 'none'
//         } else {
//             containers.style.display = 'block'
//         }
//     }, 0);
// }


// window.addEventListener("load", function () {
//     loadAnime()
// })


// all.addEventListener('click', () => {
//     // if (overlay.style.width == '230px') {
//     //     overlay.style.width = '0'
//     //     icon_hamburger.setAttribute('src', './images/icon-hambuger.svg')
//     // }
//     // else if (overlay.style.width === '230') {
//     //     icon_hamburger.setAttribute('src', './images/icon-close.svg')
//     // } else {
//     // }

//     if (overlay.className.includes('activeNav')) {
//         icon_hamburger.setAttribute('src', './images/icon-hambuger.svg')



//     }
//     overlay.classList.remove('activeNav')

// })


// menu.addEventListener('click', () => {

//     overlay.classList.toggle('activeNav')
//     // if (overlay.style.width == '230px') {
//     //     overlay.style.width = '0'
//     // }
//     // else {
//     //     overlay.style.width = '230px'
//     // }
//     if (overlay.className.includes('activeNav')) {
//         icon_hamburger.setAttribute('src', './images/icon-close.svg')
//     }
//     else {
//         icon_hamburger.setAttribute('src', './images/icon-hambuger.svg')
//     }
// })


// let anchors = document.querySelectorAll('body > header > nav > div > ul >  a')
// function addActive(add) {
//     anchors.forEach(anchor => {
//         anchor.style.display = 'none'
//     })
//     document.getElementById(add) = currentTarget.classList.add('active')
//     // add.currentTarget.classList.add('active')
// }
// // let btnFt = document.getElementById('btnFooter')
// // btnFt.addEventListener('submit', () => {
// //     function validateForm() {
// //         return false
// //     }
// // })
// // validateForm()

// function validateForm() {
//     return false
// }

// // function validateEmail(email) {
// //     const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// //     return EmailRegex.test(email)
// // }




// // let inputs = document.querySelectorAll('input')
// // let textAreas = document.querySelectorAll('textarea')
// // textAreas.forEach((textArea) => {
// //     textArea.addEventListener('focus', function () {
// //         textArea.style.borderColor = 'white'
// //     })
// //     textArea.addEventListener('blur', function () {
// //         textArea.style.borderColor = ''
// //     })
// // })
// // inputs.forEach((input) => {
// //     input.addEventListener('focus', function () {
// //         input.style.borderColor = 'white'
// //     })
// //     input.addEventListener('blur', function () {
// //         input.style.backgroundColor = ''
// //     })
// // })



// // function navNavigation(evt) {
// //     let allNav = document.querySelectorAll('.allNav')
// //     let i;
// //     for (i = 0; i < allNav.lenght; i++) {
// //         allNav.className[i] = allNav.className[i].replace(" active", '')
// //     }
// //     if (allNav[i] === allNav.className == ('allNav')) {
// //         allNav.classList.remove(' active')
// //     }
// //     evt.currentTarget.className = ' active'
// // }

// let projects = document.querySelectorAll(".projects")
// let section_about_text = document.querySelector(".section_about_text")
// window.addEventListener("scroll", sci = () => {
//     let height = window.innerHeight / 5 * 3
//     projects.forEach(project => {
//         const protop = project.getBoundingClientRect().bottom
//         if (height < protop) {
//             project.classList.add("show")
//         }
//         else {
//             project.classList.add("show")
//         }
//     })
//     projects.forEach(project => {
//         const protop = project.getBoundingClientRect().top
//         if (height < protop) {
//             project.classList.remove("show")
//         }
//         else {
//             project.classList.remove("show")
//         }
//     })
// })
// sci()

// // SEND EMAIL REQUEST


// document.getElementById('form').addEventListener('submit', function (evt) {
//     evt.preventDefault()

//     const serviceID = "service_9oomgyp"
//     const templateID = "template_l9bhwxt"


//     emailjs.sendForm(serviceID, templateID, this).then(() => {
//         btn.value = "Send Email"
//         // alert("Sent!")
//     }, (err) => {
//         btn.value = 'Send Email';
//         alert(JSON.stringify(err))
//     });
// })

// console.log(popmenu_btn)





const animation = document.querySelector(".animation")
const containers = document.querySelector(".containers")
const menu = document.querySelector('.open')
const icon_hamburger = document.getElementById('openNav')
const overlay = document.querySelector('.overlay')
const all = document.querySelector('.container')

let popmenu_btn = document.querySelector('.popmenu_btn')
let popup_msg = document.querySelector('#popup_msg')
const btn = document.querySelector('#email')

// Form fields
const form_name = document.getElementById('from_name')
const message = document.getElementById('textarea')
const form_email = document.getElementById('email')
const sent = document.querySelector('.sent')
const sending = document.querySelector('.sending')

function loadAnime() {
    setTimeout(() => {
        animation.style.display = 'none'
        if (animation.style.display == 'block') {
            containers.style.display = 'none'
        } else {
            containers.style.display = 'block'
        }
    }, 0);
}

window.addEventListener("load", function () {
    loadAnime()
})

all.addEventListener('click', () => {
    if (overlay.className.includes('activeNav')) {
        icon_hamburger.setAttribute('src', './images/icon-hambuger.svg')
    }
    overlay.classList.remove('activeNav')
})

menu.addEventListener('click', () => {
    overlay.classList.toggle('activeNav')
    if (overlay.className.includes('activeNav')) {
        icon_hamburger.setAttribute('src', './images/icon-close.svg')
    }
    else {
        icon_hamburger.setAttribute('src', './images/icon-hambuger.svg')
    }
})

let anchors = document.querySelectorAll('body > header > nav > div > ul > a')
function addActive(add) {
    anchors.forEach(anchor => {
        anchor.style.display = 'none'
    })
    document.getElementById(add).classList.add('active')
}

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



// Email validation function
function validateEmail(email) {
    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return EmailRegex.test(email)
}

// Function to validate form fields and show the popup message
function popNav() {
    const nameValue = form_name.value.trim();
    const messageValue = message.value.trim();
    const emailValue = form_email.value.trim();

    if (nameValue === '') {
        return;
    }

    if (messageValue === '') {
        return;
    }

    if (!validateEmail(emailValue)) {
        return;
    }

    // If all validations pass, show popup message
    popup_msg.classList.add('activePop');
}

// Form Submission with Validation
document.getElementById('form').addEventListener('submit', function (evt) {
    evt.preventDefault(); // Prevent the form from submitting automatically

    // Call validation before sending email
    popNav();

    if (popup_msg.classList.contains('activePop')) {
        // If validation passes, proceed with email sending
        const serviceID = "service_9oomgyp";
        const templateID = "template_l9bhwxt";

        emailjs.init('zMB7SKXC-KMZWVK-p');
        emailjs.sendForm(serviceID, templateID, this).then(() => {
            Sent()
            load()
        }, (err) => {
            alert(JSON.stringify(err));
            popup_msg.classList.remove('activePop');
        });
    }

});


function Sent() {
    sent.style.display = 'flex'

    sending.style.display = 'none'
}

function load() {
    setTimeout(() => {
        popup_msg.classList.remove('activePop');
    }, 1500);
}


