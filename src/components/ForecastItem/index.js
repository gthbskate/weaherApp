import React from 'react'
import PropTypes from 'prop-types'
import WeatherData from '../WeatherLocation/WeatherData'

const ForecastItem = ({ weekDay, hour, data }) => (
    <div>
        <div style={{marginTop: 10, marginBottom: 10}}>
            <h3 style={{color: 'gray'}}>{weekDay} {hour} hrs.</h3>
        </div>
        <WeatherData data={data}/>
    </div>
)

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}

export default ForecastItem