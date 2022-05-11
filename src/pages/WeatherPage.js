import MainLayout from '../layouts/mainLayout';
import SearchBar from '../components/weather/SearchBar';
import axios from 'axios';
import React, { useState } from 'react';




function getData() {


    let apiK = `ff492d0fda7208c6ff614fc2128813b0`
    console.log(apiK)
    axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiK}`)
        .then((response) => {
            console.log(response.data)
        })
        .catch((err) => console.log(err))

}
getData()

function WeatherPage() {
    return (
        <MainLayout>
            <SearchBar />
        </MainLayout>
    );
}

export default WeatherPage;