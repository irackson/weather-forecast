import { StyleContext } from 'App';
import { useContext } from 'react';
import styled from 'styled-components';
import { getStyledCommands } from 'utils/theme-helper';

const relativePath = 'src/components/layout/Header';
const styledComponentNames = ['HeaderContainer'];

const HeaderContainer = styled.header`
    border-radius: ${(props) => props.HeaderContainer_props['border-radius']};
    border: ${(props) => props.HeaderContainer_props['border']};
    font-size: ${(props) => props.HeaderContainer_props['font-size']};
    background-color: ${(props) =>
        props.HeaderContainer_props['background-color']};
    padding-top: 10px;

    p {
        padding: 0px;
        margin: 0px;
        font-weight: bold;
    }
`;
const HeaderContainer_props = {};

function Header() {
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
        <HeaderContainer HeaderContainer_props={HeaderContainer_props}>
            <p>Weather Forecast</p>
        </HeaderContainer>
    );
}

export default Header;
