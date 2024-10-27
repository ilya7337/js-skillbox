
const textInput = document.querySelector('.text');
const selectEl = document.querySelector('.color');
const cardEl = document.querySelector('.card');
const textCardEl = document.querySelector('.card-text');

textInput.addEventListener('input', function () {
    textCardEl.textContent = textInput.value;
})

selectEl.addEventListener('change', function() {
    cardEl.style.backgroundColor = selectEl.value; 
});

textInput.addEventListener('focus', function() {
    textInput.style.borderColor = 'blue'; 
    textInput.style.backgroundColor = '#e0f7fa'; 
});

textInput.addEventListener('blur', function() {
    textInput.style.borderColor = '#ccc';
    textInput.style.backgroundColor = 'white'; 
});