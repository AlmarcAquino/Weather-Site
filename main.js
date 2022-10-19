// key:   faa6bacc57aa4334b7cf723319ec56dd

// GLOBALS

// EVENT LISTENERS

// FUNCTIONS
// Retrieves data from weatherbit API for the current weather -- displays it on webpage
async function getCurrentWeatherData() {
  const url =
    'https://api.weatherbit.io/v2.0/current?units=I&postal_code=89183&country=US&key=faa6bacc57aa4334b7cf723319ec56dd';
  const apiData = await fetch(url);
  const data = await apiData.json();

  console.log(data);
}

getCurrentWeatherData();
