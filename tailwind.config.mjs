/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				quattrocento: ['Quattrocento', 'sans-serif'],
			},
			colors: {
				'logo-blue': '#a3abe1',
				'logo-purple': '#db8dec',
				'logo-green': '#54d5d4',
				'accent-violet': {
					'lighter': '#ec84f0',
					'light': '#e47fe7',
					'mid-light': '#c26cc5',
					'mid': '#a15aa3',
					'mid-dark': '#7f4781',
					'dark': '#5e345f',
				},
				'accent-green': {
					'lighter': '#43ded0',
					'light': '#40d5c9',
					'mid-light': '#36b3a9',
					'mid': '#2c9189',
					'mid-dark': '#216f69',
					'dark': '#174d49',
				},
				'background-blue': {
					'lighter': '#9ab0e0',
					'light': '#94aad8',
					'mid-light': '#7e8fb6',
					'mid': '#667594',
					'mid-dark': '#4f5a72',
					'dark': '#373f50',
				},
				'toast': {
					'sky-blue': '#84caf0',
					'green': '#aef084',
					'purple': '#ec84f0',
					'orange': '#f0c184',
					'violet': '#9a899b',
					'blue': '#546670',
				},
				'text-light': '#e7e8f7',
			},
		},
		
	},
	plugins: [],
}
