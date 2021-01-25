import React from 'react';
import {connect} from 'react-redux'
import {Sparklines,SparklinesLine} from 'react-sparklines'
import DrawCharts from '../components/DrawCharts'
import GoogleMap from '../components/google_map'
class WeatherList extends React.Component {

    renderWeather(cityData) {
        const name = cityData.city.name
        const temps = cityData.list.map(weather => weather.main.temp)
        const humidity = cityData.list.map(weather => weather.main.humidity)
        const pressure = cityData.list.map(weather => weather.main.pressure)
        const lon = cityData.city.coord.lon;
        const lat = cityData.city.coord.lat;
        return(
            <tr key = {name}>
                <td>{name}</td>
                <td>
                    <DrawCharts data = {temps} color = "orange" units = "K" />
                    </td>
                    <td>
                    <DrawCharts data = {humidity} color = "blue" units = "kPa" />
                    </td>    
                    <td>
                    <DrawCharts data = {pressure} color = "green" units = "%" />
                    </td>   
            </tr>
        )
    }
    render(){
        return(
            <table className = "table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
            )
    }
}
function mapStateToProps({weather}){
    return {weather}
}

export default connect(mapStateToProps)(WeatherList)