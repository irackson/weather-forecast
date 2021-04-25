import styled from 'styled-components';

const Icon = styled.img`
    width: 2.5rem;
    height: 2.5rem;
`;

function WeatherIcon(props) {
    return <Icon src={props.img}></Icon>;
}

export default WeatherIcon;
