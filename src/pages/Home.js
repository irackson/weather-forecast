import { Link } from 'react-router-dom';

export default function Home(props) {
    return (
        <>
            <h2>5-day Forecast</h2>{' '}
            <footer>
                <nav>
                    <Link to="/settings">
                        <button>Manage Style Settings</button>
                    </Link>
                </nav>
            </footer>
        </>
    );
}
