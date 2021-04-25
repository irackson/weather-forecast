//! import dependencies
import { Route, Switch } from 'react-router-dom';
import { useContext } from 'react';

//! import stylesheets
import 'App.scss';

//! import components
import Header from 'components/Header';

//! import pages
import Settings from 'pages/Settings';
import Home from 'pages/Home';

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
