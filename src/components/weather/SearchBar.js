// IMPORTS
import '../weather/SearchBar.css'
import { MdGpsFixed } from 'react-icons/md'
import { TiWeatherSunny, TiWeatherCloudy, TiWeatherPartlySunny, TiWeatherShower } from 'react-icons/ti'
import { FaTemperatureLow } from 'react-icons/fa'
import { SiWindicss } from 'react-icons/si'
import axios from 'axios'
import { useState } from 'react'

// SearchBar MAIN FUNC
const SearchBar = () => {
    // STATES
    const [result, setResult] = useState()
    const [temp, setTemp] = useState()
    const [tempIcon, setTempIcon] = useState()
    const [wind, setWind] = useState()
    const [windIcon, setWindIcon] = useState()
    const [icon, setIcon] = useState()
    // APIK A METTRE EN DOTENV
    let apiK = `ff492d0fda7208c6ff614fc2128813b0`
    // GET DATA USER LOCATION
    function GetUserLocationWeather() {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            axios
                .get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&lang=fr&units=metric&appid=${apiK}`)
                .then((response) => {
                    console.log(response.data);
                    let res = response.data.weather[0].description
                    let degres = response.data.main.temp
                    let vent = response.data.wind.speed
                    setResult("Pays: " + response.data.sys.country + " latitude: " + position.coords.latitude + " longitude: " + position.coords.longitude  + res)
                    setTemp(degres)
                    setTempIcon(<FaTemperatureLow className='ic' size={20} color='#58c78f' />)
                    setWind(vent)
                    setWindIcon(<SiWindicss className='ic' size={20} color='#66b1ed' />)

                })
                .catch((err) => console.log(err))
        });
    }
    // SEARCH ON KEY UP
    const search = (text) => {
        getData(text)
    }
    // GET DATA SEARCHBAR ON KEY UP
    function getData(search) {

        // KEY A METTRE EN DOTENV
        let apiK = `ff492d0fda7208c6ff614fc2128813b0`
        // REQU??TE
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=fr&units=metric&appid=${apiK}`)
            .then((response) => {
                // VARIABLES REPONSE
                let res = response.data.weather[0].description
                let degres = response.data.main.temp
                let vent = response.data.wind.speed
                console.log(response.data);
                let clair = "ciel d??gag??"
                let pluie = "l??g??re pluie"
                let nuageux = "nuageux"
                let deminuageux = "partiellement nuageux"
                let couvert = "couvert"
                let peunuageux = "peu nuageux"

                let resIcon = <></>

                // D??GAG??
                if (res === clair) {
                    resIcon = <TiWeatherSunny className='ResIcon' color='yellow' size={40} />
                    console.log("D??GAG??:")
                    // NUAGEUX
                } else if (res === nuageux) {
                    resIcon = <TiWeatherCloudy color='grey' className='ResIcon' size={40} />
                    console.log("NUAGE")
                    // PLUVIEUX
                } else if (res === pluie) {
                    resIcon = <TiWeatherShower color='blue' className='ResIcon' size={40} />
                    console.log("PLUIE")
                    // PARTIEL NUAGEUX
                } else if (res === deminuageux) {
                    resIcon = <TiWeatherPartlySunny className='ResIcon' size={40} />
                    console.log("NUAGE")
                    // COUVERT
                } else if (res === couvert) {
                    resIcon = <TiWeatherCloudy className='ResIcon' size={40} />
                    console.log("NUAGE")
                    // PEU NUAGEUX
                } else if (res === peunuageux) {
                    resIcon = <TiWeatherPartlySunny className='ResIcon' size={40} />
                    console.log("NUAGE")
                }
                setResult(response.data.name + ": " + response.data.weather[0].description + " ")
                setTemp("temp??rature:  " + degres)
                setTempIcon(<FaTemperatureLow className='ic' size={20} color='#58c78f' />)
                setWind("vent: " + vent  + " Km/h")
                setWindIcon(<SiWindicss className='ic' size={20} color='#66b1ed' />)
                setIcon(resIcon)
            })
            .catch((err) => console.log(err))
    }
    // ON KEY DOWN RESET DATA
    function resetData() {
        setResult();
        setTemp();
        setTempIcon();
        setWind();
        setWindIcon();
        setIcon();
    }
    // COMPOSANT HTML
    return (
        <div className='t'>
            <div className='iconDiv'>
                <input id='searchBar' onKeyUp={() => search(document.getElementById('searchBar').value)} onKeyDown={() => resetData()} type="text" placeholder='Ville...' />
                <MdGpsFixed onClick={() => GetUserLocationWeather()} className='icon' color='#b8c55d' size={40} />
            </div>
            <div className='result'>
                <h4>{result}{icon}</h4>
                <h4>{temp} {tempIcon}</h4>
                <h4>{wind} {windIcon} </h4>
            </div>
        </div>
    )

}

export default SearchBar;