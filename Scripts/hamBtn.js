const hamBtn = document.querySelector('.ham-btn');
const navLinks = document.querySelector('.nav-ul');
const hamBtnLines = document.querySelectorAll('.line');
let hamBtnRotated = false;
// hamBtn.style.animationFillMode = 'forwards';

hamBtn.addEventListener('click', function() {
    // if(navLinks.style.display === 'flex') {
    //     navLinks.style.display = 'none';
    // }else {
    //     navLinks.style.display = 'flex';
    // }
    if(!hamBtnRotated) {
        hamBtn.style.animationName = 'rotateRight90';
        hamBtn.style.animationDelay = '1s';
        hamBtn.style.animationFillMode = 'forwards';
        for (const line of hamBtnLines) {
            line.style.background = '#2699fb';
            line.style.transition = '1s';
        }
        hamBtnRotated = true;
    } else {
        hamBtn.style.animationName = 'rotateLeft90';
        hamBtn.style.animationDelay = '1s';
        hamBtn.style.animationFillMode = 'forwards';
        for (const line of hamBtnLines) {
            line.style.background = '#fff';
            line.style.transition = '1s';
        }
        hamBtnRotated = false;
    }
    
});