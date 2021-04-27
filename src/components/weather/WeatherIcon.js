import { StyleContext } from 'App';
import { useContext } from 'react';
import { getStyledCommands } from 'utils/theme-helper';
import styled from 'styled-components';

const relativePath = 'src/components/weather/WeatherIcon.js';
const styledComponentNames = ['Icon', 'MySection'];

const Icon = styled.img`
    width: ${(props) => props.Icon_props['width']};
    height: ${(props) => props.Icon_props['height']};
    border: 1px solid black;
`;
const Icon_props = {};

const MyDiv = styled.div`
    border: 1px solid pink;
`;

const MySection = styled.section`
    background-color: ${(props) => props.MySection_props['background-color']};
    color: ${(props) => props.MySection_props['color']};
`;
const MySection_props = {};

function WeatherIcon(props) {
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
            console.log(styledCommands[i]);
            eval(styledCommands[i]);
        } catch (error) {
            console.log(
                '🚀 ~ file: WeatherIcon.js ~ line 39 ~ WeatherIcon ~ error',
                error.message
            );
        }
    }

    return (
        <>
            <Icon
                className="components/weather/WeatherIcon.js__Icon"
                src={props.img}
                Icon_props={Icon_props}
            ></Icon>
            <MySection MySection_props={MySection_props}>MySection</MySection>
            <MyDiv>😄</MyDiv>
        </>
    );
}

export default WeatherIcon;
