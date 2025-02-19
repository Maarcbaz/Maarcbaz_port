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
    }, 1000);
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
            clr()
        }, (err) => {
            alert(JSON.stringify(`${err}: An error occured 404`));
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


function clr() {
    setTimeout(() => {
        form_name.value = ''
        message.value = ''
        form_email.value = ''
    }, 1505);
}
