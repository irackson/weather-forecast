//*         __  ___  __        __  ___    __        __
//* | |\ | /__`  |  |__) |  | /  `  |  | /  \ |\ | /__`
//* | | \| .__/  |  |  \ \__/ \__,  |  | \__/ | \| .__/

// TODO: in each file that uses this util
//! declare variables (ex...)
//* in each component file
// const relativePath = 'src/components/weather/WeatherIcon.js';
//* add each styled component (with props) in the file to this array
// const styledComponentNames = ['Icon', 'MySection'];
//* instantiate an empty object for each (with props)
// const Icon_props = {};
// const MySection_props = {};

// TODO: pass specific parameters to util
//! relativePath, styledComponentNames
//! also pass global state parameters -- mode, styles (ex...)
// const mode = 'default';
/* const styles = [
    {
        path: 'src/components/weather/WeatherData.js',
        customizableComponents: [
            {
                name: 'BoldSpan',
                'padding-right': {
                    default: '0.5rem',
                    userPreference: '1rem',
                    themeA: '4rem',
                    themeB: '3rem',
                },
                color: {
                    default: 'green',
                    userPreference: 'orange',
                    themeB: 'brown',
                },
            },
            {
                name: 'P',
                'font-size': {
                    default: '1rem',
                    userPreference: '3rem',
                    themeA: '2rem',
                    themeB: '1rem',
                },
                color: {
                    default: 'green',
                    userPreference: 'goldenrod',
                    themeC: 'gray',
                },
            },
        ],
    },
    {
        path: 'src/components/weather/WeatherIcon.js',
        customizableComponents: [
            {
                name: 'Icon',
                width: {
                    default: '2.5rem',
                    userPreference: '5rem',
                    themeA: '4rem',
                    themeB: '3rem',
                },
                height: {
                    default: '2.5rem',
                    userPreference: '10rem',
                    themeB: '6rem',
                },
            },
            {
                name: 'MySection',
                color: {
                    default: 'white',
                    userPreference: 'blue',
                    themeA: 'orange',
                    themeB: 'gold',
                },
                'background-color': {
                    default: 'black',
                    userPreference: 'lightblue',
                    themeB: 'yellow',
                },
            },
        ],
    },
]; */

// TODO: expect an array of strings back
//! loop over array and eval each to set styled props

//*  __   __   __   ___
//* /  ` /  \ |  \ |__
//* \__, \__/ |__/ |___

const getStyledCommands = (
    styles,
    mode,
    styledComponentNames,
    relativePath
) => {
    let styledCommands = [];

    const customizableComponents = styles.find((e) => e.path === relativePath)
        .customizableComponents;

    for (let i = 0; i < styledComponentNames.length; i++) {
        let properties;
        try {
            properties = Object.keys(customizableComponents[i]).filter(
                (e) => e !== 'name'
            );
        } catch (error) {
            console.log('🚀 ~ file: theme-helper.js ~ line 113 ~ error', error);
            continue;
        }

        properties.forEach((e, index) => {
            const val =
                customizableComponents[i][e][
                    Object.keys(customizableComponents[i][e]).filter(
                        (m) => m === mode
                    )
                ] || customizableComponents[i][e].default;
            const codeExpression = `Object.defineProperty(${styledComponentNames[i]}_props, '${e}', {value : '${val}', configurable: true, writable: true})`;
            // Object.defineProperty({}, 'asdf', {configurable: true, writable: true})
            styledCommands.push(codeExpression);
        });
    }
    return styledCommands;
};

module.exports = {
    getStyledCommands,
};
