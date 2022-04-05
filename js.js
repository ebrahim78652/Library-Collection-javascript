

function Book(title, author, numPages, isRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.isRead = isRead;
}
Book.prototype.toggleRead = function () {
    this.isRead ? this.isRead = false : this.isRead = true;
}




//array of books
let books = [];




//function to display the books
let displayBook = function (book) {
    let card_container = document.createElement('div');
    card_container.classList.add('card-container');
    card_container.setAttribute('id', `${books.length + 1}`)


    //name container
    let name_container = document.createElement('div');
    name_container.classList.add('name-container');

    let name = document.createElement('span');
    name.classList.add('name');
    name.textContent = ('Name: ')


    let name_value = document.createElement('span');
    name_value.classList.add('name-value');
    name_value.textContent = (book.title);




    //author container
    let author_container = document.createElement('div');
    author_container.classList.add('author-container');

    let name2 = document.createElement('span');
    name2.classList.add('name');
    name2.textContent = ('Author: ')

    let name_value2 = document.createElement('span');
    name_value2.classList.add('name-value');
    name_value2.textContent = (book.author);





    //numPages container

    let numPages_container = document.createElement('div');
    numPages_container.classList.add('numPages-container');

    let name3 = document.createElement('span');
    name3.classList.add('name');
    name3.textContent = ('Pages: ')


    let name_value3 = document.createElement('span');
    name_value3.classList.add('name-value');
    name_value3.textContent = (book.numPages);





    //isRead container
    let isRead_container = document.createElement('div');
    isRead_container.classList.add('isRead-container');

    let name4 = document.createElement('span');
    name4.classList.add('name');
    name4.textContent = ('Read: ')


    let name_value4 = document.createElement('span');
    name_value4.classList.add('name-value');
    name_value4.textContent = (book.isRead);


    // user options

    let user_options = document.createElement('div');
    user_options.classList.add('user-options')

    let remove = document.createElement('div');
    remove.classList.add('remove');
    remove.textContent = "Remove";


    let read = document.createElement('div');
    read.classList.add('read');
    book.isRead ? read.textContent = "Not read" : read.textContent = "Read already";
    //make the child structure (CS)

    //make the child structure for the name-container
    name_container.appendChild(name);
    name_container.appendChild(name_value);

    //CS for author-container
    author_container.appendChild(name2);
    author_container.appendChild(name_value2);

    //CS for numPages
    numPages_container.appendChild(name3);
    numPages_container.appendChild(name_value3);


    //CS for isRead_container
    isRead_container.append(name4, name_value4);

    //CS for user_options
    user_options.append(remove, read);


    //CS for card_container

    card_container.append(name_container, author_container, numPages_container, isRead_container, user_options);

    //CS for books name_container

    let books_container = document.querySelector('.books-container');

    books_container.appendChild(card_container);


    //adding the book to the array of books
    books.push(book);





    let readButton = card_container.querySelector('.read');
    readButton.addEventListener('click', (event) => {
        console.log("The id of the card container clicked : " + card_container.getAttribute('id'));
        let id = parseInt(card_container.getAttribute('id'))
        let bookToBeChanged = (books[id - 1]);
        bookToBeChanged.toggleRead();

        //now do the CSS changes:
        let isRead_container = card_container.querySelector('.isRead-container');
        let isRead_nameValue = isRead_container.querySelector('.name-value')
        isRead_nameValue.textContent = `${bookToBeChanged.isRead}`;


        let userOptions = card_container.querySelector('.user-options');
        let readButton = userOptions.querySelector('.read');
        readButton.textContent === "Read already" ? readButton.textContent = "Not Read yet" : readButton.textContent = "Read already";

    })


    //event listener on the "remove" button
    let removeButton = card_container.querySelector('.remove');
    removeButton.addEventListener('click', (event) => {
        let card_container2 = removeButton.parentNode.parentNode;
        console.log("The id of the card container clicked : " + card_container2.getAttribute('id'));
        let id = parseInt(card_container2.getAttribute('id'))
        let bookToBeChanged = (books[id - 1]);
        books.splice(id - 1, 1);

        card_container2.parentNode.removeChild(card_container2);
    })


}


//test code---------------------------------------

let testBook = new Book("test book1", "testAuthor", 789, false);
let testBook2 = new Book('second book', "ebro", 8, true);

//calling the function

displayBook(testBook);

displayBook(testBook2);









//event listener on the "addbook" button
let addBookButton = document.querySelector('.addBook');
addBookButton.addEventListener('click', (event) => {
    let form_wrapper = document.querySelector('.form-wrapper');
    form_wrapper.style.display = 'flex';
})

//event listener on the close buttons
let closeButton = document.querySelector('.close');
closeButton.addEventListener('click', (event) => {
    let form_wrapper = document.querySelector('.form-wrapper');
    form_wrapper.style.display = 'none';
})

//event Listener on the done button
let doneButton = document.querySelector('.done');
doneButton.addEventListener('click', (event) => {
    let form_wrapper = document.querySelector('.form-wrapper');

    //get the title, author, pages, and read information
    let title = form_wrapper.querySelector('.title');
    let author = form_wrapper.querySelector('.author');
    let numPages = form_wrapper.querySelector('.numPages');
    let isRead = form_wrapper.querySelector('.isRead');

    let newBook = new Book(title.value, author.value, numPages.value, isRead.value);
    displayBook(newBook);

})





