/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				"blue-highlight": "#53ddf2",
				"blue-base": "#2e7b94",
				"dark-pitch": "#101519",
				"dark-base": "#172026",
				"dark-contrast": "#202c34",
			},
		},
	},
	plugins: [],
};
