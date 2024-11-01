const promocodeArr = [
    {
        promocode: 'PROM10',
        gift: "Скидка 10%"
    },
    {
        promocode: 'PROM50',
        gift: "Скидка 50%"
    },
    {
        promocode: 'GIFT',
        gift: "Подарок в корзине"
    }
];



const bthEl = document.querySelector('.btn');
const formEl = document.querySelector('.form');
const messageEl = document.querySelector('.message');
const inputEl = document.querySelector('.input-promocode');

formEl.addEventListener('submit', function (e) {
    e.preventDefault();
    const promocode = inputEl.value;
    let isPromGood = false;
    promocodeArr.forEach(promInf => {
        if (promInf['promocode'] === promocode) {
            messageEl.textContent = 'Промокод применён. ' + promInf['gift'];
            inputEl.style.color = 'green';
            isPromGood = true;
            setCookie('promocode', promocode); 
            setCookie('gift', promInf['gift']); 
        }
    });
    if (!isPromGood) {
        messageEl.textContent = '';
        inputEl.style.color = 'black';
    }
})

function setCookie(name, value) {
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/`;
}

function getCookie() {
    return document.cookie.split('; ').reduce((acc, item) => {
        const [name, value] = item.split('=')
        acc[name] = decodeURIComponent(value);
        return acc
    }, {})
}

window.onload = function() {
    const cookies = getCookie();
    console.log(cookies);
    if (cookies['promocode']) {
        inputEl.value = cookies['promocode'];
        messageEl.textContent = 'Промокод применён. ' + cookies['gift']; 
        inputEl.style.color = 'green';
    }
};

