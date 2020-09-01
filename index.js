const api = {
    key: "281a5d9b5d3f2418721efc0c67401151",
    baseUrl: "https://api.openweathermap.org/data/2.5/"
}
const search = document.querySelector(".search-box");
search.addEventListener('keypress',setQuery);
function setQuery(evt){
    if(evt.keyCode == 13){
        getWeather(search.value);
    }
}
function getWeather(query){
    fetch(`${api.baseUrl}weather?q=${query}&units=metric&appid=${api.key}`)
    .then(response =>response.json())
    .then(data =>{
        let city = document.querySelector(".city");
        city.innerText = `${data.name}, ${data.sys.country}`; 
        let now = new Date();
        let date = document.querySelector(".date");
        date.innerText = dateBuilder(now);
        let temp = document.querySelector('.temp');
        temp.innerHTML = `${Math.round(data.main.temp)}<span>°c</span>`
        let weather = document.querySelector(".weather")
        weather.innerText = `${data.weather[0].main}, ${data.weather[0].description}`;
    });
}
function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}