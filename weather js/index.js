let divContainer = document.querySelector(".divContainer");
divContainer.setAttribute(
  "style",
  "display: flex; justify-content: space-between; flex-direction: column; align-items: center;"
);
divContainer.innerHTML = `
<h1 id="temperature">Temperature: </h1>
<h1 id="humidity">Humidity: </h1>
<h1 id="windspeed">Wind Speed: </h1>
`;

let searchContainer = document.querySelector("#searchContainer");
searchContainer.innerHTML = `   
    <input type="text" placeHolder="enter a city" id="inputBox"/>
    <button type="button" id="btn">Search</button>
    <h1 id="city">City: </h1>
`;

async function fetchWeather(city) {
  try{
    const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=7ba3fd9828d5482d80085715242702&q=${city}&aqi=no`
      );
      const jsonRes = await response.json();
      const { location, current } = jsonRes;
    
      document.getElementById(
        "temperature"
      ).innerHTML = `Temperature: ${current.temp_c}&deg;`;
      document.getElementById(
        "humidity"
      ).innerHTML = `Humidity: ${current.humidity}`;
      document.getElementById(
        "windspeed"
      ).innerHTML = `Windspeed: ${current.wind_kph}kph`;
      document.getElementById("city").innerHTML = `City: ${location.name}`;
  }catch(Error) {
    alert("data not found")
  }
}


let searchBox = document.getElementById("inputBox");
let searchButton = document.getElementById("btn");

searchBox.addEventListener('change', (e) => {
    if(e.target.value == ""){
        document.getElementById(
        "temperature"
      ).innerHTML = `Temperature: `;
      document.getElementById(
        "humidity"
      ).innerHTML = `Humidity: `;
      document.getElementById(
        "windspeed"
      ).innerHTML = `Windspeed: `;
      document.getElementById("city").innerHTML = `City: `;
    }
})

searchButton.addEventListener("click", (e) => {
    fetchWeather(searchBox.value);
})



