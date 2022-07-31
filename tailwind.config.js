const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/*.html"],
    theme: {
        screens: {
            xs: '375px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1400px',
            '3xl': '1536px',
        },
        extend: {
            colors: {
                slate: {
                    800: '#272c4a',
                    900: '#000032',
                },
                gray: {
                    400: '#989898',
                    900: '#040509',
                },
                purple: {
                    600: '#7f00ff',
                    800: '#6723B8',
                },
                pink: {
                    500: '#e100ff',
                    600: '#C5357C',
                },
                cyan: {
                    600: '#3598c5',
                },
                indigo: {
                    700: '#3598c5',
                },
                rose: {
                    700: '#c53546',
                },
                teal: {
                    300: '#42e8e0',
                },
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                '6xl': ['3.5rem', '1.1'],
                '8xl': ['5rem', '5.625rem'],
            },
            spacing: {
                4.5: '1.125rem',
                13: '3.25rem',
                18: '4.5rem',
                19: '4.75rem',
                21: '5.25rem',
                22: '5.5rem',
                22.5: '5.625rem',
                26: '6.5rem',
                30: '7.5rem',
                34: '8.5rem',
                38: '9.5rem',
                51: '12.75rem',
                55: '13.75rem',
                61: '15.25rem',
            },
            zIndex: {
                60: '60',
                70: '70',
                80: '80',
                90: '90',
                100: '100',
            },
            dropShadow: {
                'white-xl': '0 0 12 rgba(255, 255, 255, 0.8)',
            },
            maxWidth: {
                container: '1440px',
            },
        },
    },
    plugins: [{

    }],
};
