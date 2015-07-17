'use strict';

var AppSettings = {
    appTitle: 'Nourish',
    apiUrl: process.env.DEV_API ? process.env.DEV_API : 'https://nourish.dotcloudapp.com/api', // transformed with envify
};

module.exports = AppSettings;
