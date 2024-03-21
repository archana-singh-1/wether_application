const weatherData = [
    { city: "New York", temperature: 20, weather: "Sunny" },
    { city: "London", temperature: 15, weather: "Cloudy" },
    { city: "Tokyo", temperature: 25, weather: "Rainy" },
    { city: "Bihar", temperature: 35, weather: "Rainy" },
    { city: "India", temperature: 30, weather: "Sunny" },
    { city: "Bangalore", temperature: 13, weather: "Cloudy" },
    { city: "Delhi", temperature: 40, weather: "Sunny" },
    { city: "Punjab", temperature: 34, weather: "Rainy" },
    { city: "kishanganj", temperature: 30, weather: "Sunny" },
];







const inputBtn=document.querySelector('#inputBtn')
const Btn=document.querySelector('#Btn')
const weatherInfo = document.querySelector('#weatherInfo');
Btn.addEventListener('click',function(){
    let cityname=inputBtn.value.trim();
    const cityData=weatherData.find(city=>city.city.toLowerCase()===cityname.toLowerCase())

    if (cityData){
        weatherInfo.textContent = `City: ${cityData.city}, Temperature: ${cityData.temperature}°C, Weather: ${cityData.weather}`;
    }

    else{
        weatherInfo.textContent='Data is not found'
    }

        
})
