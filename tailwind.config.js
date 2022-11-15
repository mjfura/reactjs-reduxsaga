/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './views/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                primary: '#C42521',
                placeholder: '#676767'
            },
            gridTemplateColumns: {
                auto: 'repeat(auto-fit,minmax(205px,1fr))'
            }
        }
    },
    plugins: []
}
