import { deleteRecord, renderTable } from "./recordsTable.js";
import { sortRecords, getRecords } from "./funcForRecords.js";

export function getRowRecordEl(name, shelf, weight, time) {
    const row = document.createElement('tr');
    const nameCol = document.createElement('td');
    const shelfCol = document.createElement('td');
    const weightCol = document.createElement('td');
    const timeCol = document.createElement('td');
    const deleteCol = document.createElement('td');
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Удалить';
    deleteBtn.classList.add('delete-button');
    deleteBtn.addEventListener('click', () => {
        deleteRecord(name, shelf, weight, time);
    });

    nameCol.textContent = name;
    shelfCol.textContent = shelf;
    weightCol.textContent = weight;
    timeCol.textContent = time;
    deleteCol.appendChild(deleteBtn)

    row.appendChild(nameCol);
    row.appendChild(shelfCol);
    row.appendChild(weightCol);
    row.appendChild(timeCol);
    row.appendChild(deleteCol)

    return row;
}

export function getInput(type, placeholder, id) {
    const inputBlock = document.createElement('div');
    inputBlock.setAttribute('class', 'input-elem')
    const input = document.createElement('input');
    input.type = type;
    input.placeholder = placeholder;
    input.setAttribute('class', 'form-input');
    input.id = id;
    inputBlock.appendChild(input);
    return inputBlock;
}

export function createTableEl() {
    const tableBlock = document.querySelector('.records-table');
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    thead.innerHTML = `
    <tr>
        <th data-sort="name">Название</th>
        <th data-sort="shelf">Полка</th>
        <th data-sort="weight">Вес</th>
        <th data-sort="time">Время хранения</th>
        <th>Удалить</th>
    </tr>
    `;

    thead.querySelectorAll('th[data-sort]').forEach(th => {
        th.addEventListener('click', () => {
            const sortKey = th.getAttribute('data-sort');
            const isAscending = th.classList.toggle('ascending'); // Переключаем класс для определения порядка сортировки
            const sortedRecords = sortRecords(getRecords(), sortKey, isAscending);
            renderTable(sortedRecords);
        });
    });

    tbody.setAttribute('class', 'table-body');
    table.appendChild(thead);
    table.appendChild(tbody);
    return table
}
