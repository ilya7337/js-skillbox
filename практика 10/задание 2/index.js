const listEl = document.querySelector('.elems-list');

const addBtnEl = document.querySelector('.add-elem');
const delBtnEl = document.querySelector('.delete-elem');

addBtnEl.addEventListener('click', function () {
    const newElem = document.createElement('li');
    newElem.textContent = 'Новый элемент списка';
    listEl.append(newElem)
});

delBtnEl.addEventListener('click', function () {
    listEl.removeChild(listEl.lastElementChild)
});
