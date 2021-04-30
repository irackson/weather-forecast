import { StyleContext } from 'App';
import { useContext } from 'react';
import styled from 'styled-components';
import { getStyledCommands } from 'utils/theme-helper';

const relativePath = 'src/components/weather/WeatherIcon';
const styledComponentNames = ['Icon', 'SecretSection'];

const Icon = styled.img`
    width: ${(props) => props.Icon_props['width']};
    height: ${(props) => props.Icon_props['height']};
    outline: ${(props) => props.Icon_props['outline']};
`;
const Icon_props = {};

const SecretSection = styled.section`
    background-color: ${(props) =>
        props.SecretSection_props['background-color']};
    color: ${(props) => props.SecretSection_props['color']};
    display: ${(props) => props.SecretSection_props['display']};
`;
const SecretSection_props = {};

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
            eval(styledCommands[i]);
        } catch (error) {
            console.error(
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
            <SecretSection SecretSection_props={SecretSection_props}>
                SecretSection
            </SecretSection>
        </>
    );
}

export default WeatherIcon;
