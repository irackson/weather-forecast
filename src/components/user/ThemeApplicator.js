import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { StyleContext } from 'App';

function ThemeApplicator(props) {
    const { styles, themes, updateThemeSelection } = useContext(StyleContext);

    return (
        <>
            <div>
                <button
                    type="button"
                    onClick={() => {
                        updateThemeSelection('default');
                    }}
                >
                    use default theme
                </button>
                <button
                    type="button"
                    onClick={() => {
                        updateThemeSelection('userPreference');
                    }}
                >
                    update user theme
                </button>
                <button
                    type="button"
                    onClick={() => {
                        updateThemeSelection('themeA');
                    }}
                >
                    use themeA
                </button>
                <button
                    type="button"
                    onClick={() => {
                        updateThemeSelection('themeB');
                    }}
                >
                    use themeB
                </button>
            </div>
        </>
    );
}

export default ThemeApplicator;
