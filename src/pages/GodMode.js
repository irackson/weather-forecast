import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { DataContext } from 'App';

import WeatherData from 'components/weather/WeatherData';
import WeatherIcon from 'components/weather/WeatherIcon';

export default function GodMode(props) {
    const data = useContext(DataContext);
    return (
        <>
            <h2>Edit Day {props.id + 1}</h2>{' '}
            <WeatherIcon img={data[props.id].img}></WeatherIcon>
            <WeatherData
                conditions={data[props.id].conditions}
                time={data[props.id].time}
            ></WeatherData>
            <footer>
                <nav>
                    <Link to="/">
                        <button>Return Home</button>
                    </Link>
                </nav>
            </footer>
        </>
    );
}
