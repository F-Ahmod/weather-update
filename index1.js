
// document.getElementById('button').addEventListener('click', function(){
//     const searchInput=document.getElementById('search-input');
//     const seatrchText= searchInput.value;
//     // console.log(seatrchText);
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${seatrchText}&appid=ae10dfe59aeded183b33aee5b22d8baa`)
//     .then(res => res.json())
//     .then(data =>displayWeather(data));
// });



// get the search button and searched input 
// document.getElementById('search-btn').addEventListener('click', function(){
//     const searchInput = document.getElementById('search-input');
//     const city=searchInput.value;
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ae10dfe59aeded183b33aee5b22d8baa`)
//     .then(res => res.json())
//     .then(data =>displayWeather(data));
// });

    // error handling
//     if(searchInput.value.length > 0){
//         loadData(searchInput.value);
//     }
//     else{
//         const cityName = document.getElementById('city');
//         cityName.innerText = 'Try to input a valid city name';
//         const temp = document.getElementById('temp');
//         temp.innerText = '00';
//         const weather = document.getElementById('weather');
//         weather.innerText = '';
//     }

//     const preloader = document.getElementById('preloader');
//     preloader.classList.add('d-block');

//     // clear the previous typed input 
//     searchInput.value = '';
// });

// load data from api
// const loadData = async city => {
//     const url = (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ae10dfe59aeded183b33aee5b22d8baa`);
//     const response = await fetch(url);
//     const data = await response.json();

    // error handling
//     if(data.cod == "404"){
//         const cityName = document.getElementById('city');
//         cityName.innerText = 'Try to input a valid city name';
//         const temp = document.getElementById('temp');
//         temp.innerText = '00';
//         const weather = document.getElementById('weather');
//         weather.innerText = '';
//     }else{
//         displayData(data);
//     }

// }

// display data on ui
// const displayWeather = details => {

//     console.log(details);

//     const preloader = document.getElementById('preloader');
//     preloader.classList.add('d-none');

//     const img = document.getElementById('weather-img');
//     const cityName = document.getElementById('city');
//     const temp = document.getElementById('temp');
//     const weather = document.getElementById('weather');

//     img.src =`https://openweathermap.org/img/w/${details.weather[0].icon}.png`;
//     cityName.innerText = `${details.name}`;
//     temp.innerText = `${details.coord.lat.toFixed(0)}°C`;
//     weather.innerText = `${details.weather[0].main}`;
// }

