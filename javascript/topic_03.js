// create app id
let appId = 'f6c61ed29d475df7c339bcc85bd36a38';
let units = 'imperial';
let searchMethod;

function searchWeather(searchTerm) {
   // get the search method
   getSeachMethod(searchTerm);
   //Create the XHR Object
   let xhr = new XMLHttpRequest();
   //Call the open function, GET-type of request, url, true-asynchronous
   xhr.open(
      'GET',
      `https://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`,
      true
   );
   //call the onload
   xhr.onload = function() {
      //check if the status is 200(means everything is okay)
      if (this.status === 200) {
         //return server response as an object with JSON.parse
         let result = JSON.parse(this.responseText);
         init(result);
      }
   };
   //call send
   xhr.send();
}

function init(resultFromAPI) {
   // debugging
   console.log(resultFromAPI);

   // Get all info I want to use in nice variables
   let weatherDescriptionHeader = document.getElementById(
      'weatherDescriptionHeader'
   );
   let temperatureElement = document.getElementById('temperature');
   let humidityElement = document.getElementById('humidity');
   let windSpeedElement = document.getElementById('windSpeed');
   let cityHeader = document.getElementById('cityHeader');
   let weatherIcon = document.getElementById('docIconImg');
   // set the weather icon
   weatherIcon.src = `https://openweathermap.org/img/w/${
      resultFromAPI.weather[0].icon
   }.png`;
   // set the weather description
   let resultDescription = resultFromAPI.weather[0].description;
   weatherDescriptionHeader.innerText =
      resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);
   // set the temperature
   temperatureElement.innerHTML = Math.floor(resultFromAPI.main.temp) + '&#176';
   // set the wind speed
   windSpeedElement.innerHTML =
      'Winds at ' + Math.floor(resultFromAPI.wind.speed) + ' m/s';
   cityHeader.innerHTML = resultFromAPI.name;
   // set the humidity
   humidityElement.innerHTML =
      'Humidity levels at ' + resultFromAPI.main.humidity + '%';

   // display stringified version
   document.getElementById('stringified').innerHTML = JSON.stringify(
      resultFromAPI
   );
   document.getElementById('jsonStringify').style.visibility = 'visible';

   setPosition();
}

document.getElementById('searchBtn').addEventListener('click', () => {
   let searchTerm = document.getElementById('searchInput').value;
   if (searchTerm) {
      searchWeather(searchTerm);
   }
});

function getSeachMethod(searchTerm) {
   if (
      searchTerm.length === 5 &&
      Number.parseInt(searchTerm) + '' === searchTerm
   ) {
      searchMethod = 'zip';
   } else {
      searchMethod = 'q';
   }
}

function setPosition() {
   let weatherContainer = document.getElementById('weatherContainer');
   let weatherContainerHeight = weatherContainer.clientHeight;
   let weatherContainerWidth = weatherContainer.clientWidth;

   weatherContainer.style.left = `calc(50% - ${weatherContainerWidth / 2}px)`;
   weatherContainer.style.top = `calc(50% - ${weatherContainerHeight / 1.3}px)`;
   weatherContainer.style.visibility = 'visible';
}

// try to get location on load of the page
window.addEventListener('load', () => {
   let long;
   let lat;

   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
         long = Math.floor(position.coords.longitude);
         lat = Math.floor(position.coords.latitude);

         // now grab the weather in their area
         //Create the XHR Object
         let xhr = new XMLHttpRequest();
         //Call the open function, GET-type of request, url, true-asynchronous
         xhr.open(
            'GET',
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${appId}&units=${units}`,
            true
         );
         //call the onload
         xhr.onload = function() {
            //check if the status is 200(means everything is okay)
            if (this.status === 200) {
               //return server response as an object with JSON.parse
               let result = JSON.parse(this.responseText);
               init(result);
            }
         };
         //call send
         xhr.send();
      });
   } else {
      // do nothing right now
   }
});

// this is so that when the "ENTER" key is pressed it'll
// trigger the AJAX request (From Stack Overflow
//  https://stackoverflow.com/questions/155188/trigger-a-button-click-with-javascript-on-the-enter-key-in-a-text-box)
document
   .getElementById('searchInput')
   .addEventListener('keyup', function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
         document.getElementById('searchBtn').click();
      }
   });
