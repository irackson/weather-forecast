import { StyleContext } from 'App';
import { useContext } from 'react';

function ThemeCustomizer(props) {
    const { styles, themes, updateThemeSelection } = useContext(StyleContext);

    return (
        <>
            <div>ThemeCustomizer</div>
        </>
    );
}

export default ThemeCustomizer;
