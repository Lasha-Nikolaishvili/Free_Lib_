const sections = document.querySelectorAll('.sec');
let prevSecName;
let firstSelection = true;

function convertToDashNotation(str) {
    return str.replace(/ /g,'-');
}

a.addEventListener('click', function() {
    const selSecName = selElmnt.value;
    let l = sections.length;
    if(firstSelection) {
        if(selSecName !== '#') {
            for(let i=0; i<l; i++) {
                if(convertToDashNotation(sections[i].id) !== convertToDashNotation(selSecName)) {
                    sections[i].classList.toggle('inactive');
                }
            }
            firstSelection = false;
            prevSecName = selSecName;
        }
    } else {
        if(prevSecName !== selSecName) {
            for(let i=0; i<l; i++) {
                if(convertToDashNotation(sections[i].id) === convertToDashNotation(prevSecName) || convertToDashNotation(sections[i].id) === convertToDashNotation(selSecName)) {
                    sections[i].classList.toggle('inactive');
                }
            }
        }
        prevSecName = selSecName;
    }
})