const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                heading: [ 'Shrikhand', 'cursive'],
                body: ['Nunito', 'sans-serif']
            },
        },
    },
    plugins: [],
};
