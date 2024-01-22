const API_KEY = "1147fb4d523c84c44995c8d7ab3e05e6"

//dom
const feelLikeDisplay = document.querySelector(".feel-like > span");
const windDisplay = document.querySelector(".wind > span");
const weatherDisplay =  document.querySelector(".weather > img");
const locationDisplay = document.querySelector(".location");
const temperatureDisplay = document.querySelector(".temperature > span");
const weaherSelect = document.querySelector("#weather-select");
const info = document.querySelector(".info");


weaherSelect.addEventListener("change", (e)=> {
    getWeater(e.target.value)
})


//function

const getWeater = async (city = 'seoul')=>{  /*파라미터가 없을 경우, 초기값 seoul 셋팅 */
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    const response = await axios.get(url);

    //디스트럭처링 (변수화..)
    const{name, main, weather, wind} = response.data;

    locationDisplay.innerText = name;
    temperatureDisplay.innerText = transferTemperature(main.temp);
    weatherDisplay.setAttribute('src', `https://openweathermap.org/img/wn/${weather[0].icon}.png`)
    windDisplay.innerText = wind.speed;
    feelLikeDisplay.innerText = transferTemperature(main.feels_like);

    console.log(response)
}


//온도 변환
const transferTemperature = (temp) => {
    return (temp-273.15).toFixed(1);
}





