//! import dependencies
import { Route, Switch, Redirect } from 'react-router-dom';
import { createContext, useContext } from 'react';

//! import stylesheets
import 'App.scss';

//! import components
import Header from 'components/Header';

//! import pages
import Settings from 'pages/Settings';
import Home from 'pages/Home';
import GodMode from 'pages/GodMode';

//! import data
const { weatherDataSeed: seed } = require('weatherDataSeed');

const DataContext = createContext(seed);

export default function App() {
    const data = useContext(DataContext);

    return (
        <div className="App">
            <Header />
            <main>
                <Switch>
                    <DataContext.Provider value={data}>
                        <Route
                            exact
                            path="/"
                            render={(props) => <Home {...props} />}
                        ></Route>
                        {data.map((e, i) => (
                            // <Route
                            //     exact
                            //     path={`/${i + 1}`}
                            //     render={(props) => (
                            //         <GodMode {...props} id={i} />
                            //     )}
                            // ></Route>
                            <Route
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
                    </DataContext.Provider>
                </Switch>
            </main>
        </div>
    );
}

export { DataContext };
