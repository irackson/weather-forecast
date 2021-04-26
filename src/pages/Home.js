import styled from 'styled-components';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { DataContext } from 'App';

import WeatherForecast from 'components/weather/WeatherForecast';

const Section = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 1.5rem;
`;

export default function Home(props) {
    const { data } = useContext(DataContext);
    return (
        <>
            <h2>5-day Forecast</h2>{' '}
            <Section>
                {data.map((e, i) => (
                    <WeatherForecast
                        key={i}
                        id={i}
                        img={e.img}
                        conditions={e.conditions.join(', ')}
                        time={e.time}
                        temp={e.temp}
                    ></WeatherForecast>
                ))}
            </Section>
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
