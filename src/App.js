//! import dependencies
import { Route, Switch, Redirect } from 'react-router-dom';
import { createContext, useContext, useReducer } from 'react';

//! import stylesheets
import 'App.scss';

//! import components
import Header from 'components/Header';

//! import pages
import Settings from 'pages/Settings';
import Home from 'pages/Home';
import GodMode from 'pages/GodMode';

//! import context
import {
    weatherReducer,
    INCREMENT_TEMP,
    DECREMENT_TEMP,
} from 'context/reducers';

//! import data
const { weatherDataSeed: seed } = require('context/weatherDataSeed');

const DataContext = createContext(seed);

export default function App() {
    const data = useContext(DataContext);
    const [weatherState, dispatch] = useReducer(weatherReducer, data);

    const addOneToTemp = (id) => {
        setTimeout(() => {
            dispatch({ type: INCREMENT_TEMP, index: id });
        }, 1);
    };

    const subtractOneFromTemp = (id) => {
        setTimeout(() => {
            dispatch({ type: DECREMENT_TEMP, index: id });
        }, 1);
    };

    return (
        <div className="App">
            <Header />
            <main>
                <DataContext.Provider
                    value={{
                        data: weatherState,
                        addOneToTemp,
                        subtractOneFromTemp,
                    }}
                >
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={(props) => <Home {...props} />}
                        ></Route>

                        {data.map((e, i) => (
                            <Route
                                key={i}
                                exact
                                path={`/${i + 1}`}
                                render={(props) => (
                                    <GodMode {...props} id={i} />
                                )}
                            ></Route>
                        ))}
                        <Route
                            path="/settings"
                            render={(props) => <Settings {...props} />}
                        ></Route>
                        <Route render={() => <Redirect to="/" />} />
                    </Switch>
                </DataContext.Provider>
            </main>
        </div>
    );
}

export { DataContext };
