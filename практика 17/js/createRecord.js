import { getInput } from "./components.js";
import { sanitize, getRecords } from "./funcForRecords.js";
import { renderRecords } from "./recordsTable.js";



export function renderForm() {
    const pageTitle = document.querySelector('#pageTitle');
    pageTitle.textContent = 'Добавить запись';
    const recordForm = document.querySelector('#recordForm');
    const nameInput = getInput('text', 'Название', 'nameInput');
    const shelfInput = getInput('text', 'Полка', 'shelfInput');
    const weightInput = getInput('text', 'Вес', 'weightInput');
    const dateInput = getInput('date', 'Дата', 'dateInput')

    const submit = document.createElement('button');
    submit.textContent = 'Добавить';
    submit.setAttribute('class', 'add-record');
    submit.type = 'submit';

    recordForm.appendChild(nameInput);
    recordForm.appendChild(shelfInput);
    recordForm.appendChild(weightInput);
    recordForm.appendChild(dateInput);
    recordForm.appendChild(submit);
    const validation = new JustValidate('#recordForm');
    validation
        .addField('#nameInput', [
            {
                rule: 'required',
                errorMessage: 'Введите название товара'
            },
        ])
        .addField('#shelfInput', [
            {
                rule: 'required',
                errorMessage: 'Введите полку'
            },
        ])
        .addField('#weightInput', [
            {
                rule: 'required',
                errorMessage: 'Введите вес товара',
            },
            {
                rule: 'number',
                errorMessage: 'Вес должен быть числом'
            },
        ])
        .addField('#dateInput', [
            {
                rule: 'required',
                errorMessage: 'Введите дату'
            }
        ])
        .onSuccess((e) => {
            appendNewRecord(e);
        });
}

export function appendNewRecord(e) {
    e.preventDefault();
    const name = document.getElementById('nameInput').value;
    const shelf = document.getElementById('shelfInput').value;
    const weight = document.getElementById('weightInput').value;
    const date = document.getElementById('dateInput').value;
    const newRecord = {
        name: sanitize(name),
        shelf: sanitize(shelf),
        weight: sanitize(weight),
        time: sanitize(date)
    };
    const records = getRecords();
    records.push(newRecord);
    localStorage.setItem('records', JSON.stringify(records));
    renderRecords();
}