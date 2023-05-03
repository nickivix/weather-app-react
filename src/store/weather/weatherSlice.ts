import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IWeather } from '../../models/models';

const LS_WEATHER_KEY = 'weather';

interface WeatherState {
    weatherList: IWeather[]
}

const initialState: WeatherState = {
    weatherList: JSON.parse(localStorage.getItem(LS_WEATHER_KEY) ?? '[]'),
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        addWeather: (state, action: PayloadAction<IWeather>) => {
            state.weatherList.push(action.payload)
            localStorage.setItem(LS_WEATHER_KEY, JSON.stringify(state.weatherList))
        },
        removeWeather: (state, action: PayloadAction<IWeather>) => {
            state.weatherList = state.weatherList.filter((weather) => weather.id !== action.payload.id)
            localStorage.setItem(LS_WEATHER_KEY, JSON.stringify(state.weatherList))
        }
    },
})

export const weatherActions = weatherSlice.actions
export const weatherReducer = weatherSlice.reducer