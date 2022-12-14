module.exports = {
	content: ["**/*.razor", "**/*.cshtml", "**/*.html"],
	theme: {
		screens: {
			'xs': '300px',
			'sm': '640px',
			'md': '768px',
			'lg': '824px',
			'xl': '1280px',
			'2xl': '1536px',
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
			},
			colors: {
			},
		},
	},
	plugins: [],
}