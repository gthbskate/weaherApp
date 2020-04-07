import transformForecast from '../services/transformForecast'

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({ type: SET_CITY, payload });

const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload })


export const api_key = 'b47e17be31b6311bf670d92b8f350694'
export const url = 'http://api.openweathermap.org/data/2.5/forecast'


export const setSelectedCity = payload => {

    return dispatch => {
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`

        //Activar en el estado un indicador de búsqueda de datos
        dispatch(setCity(payload));

        return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log('forecastData',forecastData);

                //Modificar el estado con el resultado de la promise
                dispatch(setForecastData({city: payload, forecastData}));
            }
        );
    };
};