document.getElementById('search-btn').addEventListener('click', function(){
    const searchInput = document.getElementById('search-input');
    const city=searchInput.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ae10dfe59aeded183b33aee5b22d8baa`)
    .then(res => res.json())
    .then(data =>displayWeather(data));
    searchInput.value='';
});

// function toKelvin(){
//     document.converter.celsius.value = document.converter.kelvin.value - 273.15;
//     document.converter.fahrenheit.value=((document.converter.kelvin.value - 273.15)*9/5)+32;
// }

const displayWeather = update => {
    console.log(update);
    
    const cityName = document.getElementById('cityName');
    const temparature = document.getElementById('temparature');
    const weatherInfo = document.getElementById('weather');
    const wind=document.getElementById('wind');

   
    cityName.innerText = `${update.name}`;
    temparature.innerText = `Degree : ${update.coord.lat.toFixed(0)}°C`;
    // function myFunction() {
    //     var num = 5.56789;
    //     var n = num.toFixed(4);
    //     document.getElementById("demo").innerHTML = n;
    //   }
    weatherInfo.innerText = `Feel : ${update.weather[0].main}`;
    wind.innerText = `Wind : ${update.wind.speed} km per hour`;
}