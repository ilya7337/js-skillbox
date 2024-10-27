
const formEl = document.querySelector('.form');
const errorEl = document.querySelector('.error-msg');
const tableBodyEl = document.querySelector('.table-body');
let products = [];


function renderProduct() {
    tableBodyEl.innerHTML = ''
    products.forEach(product => {
        const rowEl = document.createElement('tr');
        Object.keys(product).forEach(key => {
            const tdEl = document.createElement('td')
            tdEl.textContent = product[key];
            rowEl.appendChild(tdEl);
        });
        tableBodyEl.append(rowEl);
    });
}



formEl.addEventListener('submit', function (e) {
    e.preventDefault();
    const nameInput = document.querySelector('.name');
    const weightInput = document.querySelector('.weight');
    const distanceInput = document.querySelector('.distance');

    const name = nameInput.value;
    const weight = parseFloat(weightInput.value);
    const distance = parseFloat(distanceInput.value);

    if (weight <= 0 || distance <= 0) {
        errorEl.textContent = 'Пожалуйста, вводите данные о весе и расстоянии корректно'
    }
    else {
        products.push({ 'name': name, 'weight': weight, 'distance': distance, 'price': (weight * distance) / 10 })
        nameInput.value = '';
        weightInput.value = '';
        distanceInput.value = '';
        renderProduct()
    }

})


