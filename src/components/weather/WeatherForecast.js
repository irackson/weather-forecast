import styled from 'styled-components';

import WeatherData from 'components/weather/WeatherData';
import WeatherIcon from 'components/weather/WeatherIcon';
import { Link } from 'react-router-dom';

const Div = styled.div`
    width: 10ch;
    max-height: 15ch;
`;

function WeatherForecast({ id, img, conditions, time }) {
    return (
        <Div>
            <WeatherIcon img={img}></WeatherIcon>
            <WeatherData conditions={conditions} time={time}></WeatherData>
            <Link to={`/${id + 1}`}>
                <button>Enter God Mode</button>
            </Link>
        </Div>
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
