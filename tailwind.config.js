/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            lightPrimary: '#E3DEDA',
            darkPrimary: '#2F2B28',

            red: '#ab4e15',
            lightRed: '#d4631e',

            orange: '#de983c',
            lightOrange: '#e6af6c',

            blue: '#17487C',
            lightBlue: '#40679E',

            sun: '#f79900',
            moon: '#40679E',
        },
    },
    plugins: [],
};
