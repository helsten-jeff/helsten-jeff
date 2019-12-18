const getWeatherByZip = () => {
  console.log('hit');
  const zip = document.getElementById('zip').value;
  const xhr = new XMLHttpRequest(),
    method = 'GET';
  url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=85e130f983934be5b7f31ce087ae76fa`;

  xhr.open(method, url, true);

  xhr.onload = () => {
    console.log('load', xhr);
    // Check for http success status code
    if (xhr.status === 200) {
      const _response = JSON.parse(xhr.responseText);
      // Check that we received a shape and response we expected
      if (_response.weather) {
        console.log({_response});
        const {name, main, weather, wind} = _response;
        document.getElementById('description').innerHTML =
          weather[0].description;
        document.getElementById('locality').innerHTML = name;
        document.getElementById('temp').innerHTML = `${main.temp} &deg;F`;
        document.getElementById('description').innerHTML =
          weather[0].description;
        document.getElementById('wind').innerHTML = `${wind.speed} mph`;
        document.getElementById(
          'weatherIcon',
        ).src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
        document.getElementById('weatherIcon').width = 50
        document.getElementById('statusEl').innerHTML = ''
      }
    }
    // if not found
    if (xhr.status.toString().startsWith('4')) {
      console.log('error');
    }
  };
  // handle xhr error
  xhr.onerror = e => {
    statusEl.innerHTML = `An Error Occured ${JSON.stringify(e)}`;
  };
  xhr.send();
};
