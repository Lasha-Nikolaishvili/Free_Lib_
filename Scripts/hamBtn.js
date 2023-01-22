const hamBtn = document.querySelector('.ham-btn');
const navLinks = document.querySelector('.nav-ul');
const mainContent = document.querySelector('main');
const hamBtnLines = document.querySelectorAll('.line');
let hamBtnRotated = false;

hamBtn.addEventListener('click', function() {
    hamBtn.style.animation = '';
    navLinks.classList.toggle('active');
    mainContent.classList.toggle('active');
    for (const line of hamBtnLines) {
        line.classList.toggle('active');
        hamBtn.classList.toggle('active');
    }

    if(!hamBtnRotated) {
        hamBtn.style.animation = 'rotateRight360 1s forwards';
        hamBtnRotated = true;
    } else {
        hamBtn.style.animation = 'rotateLeft360 1s forwards';
        hamBtnRotated = false;
    }
});