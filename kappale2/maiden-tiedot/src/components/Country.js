import React, { useState } from 'react'
import Weather from './Weather'

const Country = ({name, capital, area, languages, img, number}) => {
    const [show, setShow] = useState(false)

    if(number === 1) {
        return(
            <div>
                <h1>Name: {name}</h1>
                <h2>Capital: {capital}</h2>
                <h3>Area: {area}</h3>
                Languages: {languages && Object.values(languages).map((key, index) => {return(<p key={index}>{key}</p>)})}
                <img src={img} alt=""/>
                <Weather 
                city={capital}
                />
            </div>
        )
    }

    const last = <div>
                    <h2>Capital: {capital}</h2>
                    <h3>Area: {area}</h3>
                    Languages: {languages && Object.values(languages).map((key, index) => {return(<p key={index}>{key}</p>)})}
                    <img src={img} alt=""/>
                    <Weather 
                    city={capital}
                    />
                </div>

  return (
    <div>
        <h1>Name: {name} <button onClick={() => setShow(!show)}>Show</button></h1>
        {show && last}
    </div>
  )
}

export default Country