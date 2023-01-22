const searchBar = document.querySelector('.search-bar');
const cards = document.querySelectorAll('.card');
let bookVal, authorVal;

function matchPrompt() {
    searchVal = searchBar.value.toLowerCase();
    for(let i=0; i<cards.length; i++) {
        bookVal = cards[i].children[1].textContent || cards[i].children[1].innerHTML;
        authorVal = cards[i].children[2].textContent || cards[i].children[2].innerHTML;
        if(bookVal.toLowerCase().indexOf(searchVal) > -1 || authorVal.toLowerCase().indexOf(searchVal) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

searchBar.addEventListener('keyup', matchPrompt);
searchBar.addEventListener('search', matchPrompt);