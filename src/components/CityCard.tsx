import {
    Card,
    CardHeader,
    Button,
    CardBody,
    CardFooter,
    Typography,
    IconButton
} from "@material-tailwind/react";
import { useState } from "react";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import { IWeather } from "../models/models";
import { Link } from "react-router-dom";
import { useGetWeatherByCityNameQuery } from "../store/weather/weatherApi";

export function CityCard({ weather }: { weather: IWeather }) {
    const { removeWeather } = useActions()
    const { weatherList } = useAppSelector(state => state.weather)
    const [currentWeather, setCurrentWeather] = useState(weather)
    const { data } = useGetWeatherByCityNameQuery(currentWeather.name);

    const updateWeatherHandler = async () => {
        data && setCurrentWeather(data)
    }

    const removeHandler = () => {
        removeWeather(weather);
    };

    return (
        <Card className="w-96 bg-gray-300 relative">
            <div className="absolute inset-0 h-10 w-10 pr-96 z-10">
                <IconButton
                    size="sm"
                    color="red"
                    variant="text"
                    onClick={removeHandler}
                    className="!absolute top-2 right-2 rounded-full"
                >
                    x
                </IconButton>
            </div>
            <Link className="relative hover:shadow-md" to={`/weather/${weather.name}`}>
                <CardBody className="text-center ">
                    <Typography variant="h5" className="mb-2">
                        {/* {weather.name}, {weather.sys.country} */}
                        {currentWeather.name}, {currentWeather.sys.country}
                    </Typography>
                    <Typography>
                        {/* {weather.weather[0].description}, {weather.main.temp} */}
                        {currentWeather.weather[0].description}
                    </Typography>
                </CardBody>
                <CardFooter divider className="\ flex items-center text-center justify-between py-3">
                    <Typography variant="small">
                        {/* {Math.round(weather.main.temp - 273.15)}°C */}
                        {Math.round(currentWeather.main.temp - 273.15)}°C
                    </Typography>
                    <Typography variant="small" color="gray" className="flex gap-1">
                        <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                        {new Date().getHours()}:{new Date().getMinutes() > 9 ? new Date().getMinutes() : "0" + new Date().getMinutes()}
                    </Typography>
                </CardFooter>
            </Link>
            <Button
                onClick={updateWeatherHandler}
                variant="outlined" className="relative" color="green">
                Update Weather
            </Button>
        </Card>

    );
}