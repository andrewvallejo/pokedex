module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	theme: {
		fontFamily: {
			body: ['Raleway', 'sans-serif']
		},
		colors: {
			clr: {
				i: 'hsl(173, 65%, 70%)',
				ii: 'hsl(153, 28%, 85%)',
				iii: 'hsl(9, 52%, 65%)',
				iiii: 'hsl(341, 35%, 43%)',
				iiiii: 'hsl(48, 93%, 63%)',
				iiiiii: 'hsl(207, 83%, 61%)',
				iiiiiii: 'hsl(87, 90%, %)'
			},
			red: {
				i: 'hsl(352, 85%, 57%)',
				ii: 'hsl(346, 58%, 45%)',
				iii: 'hsl(282, 55%, 22%)'
			},
			white: '#fff',
			black: '#000',
			gray: {
				100: '#ededed',
				200: '#a0a0a0'
			},
			transparent: 'transparent'
		},
		extend: {
			keyframes: {
				scroll: {
					'0%': {
						transform: 'translateX(100%)'
					},
					'100%': {
						transform: 'translateX(-100%)'
					}
				},
				opi: {
					'50%': {
						opacity: '.75'
					}
				}
			},
			animation: {
				scroll: 'scroll 10s infinite linear',
				opi: 'opi 3s infinite alternate'
			}
		}
	}
}
