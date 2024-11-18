
function progress(time) {
    const contEl = document.createElement('div')
    const barEl = document.createElement('div')
    contEl.classList.add('cont')
    barEl.classList.add('progress-bar')
    contEl.appendChild(barEl)
    document.body.appendChild(contEl)

    if (time < 2) { time = 2 };

    setTimeout(() => {
        barEl.style.transition = `all ${time}s linear`; 
        barEl.style.transform = 'scaleX(1)'; 
    })
    
}

window.onload = () => {
    progress(5); 
}

