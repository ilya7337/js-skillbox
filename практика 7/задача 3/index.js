

let allProduct = ['Молоко', 'Яйца', 'Чай', 'Хлеб']

function addProduct() {
    const newProduct = prompt('Введите рост')
    if (!newProduct) {
        alert('Название товара не введено!')
    }
    else {
        allProduct.push(newProduct)
    }
    renderProduct(sortArr(allProduct))
}

function sortArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-1; j++) {
            if (arr[j].toLowerCase() > arr[j + 1].toLowerCase()) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

function renderProduct(arr) {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        const liEl = document.createElement('li');
        liEl.classList.add('product-elem')
        liEl.textContent = `${i + 1}) ${arr[i]}`;
        productList.append(liEl);
    }
}

allProduct = sortArr(allProduct);
renderProduct(allProduct)

