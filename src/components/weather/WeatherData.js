import styled from 'styled-components';

const BoldSpan = styled.span`
    font-weight: bold;
    padding-right: 0.5rem;
`;

function WeatherData({ conditions, time }) {
    return (
        <div>
            <p>
                <BoldSpan>conditions:</BoldSpan>
                <span>{conditions}</span>
            </p>
            <p>
                <BoldSpan>time:</BoldSpan>
                <span>{time}</span>
            </p>
        </div>
    );
}

export default WeatherData;
