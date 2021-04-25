//! import dependencies
import { Route, Switch } from 'react-router-dom';
import { createContext } from 'react';

//! import stylesheets
import 'App.scss';

//! import components
import Header from 'components/Header';

//! import pages
import Settings from 'pages/Settings';
import Home from 'pages/Home';

//! import data
const { weatherDataSeed: seed } = require('weatherDataSeed');

const DataContext = createContext(null);

export default function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Switch>
                    <DataContext.Provider value={seed}>
                        <Route
                            exact
                            path="/"
                            render={(props) => <Home {...props} />}
                        ></Route>
                    </DataContext.Provider>
                    <Route
                        path="/settings"
                        render={(props) => <Settings {...props} />}
                    ></Route>
                </Switch>
            </main>
        </div>
    );
}

export { DataContext };
