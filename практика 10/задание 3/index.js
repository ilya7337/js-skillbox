
const nums = [100, 500, 250, 750, 300];
const listEl = document.querySelector('.nums-list');
const growBtn = document.querySelector('.sort-grow');
const descBtn = document.querySelector('.sort-desc');

function renderNums(data) {
    listEl.innerHTML = ''
    data.forEach(num => {
        const e = document.createElement('li');
        e.textContent = num;
        listEl.append(e);
    });
}


growBtn.addEventListener('click', function() {
    renderNums(nums.sort((a, b) => a - b));
})

descBtn.addEventListener('click', function() {
    renderNums(nums.sort((a, b) => b - a));
})


renderNums(nums);