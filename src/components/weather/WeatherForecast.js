import WeatherData from 'components/weather/WeatherData';
import WeatherIcon from 'components/weather/WeatherIcon';
import { Switch, Route, Link } from 'react-router-dom';

function WeatherForecast({ id, img, conditions, time }) {
    return (
        <div>
            <WeatherIcon img={img}></WeatherIcon>
            <WeatherData conditions={conditions} time={time}></WeatherData>
            <Link to={`/${id + 1}`}>
                <button>Enter God Mode</button>
            </Link>
        </div>
    );
}

export default WeatherForecast;

{
    /* <WeatherIcon img={img}></WeatherIcon>
<WeatherData
    conditions={conditions}
    time={time}
></WeatherData>
<Link to={`/`}>
    <button>See Details</button>
</Link> */
}
