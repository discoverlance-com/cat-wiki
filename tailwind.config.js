import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'mystery-quest': ['Mystery Quest', ...defaultTheme.fontFamily.sans],
				sans: ['Montserrat', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				primary: {
					100: '#E0E0E0',
					200: '#291507'
				},
				secondary: {
					100: '#E3E1DC',
					200: '#544439'
				}
			}
		}
	},
	plugins: []
};
