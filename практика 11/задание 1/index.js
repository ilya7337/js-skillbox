
const formEl = document.querySelector('.form');

formEl.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.querySelector('.name').value;
    const email = document.querySelector('.email').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const score = document.querySelector('.score').value;
    const interestsEl = document.querySelectorAll('input[name="interests"]:checked');
    let interests = [];
    interestsEl.forEach(element => {
        interests.push(element.value)
    });
    const comm = document.querySelector('.comm').value;
    printData(name, email, gender, score, interests, comm);
})


function printData(name, email, gender, score, interests, comm) {
    const res = document.querySelector('.res');
    res.innerHTML = ''
    res.innerHTML += `<p>Имя: ${name}</p>`;
    res.innerHTML += `<p>Email: ${email}</p>`;
    res.innerHTML += `<p>Пол: ${gender}</p>`;
    res.innerHTML += `<p>Оценка: ${score}</p>`;
    res.innerHTML += `<p>Интересы: ${interests.join(', ')}</p>`;
    res.innerHTML += `<p>Комментарий: ${comm}</p>`;
}


const scoreRange = document.querySelector('.score');
const scoreOutput = document.querySelector('.score-output');
scoreOutput.value = scoreRange.value; 

scoreRange.addEventListener('input', function () {
    scoreOutput.value = scoreRange.value; 
});




