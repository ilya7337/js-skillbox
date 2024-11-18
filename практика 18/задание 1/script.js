

function fetchCats() {
    return new Promise((resolve, reject) => {
        const imageUrls = [
            'img/cat1.jpg',
            'img/cat2.jpg',
            'img/cat3.jpg'
        ];
        
        const delay = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;

        setTimeout(() => {
            resolve(imageUrls);
        }, delay);
    });
}

function fetchDogs() {
    return new Promise((resolve, reject) => {
        const imageUrls = [
            'img/dog1.jpg',
            'img/dog2.jpg',
            'img/dog3.jpg'
        ];
        
        const delay = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;

        setTimeout(() => {
            resolve(imageUrls);
        }, delay);
    });
}




window.onload = () => {
    fetchCats().then((cats) => {
        const containerEl = document.querySelector('.container');
        const rowEl = document.createElement('div');
        rowEl.classList.add('row');
        cats.forEach(link => {
            const imgEl = document.createElement('img')
            imgEl.src = link;
            imgEl.classList.add('photo')
            rowEl.appendChild(imgEl);
        });
        containerEl.appendChild(rowEl);
    })
    fetchDogs().then((dogs) => {
        const containerEl = document.querySelector('.container');
        const rowEl = document.createElement('div');
        rowEl.classList.add('row');
        dogs.forEach(link => {
            const imgEl = document.createElement('img')
            imgEl.src = link;
            imgEl.classList.add('photo')
            rowEl.appendChild(imgEl);
        });
        containerEl.appendChild(rowEl);
    });
};
