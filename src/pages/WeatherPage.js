import MainLayout from '../layouts/mainLayout';
import SearchBar from '../components/weather/SearchBar';
import React from 'react';

function WeatherPage() {
    return (
        <MainLayout>
            <SearchBar />
        </MainLayout>
    );
}

export default WeatherPage;