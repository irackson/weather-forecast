import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { StyleContext } from 'App';

function Settings(props) {
    const { styles, themes, updateThemeSelection } = useContext(StyleContext);

    return (
        <>
            <h2>Settings</h2>{' '}
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
            <footer>
                <nav>
                    <Link to="/">
                        <button>Return Home</button>
                    </Link>
                </nav>
            </footer>
        </>
    );
}

export default Settings;
