/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"blue-base": "#306489",
				"blue-highlight": "#2e7b94",
				"dark-pitch": "#101519",
				"dark-base": "#172026",
				"dark-contrast": "#202c34",
			},
		},
	},
	plugins: [],
};
