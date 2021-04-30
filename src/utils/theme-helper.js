//*         __  ___  __        __  ___    __        __
//* | |\ | /__`  |  |__) |  | /  `  |  | /  \ |\ | /__`
//* | | \| .__/  |  |  \ \__/ \__,  |  | \__/ | \| .__/

// TODO: in each file that uses this util
//! declare variables (ex...)
//* in each component file
// const relativePath = 'src/components/weather/WeatherIcon';
//* add each styled component (with props) in the file to this array
// const styledComponentNames = ['Icon', 'MySection'];
//* instantiate an empty object for each (with props)
// const Icon_props = {};
// const MySection_props = {};

// TODO: pass specific parameters to util
//! relativePath, styledComponentNames
//! also pass global state parameters -- mode, styles (ex...)
// const mode = 'default';

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
            const codeExpression = `Object.defineProperty(${styledComponentNames[i]}_props, '${e}', {value : '${val}', writable: true})`;

            styledCommands.push(codeExpression);
        });
    }
    return styledCommands;
};

module.exports = {
    getStyledCommands,
};
