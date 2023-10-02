import React, { useState } from 'react'
import '../Weather.css'

/* Images */
import SearchIcon  from "../assets/search.png"
import ClearIcon  from "../assets/clear.png"
import CloudIcon  from "../assets/cloud.png"
import DrizzleIcon  from "../assets/drizzle.png"
import RainIcon  from "../assets/rain.png"
import SnowIcon  from "../assets/snow.png"
import WindIcon  from "../assets/wind.png"
import HumidityIcon  from "../assets/humidity.png"
/* Images */

const Weather = () => {
    let api_key = "4d4b55bcbb9bf0847dc1e2a740be6c73";

    const [wicon, setWicon] = useState(CloudIcon);

    const search = async () =>{
        const element = document.getElementsByClassName('cityInput');
        if(element[0].value === ""){
            return 0;
        }
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`

        let response = await fetch(url);
        let data = await response.json();

        const humidity = document.getElementsByClassName('humidity-percent');
        const wind = document.getElementsByClassName('wind-rate');
        const temp = document.getElementsByClassName('weather-temp');
        const loc = document.getElementsByClassName('weather-location');

        humidity[0].innerHTML = data.main.humidity + " %";
        wind[0].innerHTML = data.wind.speed + " km/h";
        temp[0].innerHTML = data.main.temp + "°c";
        loc[0].innerHTML = data.name;

        if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n")
        {
            setWicon(ClearIcon);
        }
        else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n")
        {
            setWicon(CloudIcon)
        }
        else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n")
        {
            setWicon(DrizzleIcon)
        }
        else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n")
        {
            setWicon(DrizzleIcon)
        }
        else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n")
        {
            setWicon(RainIcon)
        }
        else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n")
        {
            setWicon(RainIcon)
        }
        else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n")
        {
            setWicon(SnowIcon)
        }
        else{
            setWicon(ClearIcon)
        }
    }
  return (
    <div className='container'>
        <div className="top-bar">
            <input onKeyUp={()=>{search()}} type="text" className="cityInput" placeholder='Search a city' />
                <div className="search-icon" onClick={()=>{search()}}>
            </div>

            
        </div>

        <div className="weather-image">
                <img src={wicon} alt="" />
            </div>
            <div className="weather-temp">°C</div>
            <div className="weather-location">Type a city name</div>
            <div className="data-container">
                <div className="element">
                    <img src={HumidityIcon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">%</div>
                        <div className="humidity-text">Humidity</div>
                    </div>
                </div>

                <div className="element">
                    <img src={WindIcon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-rate">km/h</div>
                        <div className="humidity-text">Wind Speed</div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Weather