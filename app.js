const slider = document.querySelector('.slider-features');
const leftArrow = document.querySelector('.prev');
const rightArrow = document.querySelector('.next');

let currentIndex = 0;
const totalSlides = 3; 

rightArrow.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});

function initMap() {
    var location = {lat: 40.7128, lng: -74.0060}; 
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

window.onload = initMap;
