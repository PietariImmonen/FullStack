import React, { useState, useEffect } from 'react'
import axios from "axios"

const Weather = ({city}) => {
    const [weather, setWeather] = useState([])

    useEffect(() => {
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=`)
        .then(res => {
            setWeather(res.data)
        })
    }, [])
    console.log(weather)
  return (
    <div>
        <h1>Weather in {city}</h1>
        <p>Temperature: {weather.main.temp} celsius</p>
        <p>Wind: {weather.wind.speed} m/s</p>
    </div>
  )
}

export default Weather