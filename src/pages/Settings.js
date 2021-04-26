import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { StyleContext } from 'App';

function Settings(props) {
    const { styles } = useContext(StyleContext);
    console.log('🚀 ~ file: Settings.js ~ line 8 ~ Settings ~ styles', styles);

    return (
        <>
            <h2>Settings</h2>{' '}
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
