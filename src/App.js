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

//! import reducers
import {
    weatherReducer,
    INCREMENT_TEMP,
    DECREMENT_TEMP,
} from 'context/reducers';

//! import data
const { weatherDataSeed: seed } = require('context/weatherDataSeed');
const { styleSeed, themeSeed } = require('context/styleSeed');

const DataContext = createContext(seed);
const StyleContext = createContext(styleSeed);
const ThemeContext = createContext(themeSeed);
export default function App() {
    //* weather data context & reducer stuff
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

    //* variable style/theme context & reducer stuff
    const styles = useContext(StyleContext);
    // const [styleState, styleDispatch] = useReducer(styleReducer, StyleContext);
    const themes = useContext(ThemeContext);

    return (
        <StyleContext.Provider value={{ styles: styles, themes: themes }}>
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
        </StyleContext.Provider>
    );
}

export { DataContext, StyleContext, ThemeContext };
