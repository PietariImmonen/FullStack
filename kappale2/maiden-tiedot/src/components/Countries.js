import React, { useEffect, useState } from 'react'
import axios from "axios"
import Country from './Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [newSearch, setNewSearch] = useState('')

    useEffect(() => {
        axios
        .get("https://restcountries.com/v3.1/all")
        .then(res => {
            setCountries(res.data)
        })
    }, [])

    //capital, area, languages
    let countriesToShow = countries.filter((country => country.name.common.includes(newSearch)))

    const handleSearchChange = (event) => {
        setNewSearch(event.target.value)
      }

    
    const single = countriesToShow.map((country, i) => {
        return(<Country 
            name={country.name.common} 
            capital={country.capital} 
            area={country.area}
            languages={country.languages}
            img={country.flags.png}
            number={countriesToShow.length}
            key={i}/>)
    })
    

  return (
    <div>

        <form>
            <div>
                Filter: <input 
                value={newSearch}
                onChange={handleSearchChange}/>
            </div>
        </form>
        {
        
            countries && (countriesToShow.length > 10) ? "too many matches, specify" : single
        }
        

    </div>
  )
}

export default Countries