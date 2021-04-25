import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { DataContext } from 'App';

import WeatherForecast from 'components/weather/WeatherForecast';

export default function Home(props) {
    const data = useContext(DataContext);
    return (
        <>
            <h2>5-day Forecast</h2>{' '}
            {data.map((e, i) => (
                <WeatherForecast
                    key={i}
                    id={i}
                    img={e.img}
                    conditions={e.conditions}
                    time={e.time}
                ></WeatherForecast>
            ))}
            <footer>
                <nav>
                    <Link to="/settings">
                        <button>Manage Style Settings</button>
                    </Link>
                </nav>
            </footer>
        </>
    );
}
