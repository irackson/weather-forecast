import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { StyleContext } from 'App';

function ThemeApplicator(props) {
    const { styles, themes, updateThemeSelection } = useContext(StyleContext);
    return (
        <>
            {themes.otherThemes.map((e, i) => (
                <button
                    type="button"
                    key={e}
                    onClick={() => {
                        updateThemeSelection(e);
                    }}
                >
                    {e}
                </button>
            ))}
        </>
    );
}

export default ThemeApplicator;
