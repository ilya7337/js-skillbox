
async function filterFilms() {
    const titleFilter = document.getElementById("filter-film-name").value.toLowerCase();
    const genreFilter = document.getElementById("filter-genre").value.toLowerCase();
    const yearFilter = document.getElementById("filter-release-year").value;
    const watchedFilter = document.getElementById("filter-is-watched").value;
    const film = {
        title: titleFilter,
        genre: genreFilter,
        releaseYear: yearFilter,
        isWatched: watchedFilter
    }
    const params = new URLSearchParams();
    if (titleFilter) params.append('title', titleFilter);
    if (genreFilter) params.append('genre', genreFilter);
    if (yearFilter) params.append('releaseYear', yearFilter);
    if (watchedFilter && watchedFilter != "all") {
        params.append('isWatched', watchedFilter == "watched" ? "true" : "false");
    }
    const responce = await fetch(`https://sb-film.skillbox.cc/films?${params.toString()}`, {
        headers: {
            email: "ovikdevil@gmail.com",
        }
    })
    const films = await responce.json();
    renderTable(films)
}


const filterName = document.querySelector('#filter-film-name');
const filterGenre = document.querySelector('#filter-genre');
const filterReleaseYear = document.querySelector('#filter-release-year');
const filterIsWatched = document.querySelector('#filter-is-watched');

filterName.addEventListener('input', () => filterFilms());
filterGenre.addEventListener('input', () => filterFilms());
filterReleaseYear.addEventListener('input', () => filterFilms());
filterIsWatched.addEventListener('input', () => filterFilms());



