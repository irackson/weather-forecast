import { Link } from 'react-router-dom';

function Settings(props) {
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
