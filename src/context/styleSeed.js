const styleSeed = [
    {
        path: 'src/components/weather/WeatherData',
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
        path: 'src/components/weather/WeatherIcon',
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
];

const themeSeed = {
    currentTheme: 'default',
    otherThemes: ['userPreference', 'themeA', 'themeB'],
};

module.exports = {
    styleSeed,
    themeSeed,
};
