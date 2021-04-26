const styleSeed = [
    {
        path: 'components/weather/WeatherData.js',
        styledComponents: [
            {
                name: 'BoldSpan',
                style: [
                    {
                        property: 'padding-right',
                        defaultValue: '0.5rem',
                    },
                    {
                        property: 'color',
                        defaultValue: 'green',
                    },
                ],
            },
            {
                name: 'P',
                style: [
                    {
                        property: 'font-size',
                        defaultValue: '1rem',
                    },
                    {
                        property: 'color',
                        defaultValue: 'green',
                    },
                ],
            },
        ],
    },
    {
        path: 'components/weather/WeatherIcon.js',
        styledComponents: [
            {
                name: 'Icon',
                style: [
                    {
                        property: 'width',
                        defaultValue: '2.5rem',
                    },
                    {
                        property: 'height',
                        defaultValue: '2.5rem',
                    },
                ],
            },
        ],
    },
];

module.exports = {
    styleSeed,
};
