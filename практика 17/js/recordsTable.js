import { getRecords, loader } from './funcForRecords.js'
import { getRowRecordEl } from './components.js'
import { createTableEl } from './components.js';

export function renderRecords() {
    const loaderEl = loader();
    document.body.append(loaderEl)
    const header = document.getElementById('header');
    header.innerHTML = '';
    const formEL = document.querySelector('.record-form');
    formEL.innerHTML = '';
    const recordForm = document.querySelector('#recordForm');
    recordForm.innerHTML = '';
    const title = document.createElement('h1');
    title.textContent = 'Склад';
    title.setAttribute('class', 'title-name')
    const addRecordBtn = document.createElement('button');
    addRecordBtn.textContent = 'Добавить запись';
    addRecordBtn.setAttribute('class', 'add-record');
    addRecordBtn.addEventListener('click', () => addRecord());
    header.appendChild(title);
    header.appendChild(addRecordBtn);
    renderTable(getRecords());
    loaderEl.remove();
}

export async function addRecord() {
    const header = document.getElementById('header');
    const table = document.querySelector('.records-table');
    table.innerHTML = '';
    header.innerHTML = '';
    const loaderEl = loader();
    document.body.append(loaderEl)
    const createRec = await import('./createRecord.js')

    const title = document.createElement('h1');
    title.textContent = 'Добавить запись';
    header.append(title);
    createRec.renderForm()
    loaderEl.remove() 
}

export function renderTable(records) {
    const recTable = document.querySelector('.records-table');
    recTable.innerHTML = '';
    const table = createTableEl();
    const tableBody = document.querySelector('.table-body');
    records.forEach(record => {
        const row = getRowRecordEl(record.name, record.shelf, record.weight, record.time);
        table.appendChild(row);
    });
    recTable.appendChild(table);
}

export function deleteRecord(name, shelf, weight, time) {
    const records = getRecords();
    const updatedRecords = records.filter(record =>
        record.name !== name ||
        record.shelf !== shelf ||
        record.weight !== weight ||
        record.time !== time
    );
    localStorage.setItem('records', JSON.stringify(updatedRecords));
    renderTable(updatedRecords);
}
