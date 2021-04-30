const styleSeed = [
    {
        path: 'src/components/weather/WeatherData',
        customizableComponents: [
            {
                name: 'BoldSpan',
                'padding-right': {
                    default: '0.5rem',
                    userPreference: null,
                    themeA: '4rem',
                    themeB: '3rem',
                },
                color: {
                    default: 'green',
                    userPreference: null,
                    themeB: 'brown',
                },
            },
            {
                name: 'P',
                'font-size': {
                    default: '1rem',
                    userPreference: null,
                    themeA: '2rem',
                    themeB: '1rem',
                },
                color: {
                    default: 'green',
                    userPreference: null,
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
                    userPreference: null,
                    themeA: '4rem',
                    themeB: '3rem',
                },
                height: {
                    default: '2.5rem',
                    userPreference: null,
                    themeB: '6rem',
                },
            },
            {
                name: 'MySection',
                color: {
                    default: 'white',
                    userPreference: null,
                    themeA: 'orange',
                    themeB: 'gold',
                },
                'background-color': {
                    default: 'black',
                    userPreference: null,
                    themeB: 'yellow',
                },
            },
        ],
    },
];

const themeSeed = {
    currentTheme: 'userPreference',
    otherThemes: ['default', 'themeA', 'themeB'],
};

module.exports = {
    styleSeed,
    themeSeed,
};
