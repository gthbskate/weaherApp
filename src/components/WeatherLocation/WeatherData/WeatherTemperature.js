import React from 'react'

import Brightness5Icon from '@material-ui/icons/Brightness5'
import WavesIcon from '@material-ui/icons/Waves';
import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import ToysIcon from '@material-ui/icons/Toys';
import FlashOnIcon from '@material-ui/icons/FlashOn';

import PropTypes from 'prop-types'

import {
    SUN,
    FOG,
    CLOUD,
    SNOW, 
    RAIN, 
    WIND,
    THUNDER,
    DRIZZLE
} from '../../../constants/weathers'

import './styles.css'

const weatherIcons = {
    [SUN]:<Brightness5Icon className="wicon" />,
    [FOG]: <WavesIcon className="wicon" />,
    [CLOUD]: <FilterDramaIcon className="wicon" />,
    [SNOW]: <AcUnitIcon className="wicon" />,
    [RAIN]: <BeachAccessIcon className="wicon" />,
    [WIND]: <ToysIcon className="wicon" />,
    [THUNDER]: <ToysIcon className="wicon" />,
    [DRIZZLE]: <BeachAccessIcon className="wicon" />
}

const getWeatherIcon = weatherState => {
    const weatherIcon = weatherIcons[weatherState]

    if(weatherIcon)
        return weatherIcon
    else 
        return <Brightness5Icon className="wicon" />
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature" >
            {`${temperature}`}</span>
        <span className="temperatureType" >
            {` c°`}
        </span>
    </div>
)

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
}

export default WeatherTemperature