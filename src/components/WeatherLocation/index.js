import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

import getUrlWeatherByCity from '../../services/getUrlWeatherByCity'

import CircularProgress from '@material-ui/core/CircularProgress'

import transformWeather from '../../services/transformWeather'

import Location from './Location'
import WeatherData from './WeatherData'
import './styles.css'

class WeatherLocation extends Component {

    constructor(props){
        super(props)
        const { city } = props

        this.state = {
            city,
            data: null,
        }
        console.log('constructor')
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.handleUpdateClick()
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
    }

    handleUpdateClick = () => {
        
        const api_weather = getUrlWeatherByCity(this.state.city)
        
        fetch(api_weather).then ( resolve => {
            return resolve.json()
        }).then(data => {
            console.log('data',data)
            const newWeather = transformWeather(data)
            console.log('newWeather',newWeather)
            this.setState({
                data: newWeather
            })
        })
    }

    render() {
        const { onWeatherLocationClick } = this.props
        console.log('render')

        const { city, data } = this.state

        return (
        <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
            <Location city={city}/>
            {
                data ? 
                <WeatherData data={data} /> :
                <CircularProgress />
                
            }
        </div>
        )
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation