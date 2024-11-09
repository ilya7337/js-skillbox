function handleFormSubmit(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const genre = document.getElementById("genre").value;
  const releaseYear = document.getElementById("releaseYear").value;
  const isWatched = document.getElementById("isWatched").checked;

  const film = {
    title: title,
    genre: genre,
    releaseYear: releaseYear,
    isWatched: isWatched,
  };

  addFilm(film);
  clearForm();
}

async function getFilms() {
  const filmsResponse = await fetch("https://sb-film.skillbox.cc/films", {
    headers: {
      email: "ovikdevil@gmail.com",
    },
  });
  const films = await filmsResponse.json();
  return films
}


async function addFilm(film) {
  // const films = JSON.parse(localStorage.getItem("films")) || [];
  // films.push(film);
  // localStorage.setItem("films", JSON.stringify(films));

  // console.log(film);
  await fetch("https://sb-film.skillbox.cc/films", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      email: "ovikdevil@gmail.com",
    },
    body: JSON.stringify(film),
  });
  renderTable(await getFilms());
}

function clearForm() {
  const titleEl = document.getElementById("title");
  const genreEl = document.getElementById("genre");
  const releaseYearEl = document.getElementById("releaseYear");
  const isWatchedEl = document.getElementById("isWatched");

  titleEl.value = '';
  genreEl.value = '';
  releaseYearEl.value = '';
  isWatchedEl.checked = false;
}


async function renderTable(films) {
  const filmTableBody = document.getElementById("film-tbody");

  // Clear table body first
  filmTableBody.innerHTML = "";

  // Then add new rows
  films.forEach((film, index) => {
    const row = document.createElement("tr");
    const delBtn = document.createElement('button')
    delBtn.textContent = 'Удалить'
    delBtn.addEventListener('click', () => deleteFilm(film.id))
    delBtn.setAttribute('class', 'delete-button')

    const titleCell = document.createElement("td");
    titleCell.textContent = film.title;

    const genreCell = document.createElement("td");
    genreCell.textContent = film.genre;

    const releaseYearCell = document.createElement("td");
    releaseYearCell.textContent = film.releaseYear;

    const isWatchedCell = document.createElement("td");
    isWatchedCell.textContent = film.isWatched ? "Да" : "Нет";

    const buttonCell = document.createElement("td");
    buttonCell.appendChild(delBtn);

    // Добавление ячеек в строку
    row.appendChild(titleCell);
    row.appendChild(genreCell);
    row.appendChild(releaseYearCell);
    row.appendChild(isWatchedCell);
    row.appendChild(buttonCell);

    // Добавление строки в тело таблицы
    filmTableBody.appendChild(row);
    filmTableBody.appendChild(row);
  });
}

async function initialize() {
  const films = await getFilms();
  renderTable(films);
}

initialize();
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



