import WeatherData from 'components/weather/WeatherData';
import WeatherIcon from 'components/weather/WeatherIcon';

function WeatherForecast({ id, img, conditions, time }) {
    return (
        <div>
            <WeatherIcon img={img}></WeatherIcon>
            <WeatherData conditions={conditions} time={time}></WeatherData>
        </div>
    );
}

export default WeatherForecast;
