
export default class Delivery{
    static totalCount = 0
    constructor(name, address, distance) {
        Delivery.totalCount++;
        this._name = name;
        this._address = address;
        this._distance = distance;
        this.numId =  Delivery.totalCount;
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    set address(value) {
        this._address = value;
    }

    get address() {
        return this._address;
    }

    set distance(value) {
        this._distance = value;
    }

    get distance() {
        return this._distance;
    }

    
    
    getCard() {
        this.cardEl = document.createElement('div');
        this.cardEl.classList.add('card')
        this.cardEl.id = `card${this.numId}`;
        this.nameBlock = this._getInfBlock('Имя', this._name);
        this.addressBlock = this._getInfBlock('Адрес', this._address);
        this.distanceBlock = this._getInfBlock('Расстояние', `${this._distance} км`);
        this.cardEl.appendChild(this.nameBlock);
        this.cardEl.appendChild(this.addressBlock);
        this.cardEl.appendChild(this.distanceBlock);
        return this.cardEl;
    }

    _getInfBlock(name, value) {
        const infBlock = document.createElement('div');
        infBlock.classList.add('inf-block');
        const titleEl = document.createElement('div')
        titleEl.classList.add('title-block');
        const valueEl = document.createElement('div')
        valueEl.classList.add('value-block');
        titleEl.textContent = name;
        valueEl.textContent = value;
        infBlock.appendChild(titleEl);
        infBlock.appendChild(valueEl);
        return infBlock;
    }

}