try {
    const cards = document.querySelectorAll('.card');
    for(let i=0; i<cards.length; i++) {
        const titleName = cards[i].children[1].innerText;
        const authorName = cards[i].children[2].innerText;
    
        const dowloadDiv = document.createElement('div');
        const title = document.createElement('p');
        const author = document.createElement('span');
        const downBtn = document.createElement('button');
        title.append(titleName);
        author.append(authorName);
        downBtn.innerText = "Download";
        dowloadDiv.classList.add('download-div');
        title.classList.add('title');
        author.classList.add('author');
        downBtn.classList.add('down-btn');
        dowloadDiv.append(title);
        dowloadDiv.append(author);
        dowloadDiv.append(downBtn);
        dowloadDiv.style.animation = "slide-up .4s ease-in-out forwards";
        cards[i].append(dowloadDiv);

        cards[i].addEventListener('mouseenter', toggleDowloadDiv);
        cards[i].addEventListener('mouseleave', toggleDowloadDiv);

        downBtn.addEventListener('click', function() {
            const popupContainer = document.createElement('div');
                const overlay = document.createElement('div');
                const popupWindow = document.createElement('div');
                    const closeBtn = document.createElement('button');
                    const header = document.createElement('p');
                    const mainContent = document.createElement('div');
                        const bookImg = document.createElement('Img');        
                        const infoAndBtns = document.createElement('div');
                            const infoContainer = document.createElement('div');
                                const infoTitle = document.createElement('p');
                                const infoAuthor = document.createElement('span');
                            const btnsContainer = document.createElement('div');
                                const epubBtn = document.createElement('button');
                                const pdfBtn = document.createElement('button');
            
            document.querySelector('body').append(popupContainer);
            popupContainer.append(overlay);
            popupContainer.append(popupWindow);
            popupWindow.append(closeBtn);
            popupWindow.append(header);
            popupWindow.append(mainContent);
            mainContent.append(bookImg);
            mainContent.append(infoAndBtns);
            infoAndBtns.append(infoContainer);
            infoAndBtns.append(btnsContainer);
            infoContainer.append(infoTitle);
            infoContainer.append(infoAuthor);
            btnsContainer.append(epubBtn);
            btnsContainer.append(pdfBtn);

            // Applying content
            header.innerText = "Download book file";
            closeBtn.innerHTML = '&times;';
            bookImg.src = cards[i].children[0].src;
            infoTitle.innerText = title.innerText;
            infoAuthor.innerText = author.innerText;
            epubBtn.title = 'Epub';
            pdfBtn.title = 'PDF';
            // Applying styles
            popupContainer.classList.add('popup-container');
            overlay.classList.add('overlay');
            popupWindow.classList.add('popup-window');
            closeBtn.classList.add('close-btn');
            header.classList.add('header');
            mainContent.classList.add('main-content');
            bookImg.classList.add('book-img');
            infoAndBtns.classList.add('info-and-btns');
            infoTitle.classList.add('title');
            infoAuthor.classList.add('author');
            btnsContainer.classList.add('btns-container');
            epubBtn.classList.add('down-type-btn');
            pdfBtn.classList.add('down-type-btn');

            closeBtn.addEventListener('click', togglePopup);
            function togglePopup() {
                popupContainer.classList.toggle('deactivate');
            };
        });
        function toggleDowloadDiv() {
            dowloadDiv.classList.toggle('active');
        }
        
    }
    
} catch (e) {
    console.log(e);
}