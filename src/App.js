import 'App.scss';
import Header from 'components/Header';
import {
    CHANGE_THEME,
    DECREMENT_TEMP,
    INCREMENT_TEMP,
    themeReducer,
    weatherReducer,
} from 'context/reducers';
import GodMode from 'pages/GodMode';
import Home from 'pages/Home';
import Settings from 'pages/Settings';
import { createContext, useContext, useReducer } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

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
    // const [styleState, styleDispatch] = useReducer(styleReducer, useContext(StyleContext));

    //* theme context & reducer stuff
    const [themeState, themeDispatch] = useReducer(
        themeReducer,
        useContext(ThemeContext)
    );

    const updateThemeSelection = (selection) => {
        console.log('before', themeState.currentTheme);
        if (themeState.currentTheme !== selection) {
            setTimeout(() => {
                themeDispatch({ type: CHANGE_THEME, selection: selection });
            }, 1);
            return;
        }
        return;

        // setTimeout(() => {
        //     themeDispatch({ type: CHANGE_THEME, selection: selection });
        // }, 1);
    };

    return (
        <StyleContext.Provider
            value={{
                styles: useContext(StyleContext), // TODO: swap to styleState after writing reducer
                themes: themeState,
                updateThemeSelection,
            }}
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
