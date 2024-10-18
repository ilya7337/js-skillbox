

let allHeight = [179, 154, 178, 156, 166, 167, 161, 190]

function addHeight() {
    const newHeight = prompt('Введите рост')
    if (!newHeight) {
        alert('Рост не введён!')
    }
    else if (!Number(newHeight)) {
        alert('Введите число!')
    }
    else {
        allHeight.push(Number(newHeight))
    }
    renderHeight(allHeight)
}


function filterHeight() {
    const minHeight = prompt('Введите минимальный рост')
    if (!minHeight) {
        renderHeight(allHeight)
    }
    else if (!Number(minHeight)) {
        alert('Введите число!')
    }
    else {
        let res = []
        for (const height of allHeight) {
            if (height >= Number(minHeight)) {
                res.push(height)
            }
        }
        renderHeight(res)
    }
}


function renderHeight(arr) {
    const heightList = document.querySelector('.height-list');
    heightList.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        const liEl = document.createElement('li');
        liEl.classList.add('height-elem')
        liEl.textContent = `${i + 1}) ${arr[i]}`;
        heightList.append(liEl);
    }
}


renderHeight(allHeight)

