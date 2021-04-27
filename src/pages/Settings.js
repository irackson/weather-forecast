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
                        updateThemeSelection('themeB');
                    }}
                >
                    use themeA theme
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
