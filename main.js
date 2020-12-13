
let myLibrary = [];

function book (title, author, numberOfPages, readStatus) {

    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.readStatus = readStatus;

}

let theHobbit = new book("The Hobbit", "J.R.R. Tolkien", "295 pages", "have not read yet");
let miceAndMan = new book("Mice and Man", "John Steinbeck", "107 pages", "read");
let theGreatGatsby = new book("The Great Gatsby", "F. Scott Fitzgerald", "218 pages", "have not read yet");

myLibrary.push(theHobbit, miceAndMan, theGreatGatsby);


function formSubmit(event) {
    event.preventDefault();
    addBookToLibrary();
    let bookFormReset = document.getElementsByName("book-form")[0];
    bookFormReset.reset();
    
}

const form = document.getElementById("form");
form.addEventListener('submit', formSubmit);



function addBookToLibrary() {
    let newBook;
    myLibrary.push(
        newBook = new book(
            document.getElementById("book-title").value, 
            document.getElementById("book-author").value, 
            document.getElementById("number-of-pages").value,
            document.querySelector("input[name=read-status]:checked").value
        )

    )

    myLibraryListToBookCards();

}


function showForm() {
    if(document.getElementById("form").style.visibility === "hidden") {
        document.getElementById("form").style.visibility = "visible";
        document.getElementById("new-book").textContent = "CLOSE";
    } else {
        document.getElementById("form").style.visibility = "hidden";
        document.getElementById("new-book").textContent = "NEW BOOK";
    }
}

for (let i = 0; i < myLibrary.length; i++) {

    let bookBox = document.createElement("div");
    bookBox.classList.add("book-box");

    let bookTitleText = document.createElement("p");
    bookTitleText.setAttribute("id", "book-title-text");
    bookTitleText.textContent = myLibrary[i].title;

    let bookAuthorText = document.createElement("p");
    bookAuthorText.setAttribute("id", "book-author-text");
    bookAuthorText.textContent = myLibrary[i].author;

    let numberOfPagesText = document.createElement("p");
    numberOfPagesText.setAttribute("id", "number-of--pages-text");
    numberOfPagesText.textContent = myLibrary[i].numberOfPages;

    let readStatusText = document.createElement("p");
    readStatusText.setAttribute("id", "read-status-text");
    readStatusText.textContent = myLibrary[i].readStatus;

    let closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.setAttribute("data-index", `${i}`);

    let toggleStatusButton = document.createElement("button");
    toggleStatusButton.textContent = "Toggle";
    toggleStatusButton.setAttribute("data-toggle", `${i}`);

    bookBox.appendChild(bookTitleText);
    bookBox.appendChild(bookAuthorText);
    bookBox.appendChild(numberOfPagesText);
    bookBox.appendChild(readStatusText);
    bookBox.appendChild(toggleStatusButton);
    bookBox.appendChild(closeButton);

    document.getElementById("book-list").appendChild(bookBox);
}


let allCloseButtons = document.querySelectorAll("[data-index]");

allCloseButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", () => {
        closeButton.parentElement.remove();
        
        const differentTitle = myLibrary.filter(eachbook => eachbook.title !== closeButton.parentNode.childNodes[0].textContent);
        myLibrary = differentTitle;
    });
})



let allToggleButtons = document.querySelectorAll("[data-toggle]");

allToggleButtons.forEach((toggleButton) => {
    toggleButton.addEventListener("click", () => {
        if (toggleButton.parentNode.childNodes[3].textContent === "read") {
            
        
        const sameTitleIndex = myLibrary.findIndex(eachbook => eachbook.title === toggleButton.parentNode.childNodes[0].textContent);
        
        myLibrary[sameTitleIndex].readStatus = "have not read yet";
        toggleButton.parentNode.childNodes[3].textContent = "have not read yet";

        } else {
        
        const sameTitleIndex = myLibrary.findIndex(eachbook => eachbook.title === toggleButton.parentNode.childNodes[0].textContent);
        
        myLibrary[sameTitleIndex].readStatus = "read";
        toggleButton.parentNode.childNodes[3].textContent = "read";
        
        }
        
    });

})




function myLibraryListToBookCards() {


    let bookBox = document.createElement("div");
    bookBox.classList.add("book-box");

    let bookTitleText = document.createElement("p");
    bookTitleText.setAttribute("id", "book-title-text");
    bookTitleText.textContent = myLibrary[myLibrary.length - 1].title;

    let bookAuthorText = document.createElement("p");
    bookAuthorText.setAttribute("id", "book-author-text");
    bookAuthorText.textContent = myLibrary[myLibrary.length - 1].author;

    let numberOfPagesText = document.createElement("p");
    numberOfPagesText.setAttribute("id", "number-of--pages-text");
    numberOfPagesText.textContent = myLibrary[myLibrary.length - 1].numberOfPages;

    let readStatusText = document.createElement("p");
    readStatusText.setAttribute("id", "read-status-text");
    readStatusText.textContent = myLibrary[myLibrary.length - 1].readStatus;

    let closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.setAttribute("data-index", `${myLibrary.length - 1}`);

    let toggleStatusButton = document.createElement("button");
    toggleStatusButton.textContent = "Toggle";
    toggleStatusButton.setAttribute("data-toggle", `${myLibrary.length - 1}`);

    bookBox.appendChild(bookTitleText);
    bookBox.appendChild(bookAuthorText);
    bookBox.appendChild(numberOfPagesText);
    bookBox.appendChild(readStatusText);
    bookBox.appendChild(toggleStatusButton);
    bookBox.appendChild(closeButton);

    document.getElementById("book-list").appendChild(bookBox);



    let allCloseButtons = document.querySelectorAll("[data-index]");

    allCloseButtons.forEach((closeButton) => {
        closeButton.addEventListener("click", () => {
            closeButton.parentElement.remove();
            
            const differentTitle = myLibrary.filter(eachbook => eachbook.title !== closeButton.parentNode.childNodes[0].textContent);
            myLibrary = differentTitle;
        });
    })
    
    
    
    let allToggleButtons = document.querySelectorAll("[data-toggle]");
    
    allToggleButtons.forEach((toggleButton) => {
        toggleButton.addEventListener("click", () => {
            if (toggleButton.parentNode.childNodes[3].textContent === "read") {
                
            
            const sameTitleIndex = myLibrary.findIndex(eachbook => eachbook.title === toggleButton.parentNode.childNodes[0].textContent);
            console.log(sameTitleIndex);
            myLibrary[sameTitleIndex].readStatus = "have not read yet";
            toggleButton.parentNode.childNodes[3].textContent = "have not read yet";
    
            } else {
            
            const sameTitleIndex = myLibrary.findIndex(eachbook => eachbook.title === toggleButton.parentNode.childNodes[0].textContent);
            console.log(sameTitleIndex);
            myLibrary[sameTitleIndex].readStatus = "read";
            toggleButton.parentNode.childNodes[3].textContent = "read";
            
            }
            
        });
    
    })
    
}






