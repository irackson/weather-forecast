const styleSeed = [
    {
        path: 'src/components/layout/Header',
        customizableComponents: [
            {
                name: 'HeaderContainer',
                'border-radius': {
                    default: '0px',
                    themeA: '2rem',
                    themeB: '4rem',
                },
                border: {
                    default: '2px solid transparent',
                    themeA: '2px solid #a3a52a',
                    themeB: '2px solid #a52a2a',
                },
                'font-size': {
                    default: '32px',
                    themeA: '16px',
                    themeB: '48px',
                },
                'background-color': {
                    default: 'transparent',
                    themeA: 'lightgreen',
                    themeB: 'lightblue',
                },
            },
        ],
    },
    {
        path: 'src/components/weather/WeatherData',
        customizableComponents: [
            {
                name: 'BoldSpan',
                'padding-right': {
                    default: '0.5rem',
                    themeA: '4rem',
                    themeB: '3rem',
                },
                color: {
                    default: 'green',
                    themeB: 'brown',
                },
            },
            {
                name: 'P',
                'font-size': {
                    default: '1rem',
                    themeA: '2rem',
                    themeB: '1rem',
                },
                color: {
                    default: 'green',
                    themeA: '#e9d30c',
                    themeB: '#db4444',
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
                    themeA: '4rem',
                    themeB: '3rem',
                },
                height: {
                    default: '2.5rem',
                    themeB: '6rem',
                },
                outline: {
                    default: '0px solid black',
                    themeA: '3px solid #e5ca97',
                    themeB: '6px solid #d3b402',
                },
            },
            {
                name: 'SecretSection',
                color: {
                    default: 'white',
                    themeA: 'orange',
                    themeB: 'gold',
                },
                'background-color': {
                    default: 'black',
                    themeB: 'yellow',
                },
                display: {
                    default: 'none',
                    userPreference: 'visible',
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
