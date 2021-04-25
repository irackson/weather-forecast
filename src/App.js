import 'App.scss';

import Header from 'components/Header';
import Settings from 'pages/Settings';
import Home from 'pages/Home';

import { Route, Switch } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={(props) => <Home {...props} />}
                    ></Route>
                    <Route
                        path="/settings"
                        render={(props) => <Settings {...props} />}
                    ></Route>
                </Switch>
            </main>
        </div>
    );
}

export default App;
