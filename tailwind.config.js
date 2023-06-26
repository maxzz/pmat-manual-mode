/** @type {import('tailwindcss').colors} */
import twColors from 'tailwindcss/colors';
// const twColors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: twColors.stone,
            }
        },
    },
    plugins: [],
}

