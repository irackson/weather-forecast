import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { DataContext } from 'App';

import WeatherData from 'components/weather/WeatherData';
import WeatherIcon from 'components/weather/WeatherIcon';

export default function GodMode(props) {
    const { data, addOneToTemp, subtractOneFromTemp } = useContext(DataContext);
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
                        addOneToTemp(props.id);
                    }}
                >
                    Increase Temp
                </button>
                <button
                    type="button"
                    onClick={() => {
                        subtractOneFromTemp(props.id);
                    }}
                >
                    Decrease Temp
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
