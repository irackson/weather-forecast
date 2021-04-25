const weatherDataSeed = [
    {
        img:
            'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg',
        conditions: ['sunny'],
        time: 'day',
        temp: 88,
    },
    {
        img:
            'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/night.svg',
        conditions: ['clear'],
        time: 'day',
        temp: 66,
    },
    {
        img:
            'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/stormy.svg',
        conditions: ['clear'],
        time: 'day',
        temp: 42,
    },
    {
        img:
            'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-day_t7ckxp.svg',
        conditions: ['partly sunny'],
        time: 'night',
        temp: 72,
    },
    {
        img:
            'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg',
        conditions: ['clear', 'chance rain'],
        time: 'day',
        temp: 50,
    },
];

module.exports = {
    weatherDataSeed,
};
