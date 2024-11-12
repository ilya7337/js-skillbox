
export function sanitize(html) {
    const el = document.createElement('div');
    el.innerHTML = html;
    return el.textContent;
}

export function sortRecords(records, key, ascending) {
    return records.sort((a, b) => {
        if (a[key] < b[key]) {
            return ascending ? -1 : 1;
        }
        if (a[key] > b[key]) {
            return ascending ? 1 : -1;
        }
        return 0;
    });
}

export function getRecords() {
    const films = JSON.parse(localStorage.getItem('records')) || [];
    return films;
}

export function loader() {
    const loaderEl = document.createElement('div');
    loaderEl.classList.add('lds-ripple');
    const divEl = document.createElement('div');
    loaderEl.appendChild(divEl);
    loaderEl.appendChild(divEl)
    return loaderEl
}
