import styled from 'styled-components';

const BoldSpan = styled.span`
    font-weight: bold;
    padding-right: 0.5rem;
`;

const P = styled.p`
    margin: 0.5rem;
    font-size: 1rem;
    overflow: visible;
`;

function WeatherData({ conditions, time, temp }) {
    return (
        <div>
            <P>
                <BoldSpan>{temp}℉</BoldSpan>
            </P>

            <P>
                <BoldSpan>conditions:</BoldSpan>
                <br />
                <span>{conditions}</span>
            </P>
            <P>
                <BoldSpan>time:</BoldSpan>
                <span>{time}</span>
            </P>
        </div>
    );
}

export default WeatherData;
