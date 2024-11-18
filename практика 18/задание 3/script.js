
function progress(time){
    return new Promise((resolve) => {
        const contEl = document.createElement('div')
        const barEl = document.createElement('div')
        const timeEl = document.createElement('div')
        const containerEl = document.querySelector('.container');
        timeEl.textContent = '0 c';
        contEl.classList.add('cont')
        barEl.classList.add('progress-bar')
        barEl.style.transform = 'scaleX(0)';
        contEl.appendChild(barEl);
        contEl.appendChild(timeEl);
        containerEl.appendChild(contEl);
        
        if (time < 2) { time = 2 };

        setTimeout(() => {
            barEl.style.transition = `all ${time}s linear`;
            barEl.style.transform = 'scaleX(1)';
        }, 0)

        let secondsPassed = 0;
        const interval = setInterval(() => {
            secondsPassed++;
            timeEl.textContent = `${secondsPassed} c`;
            if (secondsPassed >= time) {
                clearInterval(interval);
                resolve();
            }
        }, 1000);
    })
}

async function fetchCats() {
    const imageUrls = [
        'img/cat1.jpg',
        'img/cat2.jpg',
        'img/cat3.jpg'
    ];
    const delay = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;
    await progress(delay / 1000); 
    return imageUrls;
}

async function fetchDogs() {
    const imageUrls = [
        'img/dog1.jpg',
        'img/dog2.jpg',
        'img/dog3.jpg'
    ];
    const delay = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;
    await progress(delay / 1000); 
    return imageUrls; 
}


window.onload = async () => {
    await fetchCats().then((cats) => {
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
    await fetchDogs().then((dogs) => {
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
