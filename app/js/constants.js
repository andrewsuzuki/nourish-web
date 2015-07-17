'use strict';

var AppSettings = {
    appTitle: 'Nourish',
    apiUrl: process.env.DEV_API ? process.env.DEV_API : 'https://nourish.dotcloudapp.com/api', // transformed with envify
    halls: [
        { slug: 'whitney', name: 'Whitney' },
        { slug: 'buckley', name: 'Buckley' },
        { slug: 'mcmahon', name: 'McMahon' },
        { slug: 'putnam', name: 'Putnam' },
        { slug: 'north', name: 'North' },
        { slug: 'northwest', name: 'Northwest' },
        { slug: 'south', name: 'South' },
        { slug: 'towers', name: 'Gelfenbein Commons (Towers)' },
    ]
};

module.exports = AppSettings;
