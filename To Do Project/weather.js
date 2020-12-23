const API_KEY = "1718baf5b8d7f77d44271b12ac1d5e20";
const LOCATION = "location";

const WEATHER = document.querySelector(".js-weather");

function getUserLocationWeather(latitude, longitude) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        WEATHER.innerText = `🗺 ${place} 🌡 ${temperature}°C `;
    })
}

function saveLocationInLocalStorage(positionObj) {
    localStorage.setItem(LOCATION, JSON.stringify(positionObj));
}

function askUserSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const positionObj = {
        latitude,
        longitude,
    }
    saveLocationInLocalStorage(positionObj);
}

function askUserFailure() {
    console.log("사용자 위치 조회에 실패했습니다. ");
}

function askUserLocation() {
    navigator.geolocation.getCurrentPosition(askUserSuccess, askUserFailure)
}

function getLocation() {
    const location = localStorage.getItem(LOCATION);
    if (location === null) {
        askUserLocation();
    } else {
        const parsedLocation = JSON.parse(location);
        getUserLocationWeather(parsedLocation.latitude, parsedLocation.longitude);
    }
}

function init() {
    getLocation();
}

init();