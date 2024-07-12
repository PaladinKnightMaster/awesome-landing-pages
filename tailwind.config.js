/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		// "./**/*.{html, jsx, js}",
		"./src/apps/**/*.{html,jsx, js}",
		"./src/apps/**/*.js",
		"./src/apps/**/*.html",
	
		// "*.{html,jsx}"
	],
	theme: {
		extend: {
			colors: {
				primary: "#155eef",
			}
		},
	},
	plugins: [],
}

