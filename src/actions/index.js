import axios from 'axios';

const API_KEY = '79c1c7846ba06a7ce6b1f0d755434744';
const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather (city){
    const url = `${URL}&q=${city},us`
    const request = axios.get(url)
    console.log("Request ", request)

    return{
        type: FETCH_WEATHER,
        payload: request
    }
}