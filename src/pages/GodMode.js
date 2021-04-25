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
                temp={data[props.id].temp}
            ></WeatherData>
            <div>
                <button
                    type="button"
                    onClick={() => {
                        console.log(data[props.id].temp - 1);
                    }}
                >
                    Increase Rating
                </button>
                <button
                    type="button"
                    onClick={() => {
                        console.log(data[props.id].temp - 1);
                    }}
                >
                    Decrease Rating
                </button>
            </div>
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
