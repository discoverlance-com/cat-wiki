const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                "mystery-quest": [
                    "Mystery Quest",
                    ...defaultTheme.fontFamily.sans,
                ],
                sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
