
import type { Config } from "tailwindcss";

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
			fontFamily: {
				'pixel': ['VT323', 'monospace'],
				'sans': ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// EXPLOSIVE NEON PIXEL COLORS
				neon: {
					blue: '#00f5ff',
					green: '#39ff14',
					pink: '#ff1493',
					purple: '#bf00ff',
					yellow: '#ffff00',
					orange: '#ff6600',
					cyan: '#00ffff',
					lime: '#ccff00',
				},
				dark: {
					bg: '#0a0a0a',
					card: '#1a1a1a',
					border: '#2a2a2a',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pixel-glow': {
					'0%, 100%': {
						boxShadow: '0 0 10px currentColor',
						filter: 'brightness(1)'
					},
					'50%': {
						boxShadow: '0 0 30px currentColor, 0 0 50px currentColor',
						filter: 'brightness(1.2)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'chaos-shake': {
					'0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
					'10%': { transform: 'translateX(-2px) rotate(1deg)' },
					'20%': { transform: 'translateX(2px) rotate(-1deg)' },
					'30%': { transform: 'translateX(-2px) rotate(1deg)' },
					'40%': { transform: 'translateX(2px) rotate(-1deg)' },
					'50%': { transform: 'translateX(-2px) rotate(1deg)' },
					'60%': { transform: 'translateX(2px) rotate(-1deg)' },
					'70%': { transform: 'translateX(-2px) rotate(1deg)' },
					'80%': { transform: 'translateX(2px) rotate(-1deg)' },
					'90%': { transform: 'translateX(-2px) rotate(1deg)' }
				},
				'rainbow-flow': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pixel-glow': 'pixel-glow 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'chaos-shake': 'chaos-shake 3s ease-in-out infinite',
				'rainbow-flow': 'rainbow-flow 3s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
