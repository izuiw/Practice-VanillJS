const API_KEY = "1147fb4d523c84c44995c8d7ab3e05e6";
const test = navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} \\ ${data.main.temp}`;
      });
  },
  () => {
    alert("Error : Can't find you, No weather for you.");
  }
);

console.log(test);
