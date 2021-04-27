import { StyleContext } from 'App';
import { useContext } from 'react';
import { getStyledCommands } from 'utils/theme-helper';
import styled from 'styled-components';

const relativePath = 'src/components/weather/WeatherData.js';
const styledComponentNames = ['BoldSpan', 'P'];

const BoldSpan = styled.span`
    font-weight: bold;
    padding-right: ${(props) => props.BoldSpan_props['padding-right']};
    color: ${(props) => props.BoldSpan_props['color']};
`;
const BoldSpan_props = {};

const P = styled.p`
    margin: 0.5rem;
    font-size: ${(props) => props.P_props['font-size']};
    overflow: visible;
    color: ${(props) => props.P_props['color']};
`;
const P_props = {};

function WeatherData({ conditions, time, temp }) {
    const { styles, themes } = useContext(StyleContext);

    const styledCommands = getStyledCommands(
        styles,
        themes.currentTheme,
        styledComponentNames,
        relativePath
    );
    for (let i = 0; i < styledCommands.length; i++) {
        try {
            // eslint-disable-next-line no-eval
            eval(styledCommands[i]);
        } catch (error) {
            console.log(
                '🚀 ~ file: WeatherIcon.js ~ line 39 ~ WeatherIcon ~ error',
                error
            );
        }
    }

    return (
        <div>
            <P P_props={P_props}>
                <BoldSpan BoldSpan_props={BoldSpan_props}>{temp}℉</BoldSpan>
            </P>

            <P P_props={P_props}>
                <BoldSpan BoldSpan_props={BoldSpan_props}>conditions:</BoldSpan>
                <br />
                <span>{conditions}</span>
            </P>
            <P P_props={P_props}>
                <BoldSpan BoldSpan_props={BoldSpan_props}>time:</BoldSpan>
                <span>{time}</span>
            </P>
        </div>
    );
}

export default WeatherData;
