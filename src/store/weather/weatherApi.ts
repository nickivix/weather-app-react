import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IWeather } from '../../models/models'

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api.openweathermap.org/data/2.5`
    }),
    endpoints: (builder) => ({
        getWeatherByCityName: builder.query<IWeather, string>({
            query: (cityName: string) => `/weather?q=${cityName}&appid=0ed9b96dc68e5719d6db7ed72ba12f98`,
        }),
    })
})

export const { useGetWeatherByCityNameQuery } = weatherApi