
function handleFormSubmit(e) {
    e.preventDefault();
    const titleEl = document.querySelector('#title');
    const genreEl = document.querySelector('#genre');
    const releaseYearEl = document.querySelector('#releaseYear');
    const isWatchedEl = document.querySelector('#isWatched');

    const film = {
        title: titleEl.value,
        genre: genreEl.value,
        releaseYear: releaseYearEl.value,
        isWatched: isWatchedEl.checked
    };

    addFilmToLocalStorage(film);
    titleEl.value = '';
    genreEl.value = '';
    releaseYearEl.value = '';
    isWatchedEl.checked = false;
}

function addFilmToLocalStorage(film) {
    const films = JSON.parse(localStorage.getItem('films')) || [];
    films.push(film);
    localStorage.setItem('films', JSON.stringify(films))
    renderTable(films)
}

function renderTable(films) {
    const tableBody = document.querySelector('#film-tbody');
    tableBody.innerHTML = "";
    films.forEach((film, index) => {
        const row = document.createElement('tr');

        const titleCell = document.createElement('td');
        titleCell.textContent = film.title;

        const genreCell = document.createElement('td');
        genreCell.textContent = film.genre;

        const releaseYearCell = document.createElement('td');
        releaseYearCell.textContent = film.releaseYear;

        const isWatchedCell = document.createElement('td');
        isWatchedCell.textContent = film.isWatched ? 'Да' : 'Нет';

        const actionsCell = document.createElement('td');
        actionsCell.setAttribute('class', 'actions-cell')

        const editButton = document.createElement('button');
        editButton.className = 'edit-btn';
        editButton.textContent = 'Редактировать';
        editButton.addEventListener('click', () => editFilm(index));

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'Удалить';
        deleteButton.addEventListener('click', () => deleteFilm(index));

        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);

        row.appendChild(titleCell);
        row.appendChild(genreCell);
        row.appendChild(releaseYearCell);
        row.appendChild(isWatchedCell);
        row.appendChild(actionsCell);

        tableBody.appendChild(row);
    });

}

function deleteFilm(index) {
    const films = JSON.parse(localStorage.getItem('films')) || [];
    films.splice(index, 1);
    localStorage.setItem('films', JSON.stringify(films));
    renderTable(films);
}

function editFilm(index) {
    fillDataForUpdate(index);
    editSumbitButtonsForUpdate(index);
}

function fillDataForUpdate(index) {
    const titleEl = document.querySelector('#title');
    const genreEl = document.querySelector('#genre');
    const releaseYearEl = document.querySelector('#releaseYear');
    const isWatchedEl = document.querySelector('#isWatched');
    const films = JSON.parse(localStorage.getItem('films')) || [];
    titleEl.value = films[index].title;
    genreEl.value = films[index].genre;
    releaseYearEl.value = films[index].releaseYear;
    isWatchedEl.checked = films[index].isWatched;
}

function editSumbitButtonsForUpdate(index) {
    const submitBtns = document.querySelector('#submitButtons');
    submitBtns.innerHTML = '';
    
    const updateButton = document.createElement('button');
    updateButton.className = 'update-btn';
    updateButton.type = 'button';
    updateButton.textContent = 'Обновить';
    updateButton.addEventListener('click', () => updateFilm(index));

    const cancelUpdateButton = document.createElement('button');
    cancelUpdateButton.className = 'cancel-update-btn';
    cancelUpdateButton.type = 'button';
    cancelUpdateButton.textContent = 'Отменить редактирование';
    cancelUpdateButton.addEventListener('click', () => cancelUpdateFilm(index));

    submitBtns.appendChild(updateButton);
    submitBtns.appendChild(cancelUpdateButton);
}

function cancelUpdateFilm(index) {
    const titleEl = document.querySelector('#title');
    const genreEl = document.querySelector('#genre');
    const releaseYearEl = document.querySelector('#releaseYear');
    const isWatchedEl = document.querySelector('#isWatched');

    titleEl.value = '';
    genreEl.value = '';
    releaseYearEl.value = '';
    isWatchedEl.checked = false;

    setStartSubmit();
}


function updateFilm(index) {
    const films = JSON.parse(localStorage.getItem('films')) || [];

    const titleEl = document.querySelector('#title');
    const genreEl = document.querySelector('#genre');
    const releaseYearEl = document.querySelector('#releaseYear');
    const isWatchedEl = document.querySelector('#isWatched');

    films[index].title = titleEl.value;
    films[index].genre = genreEl.value;
    films[index].releaseYear = releaseYearEl.value;
    films[index].isWatched = isWatchedEl.checked;

    localStorage.setItem('films', JSON.stringify(films))
    renderTable(films)
    titleEl.value = '';
    genreEl.value = '';
    releaseYearEl.value = '';
    isWatchedEl.checked = false;

    setStartSubmit();

}

function setStartSubmit() {
    const submitBtns = document.querySelector('#submitButtons');
    submitBtns.innerHTML = '';
    const subBtn = document.createElement('button');
    subBtn.type = 'submit';
    subBtn.textContent = 'Добавить';
    subBtn.id = 'submitButton'
    submitBtns.appendChild(subBtn);
}



const validation = new JustValidate('#film-form');

validation
    .addField('#title', [
        {
            rule: 'required',
            errorMessage: 'Введите название фильма',
            errorMessageContainer: '#title-error', 
        },
    ])
    .addField('#genre', [
        {
            rule: 'required',
            errorMessage: 'Введите жанр фильма',
            errorMessageContainer: '#genre-error', 
        },
    ])
    .addField('#releaseYear', [
        {
            rule: 'required',
            errorMessage: 'Введите год выпуска',
            errorMessageContainer: '#releaseYear-error', 
        },
        {
            rule: 'number',
            errorMessage: 'Год должен быть числом',
            errorMessageContainer: '#releaseYear-error', 
        },
    ])
    .onSuccess((event) => {
        handleFormSubmit(event);
    });

function sortFilms(isAscending) {
    const parametr = document.querySelector('#sort-parametr').value;
    const films = JSON.parse(localStorage.getItem('films')) || [];
    if (parametr == 'title') {
        films.sort((a, b) => {
            if (a.title < b.title) return isAscending ? -1 : 1; 
            if (a.title > b.title) return isAscending ? 1 : -1;  
            return 0; 
        });
    }
    else if (parametr == 'genre') {
        films.sort((a, b) => {
            if (a.genre < b.genre) return isAscending ? -1 : 1;
            if (a.genre > b.genre) return isAscending ? 1 : -1;
            return 0;
        });
    }
    else {
        films.sort((a, b) => {
            return isAscending ? a.releaseYear - b.releaseYear : b.releaseYear - a.releaseYear;
        });
    }
    renderTable(films);
}

const ascButton = document.querySelector('#sortAscButton');
const decButton = document.querySelector('#sortDecButton');
ascButton.addEventListener('click', () => sortFilms(true));
decButton.addEventListener('click', () => sortFilms(false));
const films = JSON.parse(localStorage.getItem('films')) || [];
renderTable(films)