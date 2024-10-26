

const allPhotosEl = document.querySelectorAll('.photo');
const bigPhotoEl = document.querySelector('.big-photo-cont');

allPhotosEl.forEach(photoEl => {
    photoEl.addEventListener('click', function() {       
        bigPhotoEl.innerHTML = ''; 
        const bigPhoto = document.createElement('img'); 
        bigPhoto.src = photoEl.src; 
        bigPhoto.alt = photoEl.alt; 
        bigPhoto.classList.add('big-photo'); 
        bigPhotoEl.append(bigPhoto); 
    });
});

