module.exports = {
    thDeme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'], // Define your custom font
            },
            backgroundImage: {
                'hero': "url('./src/assets/hero-img.png')",
            },
        },
        safelist: [
            {
                pattern: /^bg-\[url\(.+\)\]$/,
            }
        ],
    };