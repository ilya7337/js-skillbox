

let books = ['Гарри Поттер', 'Грокаем алгоритмы', 'Финансист']

function addBook() {
    const newBook = prompt('Введите название книги')
    if (!newBook) {
        alert('Название книги не введено!')
    }
    else {
        books.push(newBook)
    }
    renderBooks(books)
}

function searchBook() {
    const newBook = prompt('Введите название книги');
    let res = -1;
    let find = false;
    for (let i = 0; i < books.length; i++) {
        if (newBook === books[i]) {
            res = i;
            find = true;
            break
        }
    }
    if (!find) {
        alert("Книга не найдена!")
    }
    renderBooks(books, res)
}


function renderBooks(arr, searchElem = -1) {
    const booksList = document.querySelector('.books-list');
    booksList.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        const liEl = document.createElement('li');
        liEl.classList.add('book-elem')
        liEl.textContent = `${i + 1}) ${arr[i]}`;
        if (searchElem === i) {
            liEl.classList.add('searched-elem')
        }
        booksList.append(liEl);
    }
}


renderBooks(books)




