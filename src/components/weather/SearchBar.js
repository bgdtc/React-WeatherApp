// IMPORTS
import '../weather/SearchBar.css'
import { MdGpsFixed, MdLocationCity } from 'react-icons/md'
import { TiWeatherSunny, TiWeatherCloudy, TiWeatherPartlySunny, TiWeatherShower } from 'react-icons/ti'
import { FaTemperatureLow } from 'react-icons/fa'
import { SiWindicss } from 'react-icons/si'
import axios from 'axios'
import React, { useState } from 'react'
// STORE
import { useSelector, useDispatch } from 'react-redux'
import { store } from '../../store'
import { getPrevisions } from '../../store/actions/PrevisionsActions'
store.dispatch(getPrevisions())

// SearchBar MAIN FUNC
const SearchBar = () => {
    // STATES
    const [result, setResult] = useState()
    const [temp, setTemp] = useState()
    const [tempIcon, setTempIcon] = useState()
    const [wind, setWind] = useState()
    const [windIcon, setWindIcon] = useState()
    const [icon, setIcon] = useState()
    const [cityIcon, setCityIcon] = useState()
    // APIK A METTRE EN DOTENV
    let apiK = `ff492d0fda7208c6ff614fc2128813b0`





    // STORE
    const dispatch = useDispatch()
    const listPrevisions = useSelector(state => state.previsions.data)

    const search = (query) => {

        if (query.length < 3) {
            console.log("esquive api")
        } else {
            console.log("fonction test lancée")
            dispatch(getPrevisions(query))
            console.log("POST DISPATCH", listPrevisions)

            // VARIABLES REPONSE
            let res = listPrevisions.current.condition.text
            let degres = listPrevisions.current.temp_c
            let vent = listPrevisions.current.gust_kph
            let clair = "ciel dégagé"
            let pluie = "légère pluie"
            let nuageux = "nuageux"
            let deminuageux = "partiellement nuageux"
            let couvert = "couvert"
            let peunuageux = "peu nuageux"

            let resIcon = <></>

            // APPLY CHANGES
            setResult(listPrevisions.location.name + ":   " + res)
            setTemp("température:  " + degres)
            setTempIcon(<FaTemperatureLow className='ic' size={20} color='#58c78f'/>)
            setWind("vent: " + vent + " Km/h")
            setWindIcon(<SiWindicss className='ic' size={20} color='#66b1ed' />)
            // setIcon(resIcon)
            setCityIcon(<MdLocationCity size={20} />)
        }
    }
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
                    setResult("Pays: " + response.data.sys.country + " latitude: " + position.coords.latitude + " longitude: " + position.coords.longitude + res)
                    setTemp(degres)
                    setTempIcon(<FaTemperatureLow className='ic' size={20} color='#58c78f' />)
                    setWind(vent)
                    setWindIcon(<SiWindicss className='ic' size={20} color='#66b1ed' />)

                })
                .catch((err) => console.log(err))
        });
    }

    // GET DATA SEARCHBAR ON KEY UP
    function getData(search) {

        // KEY A METTRE EN DOTENV
        let apiK = `ff492d0fda7208c6ff614fc2128813b0`
        // REQUÊTE
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=fr&units=metric&appid=${apiK}`)
            .then((response) => {


                // DÉGAGÉ
                // if (res === clair) {
                //     resIcon = <TiWeatherSunny className='ResIcon' color='yellow' size={40} />
                //     console.log("DÉGAGÉ:")
                //     // NUAGEUX
                // } else if (res === nuageux) {
                //     resIcon = <TiWeatherCloudy color='grey' className='ResIcon' size={40} />
                //     console.log("NUAGE")
                //     // PLUVIEUX
                // } else if (res === pluie) {
                //     resIcon = <TiWeatherShower color='blue' className='ResIcon' size={40} />
                //     console.log("PLUIE")
                //     // PARTIEL NUAGEUX
                // } else if (res === deminuageux) {
                //     resIcon = <TiWeatherPartlySunny className='ResIcon' size={40} />
                //     console.log("NUAGE")
                //     // COUVERT
                // } else if (res === couvert) {
                //     resIcon = <TiWeatherCloudy className='ResIcon' size={40} />
                //     console.log("NUAGE")
                //     // PEU NUAGEUX
                // } else if (res === peunuageux) {
                //     resIcon = <TiWeatherPartlySunny className='ResIcon' size={40} />
                //     console.log("NUAGE")
                // }
                // setResult(response.data.name + ": " + response.data.weather[0].description + " ")
                // setTemp("température:  " + degres)
                // setTempIcon(<FaTemperatureLow className='ic' size={20} color='#58c78f' />)
                // setWind("vent: " + vent + " Km/h")
                // setWindIcon(<SiWindicss className='ic' size={20} color='#66b1ed' />)
                // setIcon(resIcon)
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
        setCityIcon();
    }
    // COMPOSANT HTML
    return (
        <div className='t'>
            <div className='iconDiv'>
                <input id='searchBar' onKeyUp={() => search(document.getElementById('searchBar').value)} onKeyDown={() => resetData()} type="text" placeholder='Ville...' />
                <MdGpsFixed onClick={() => GetUserLocationWeather()} className='icon' color='#b8c55d' size={40} />
            </div>
            <div className='result'>
                <h4>{cityIcon}{result}{icon}</h4>
                <h4>{temp} {tempIcon}</h4>
                <h4>{wind} {windIcon} </h4>
                récupéré avec le store ! : {listPrevisions.name}
            </div>
        </div>
    )

}

export default SearchBar;