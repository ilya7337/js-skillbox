import Delivery from "./Delivery.js";

export default class EditDelivery extends Delivery {
    constructor(name, address, distance, status = 'delivery') {
        super(name, address, distance);
        this._status = status;
    }

    set status(value) {
        this._status = value;
    }

    get status() {
        return this._status;
    }

    getCard() {
        const cardEl = super.getCard();
        const button = this._createButton();
        cardEl.appendChild(button);
        if (this.status == 'delivered') {
            cardEl.classList.add('delivered')
        }
        else if (this.status == 'canceled') {
            cardEl.classList.add('canceled')
        }
        return cardEl;
    }

    _createButton() {
        const button = document.createElement('button');
        button.textContent = 'Изменить';
        button.classList.add('edit-button');
        button.addEventListener('click', () => {
            this.editDelivery();
        });
        return button;
    }

    _createInput(type, value, classOfEl, placeholder) {
        const newInput = document.createElement('input');
        newInput.type = type;
        newInput.value = value;
        newInput.classList.add(classOfEl);
        newInput.placeholder = placeholder;
        return newInput;
    }

    _createSelectChange() {
        const options = [
            { value: 'delivery', text: 'Доставляется' },
            { value: 'delivered', text: 'Доставлен' },
            { value: 'canceled', text: 'Отменён' }
        ];
        const statusSelect = document.createElement('select');
        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option.value;
            opt.textContent = option.text;
            statusSelect.appendChild(opt);
        });
        statusSelect.value = this._status;
        return statusSelect;
    }

    editDelivery() {

        const changeEl = document.createElement('div')
        document.querySelector('.overlay').style.display = 'block';
        changeEl.classList.add('change-delivery');
        const changeTitle = document.createElement('h2');
        changeTitle.textContent = 'Изменить';
        changeTitle.classList.add('change-title')
        const formEl = document.createElement('form')
        formEl.classList.add('change-form');
        const nameInput = this._createInput('text', this._name, 'inputName', 'Имя')
        nameInput.classList.add('inputForm')
        const addressInput = this._createInput('text', this._address, 'inputAddress', "Адрес")
        addressInput.classList.add('inputForm')
        const distanceInput = this._createInput('number', this._distance, 'distanseInput', "Расстояние")
        distanceInput.classList.add('inputForm')
        const statusSelect = this._createSelectChange();
        statusSelect.classList.add('inputForm')
        const btnEl = document.createElement('button');
        btnEl.textContent = 'Сохранить';
        btnEl.classList.add('save-button');
        btnEl.type = 'submit';
        const closeBtn = this._getCloseBtn(changeEl);
        formEl.addEventListener('submit', (e) => this._sumbitForm(e))
        changeEl.appendChild(changeTitle);
        formEl.appendChild(nameInput);
        formEl.appendChild(addressInput);
        formEl.appendChild(distanceInput);
        formEl.appendChild(statusSelect);
        formEl.appendChild(btnEl);
        formEl.appendChild(closeBtn);
        changeEl.appendChild(formEl);
        document.body.appendChild(changeEl);
    }

    _getCloseBtn(changeEl) {
        const closeButton = document.createElement('button');
        closeButton.textContent = '✖'; 
        closeButton.classList.add('close-button');
        closeButton.type = 'button'; 

        closeButton.addEventListener('click', () => {
            document.querySelector('.overlay').style.display = 'none';
            changeEl.remove(); 
        });
        return closeButton;
    }

    _sumbitForm(e) {
        e.preventDefault();
        const nameEl = document.querySelector('.inputName').value;
        const addressEl = document.querySelector('.inputAddress').value;
        const distanceEl = document.querySelector('.distanseInput').value;
        const statusEl = document.querySelector('.change-form select').value;
        this._name = nameEl;
        this._address = addressEl;
        this._distance = distanceEl;
        this._status = statusEl;
        this.updateCard();
        document.querySelector('.overlay').style.display = 'none';
        document.querySelector('.change-delivery').remove();
    }

    updateCard() {
        const cardEl = this.getCard();
        const oldCardEl = document.querySelector(`#card${this.numId}`);
        if (oldCardEl) {
            oldCardEl.replaceWith(cardEl);
        }
    }

    static getTotalDistance(arr) {
        let totalSum = 0;
        arr.forEach(delivery => {
            if (delivery._status === undefined) {
                totalSum +=  Number(delivery._distance);
            }
            else {
                if (delivery._status === 'delivery' || delivery._status === 'delivered') {
                    totalSum += Number(delivery._distance);
                }
            }
        });
        return totalSum;
    }
}









