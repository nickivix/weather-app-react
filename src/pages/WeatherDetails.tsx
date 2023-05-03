import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

export const WeatherDetails = () => {
    const { cityName } = useParams<{ cityName: string }>()
    const weather = useAppSelector(state =>
        state.weather.weatherList.find(w => w.name === cityName)
    );

    return (
        <div className="flex flex-wrap justify-center gap-5 pt-10 mx-auto w-screen h-auto">
            <Card color="blue" variant="gradient" className="w-full max-w-[20rem] p-8">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                >
                    <Typography
                        variant="small"
                        color="white"
                        className="font-normal uppercase"
                    >
                        {weather?.name}, {weather?.sys.country}
                    </Typography>
                    <Typography
                        variant="h1"
                        color="white"
                        className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                    >
                        <span className="mt-2 text-4xl">{weather && Math.round(weather.main.temp - 273.15)}°C</span>
                    </Typography>
                </CardHeader>
                <CardBody className="p-0">
                    <ul className="flex flex-col text-center items-center gap-4">
                        <li className="flex items-center gap-4">
                            <Typography className="font-normal">{weather?.weather[0].main}: {weather?.weather[0].description}</Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <Typography className="font-normal">Sunrise: &nbsp;
                                {weather && new Date(weather.sys.sunrise * 1000).getHours()}:
                                {weather && (new Date(weather.sys.sunrise * 1000).getMinutes() > 9 ? new Date(weather.sys.sunrise * 1000).getMinutes() : "0" + new Date(weather.sys.sunrise * 1000).getMinutes())}
                            </Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <Typography className="font-normal">Sunset: &nbsp;
                                {weather && new Date(weather.sys.sunset * 1000).getHours()}:
                                {weather && (new Date(weather.sys.sunset * 1000).getMinutes() > 9 ? new Date(weather.sys.sunset * 1000).getMinutes() : "0" + new Date(weather.sys.sunset * 1000).getMinutes())}
                            </Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <Typography className="font-normal">Wind speed: {weather?.wind.speed} km/h</Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <Typography className="font-normal">Feels like: {weather && Math.round(weather.main.feels_like - 273.15)}°C</Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <Typography className="font-normal">Humidity: {weather?.main.humidity}%</Typography>
                        </li>
                    </ul>
                </CardBody>
            </Card>
        </div>
    );
}