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
    themeReducer,
    CHANGE_THEME,
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

    //* style context & reducer stuff
    const styles = useContext(StyleContext);
    // const [styleState, styleDispatch] = useReducer(styleReducer, StyleContext);

    //* theme context & reducer stuff
    const themes = useContext(ThemeContext);
    const [themeState, themeDispatch] = useReducer(themeReducer, themes);

    const updateThemeSelection = (selection) => {
        // if (themes.currentTheme !== selection) {
        //     setTimeout(() => {
        //         themeDispatch({ type: CHANGE_THEME, selection: selection });
        //     }, 1);
        // }
        console.log(themes);
        setTimeout(() => {
            themeDispatch({ type: CHANGE_THEME, selection: selection });
        }, 1);
    };

    return (
        <StyleContext.Provider
            value={{ styles, themes: themeState, updateThemeSelection }}
        >
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
