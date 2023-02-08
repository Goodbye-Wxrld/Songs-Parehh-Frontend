const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,svg}'],
    safelist: ['animate-none'],
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 10s linear infinite',
            },
            fontFamily: {
                heading: ['Shrikhand', 'cursive'],
                body: ['Nunito', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
