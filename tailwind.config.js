module.exports = {
    purge: [
        './index.html',
        './html/*.html',
        './app.js',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                "xs": "480px",
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}