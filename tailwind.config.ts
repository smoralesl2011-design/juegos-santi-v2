import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
					foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
					soft: 'hsl(var(--primary-soft) / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
					surface: 'hsl(var(--destructive-surface) / <alpha-value>)'
				},
				success: {
					DEFAULT: 'hsl(var(--success) / <alpha-value>)',
					foreground: 'hsl(var(--success-foreground) / <alpha-value>)',
					surface: 'hsl(var(--success-surface) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
					foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'hsl(var(--card) / <alpha-value>)',
					foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
				},
				panel: {
					'1': 'hsl(var(--panel-1) / <alpha-value>)',
					'1-tint': 'hsl(var(--panel-1-tint) / <alpha-value>)',
					'2': 'hsl(var(--panel-2) / <alpha-value>)',
					'2-tint': 'hsl(var(--panel-2-tint) / <alpha-value>)',
					'3': 'hsl(var(--panel-3) / <alpha-value>)',
					'3-tint': 'hsl(var(--panel-3-tint) / <alpha-value>)'
				},
				operator: {
					plus: 'hsl(var(--operator-plus) / <alpha-value>)',
					'plus-fg': 'hsl(var(--operator-plus-fg) / <alpha-value>)',
					equals: 'hsl(var(--operator-equals) / <alpha-value>)',
					'equals-fg': 'hsl(var(--operator-equals-fg) / <alpha-value>)'
				},
				option: {
					sun: 'hsl(var(--option-sun) / <alpha-value>)',
					'sun-fg': 'hsl(var(--option-sun-fg) / <alpha-value>)',
					sky: 'hsl(var(--option-sky) / <alpha-value>)',
					'sky-fg': 'hsl(var(--option-sky-fg) / <alpha-value>)',
					berry: 'hsl(var(--option-berry) / <alpha-value>)',
					'berry-fg': 'hsl(var(--option-berry-fg) / <alpha-value>)',
					grape: 'hsl(var(--option-grape) / <alpha-value>)',
					'grape-fg': 'hsl(var(--option-grape-fg) / <alpha-value>)'
				},
				star: {
					DEFAULT: 'hsl(var(--star) / <alpha-value>)',
					empty: 'hsl(var(--star-empty) / <alpha-value>)'
				},
				confetti: {
					1: 'hsl(var(--confetti-1) / <alpha-value>)',
					2: 'hsl(var(--confetti-2) / <alpha-value>)',
					3: 'hsl(var(--confetti-3) / <alpha-value>)',
					4: 'hsl(var(--confetti-4) / <alpha-value>)',
					5: 'hsl(var(--confetti-5) / <alpha-value>)',
					6: 'hsl(var(--confetti-6) / <alpha-value>)'
				},
				key: {
					DEFAULT: 'hsl(var(--key) / <alpha-value>)',
					foreground: 'hsl(var(--key-fg) / <alpha-value>)'
				}
			},
			fontFamily: {
				display: ['"Baloo 2"', 'system-ui', 'sans-serif'],
				body: ['Nunito', 'system-ui', 'sans-serif']
			},
			fontSize: {
				caption: ['0.95rem', { lineHeight: '1.35', fontWeight: '700' }],
				body: ['1.15rem', { lineHeight: '1.45', fontWeight: '600' }],
				title: ['1.6rem', { lineHeight: '1.2', fontWeight: '700' }],
				headline: ['1.9rem', { lineHeight: '1.15', fontWeight: '800' }],
				display: ['3.25rem', { lineHeight: '1', fontWeight: '800' }],
				mega: ['4.5rem', { lineHeight: '1', fontWeight: '800' }]
			},
			borderRadius: {
				xs: '0.5rem',
				sm: '0.75rem',
				md: '1.25rem',
				lg: 'var(--radius)',
				xl: '2rem',
				'2xl': '2.5rem',
				'3xl': '3rem',
				pill: '999px',
				blob: '46% 54% 52% 48% / 50% 46% 54% 50%'
			},
			boxShadow: {
				xs: 'var(--shadow-xs)',
				sm: 'var(--shadow-sm)',
				md: 'var(--shadow-md)',
				card: 'var(--shadow-card)',
				focus: 'var(--shadow-focus)',
				'panel-1': '0 10px 0 0 hsl(var(--panel-1-shadow)), 0 24px 40px -20px hsl(var(--foreground) / 0.35)',
				'panel-2': '0 10px 0 0 hsl(var(--panel-2-shadow)), 0 24px 40px -20px hsl(var(--foreground) / 0.35)',
				'panel-3': '0 10px 0 0 hsl(var(--panel-3-shadow)), 0 24px 40px -20px hsl(var(--foreground) / 0.35)',
				'chunky-primary': '0 6px 0 0 hsl(var(--primary-shadow))',
				'chunky-sun': '0 6px 0 0 hsl(var(--option-sun-shadow))',
				'chunky-sky': '0 6px 0 0 hsl(var(--option-sky-shadow))',
				'chunky-berry': '0 6px 0 0 hsl(var(--option-berry-shadow))',
				'chunky-grape': '0 6px 0 0 hsl(var(--option-grape-shadow))',
				'chunky-success': '0 6px 0 0 hsl(var(--success-shadow))',
				'chunky-destructive': '0 6px 0 0 hsl(var(--destructive-shadow))',
				'chunky-key': '0 5px 0 0 hsl(var(--key-shadow))'
			},
			animation: {
				'pop-in': 'pop-in 0.28s cubic-bezier(0.34, 1.56, 0.64, 1) both',
				'bounce-soft': 'bounce-soft 2s ease-in-out infinite',
				float: 'float 6s ease-in-out infinite',
				'float-slow': 'float 9s ease-in-out infinite',
				wiggle: 'wiggle 0.6s ease-in-out infinite',
				'operator-pulse': 'operator-pulse 1.4s ease-in-out infinite',
				'shake-soft': 'shake-soft 0.42s ease-in-out both',
				'celebrate-spin': 'celebrate-spin 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) both',
				'celebrate-jump': 'celebrate-jump 0.7s cubic-bezier(0, 0, 0.2, 1)',
				'star-pop': 'star-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both',
				'pulse-glow': 'pulse-glow 1.6s ease-out infinite',
				'caret-blink': 'caret-blink 1s steps(1) infinite',
				'banner-in': 'banner-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) both',
				'rise-fade': 'rise-fade 0.9s ease-out both'
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
