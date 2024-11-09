async function deleteFilm(filmId) {
    await fetch(`https://sb-film.skillbox.cc/films/${filmId}`, {
        method: 'DELETE',
        headers: {
            email: "ovikdevil@gmail.com",
        }
    });
    const films = await getFilms();
    renderTable(films);
}

 async function deleteAll() {
    fetch('https://sb-film.skillbox.cc/films', {
        method: 'DELETE',
        headers: {
            email: "ovikdevil@gmail.com",
        }
    })
    const films = await getFilms();
    renderTable(films);
}

const deleteAllBtn = document.querySelector('#delete-all');
deleteAllBtn.addEventListener('click', () => deleteAll())
