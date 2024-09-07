/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                type: {
                    '0%': { width: '0%' },
                    '100%': { width: '100%' },
                },
                blink: {
                    '0%': { borderColor: 'transparent' },
                    '50%': { borderColor: '#3dfefe' },
                    '100%': { borderColor: 'transparent' },
                },
            },
            animation: {
                type: 'type 4s steps(40, end) forwards, blink 0.75s step-end infinite',
            },
        },
    },

    plugins: [],
}