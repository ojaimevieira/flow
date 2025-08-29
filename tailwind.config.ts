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
				// Template system colors
				'template': {
					primary: 'hsl(var(--template-primary))',
					secondary: 'hsl(var(--template-secondary))',
					accent: 'hsl(var(--template-accent))',
					surface: 'hsl(var(--template-surface))',
					'surface-dark': 'hsl(var(--template-surface-dark))',
				},
				// Legacy gaming colors (mantém compatibilidade)
				'neon-pink': 'hsl(var(--template-primary))',
				'neon-purple': 'hsl(var(--template-secondary))',
				'dark-card': 'hsl(var(--template-surface))',
				'darker-bg': 'hsl(var(--template-surface-dark))',
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-purple': 'var(--gradient-purple)',
				'gradient-yellow-purple': 'var(--gradient-yellow-purple)',
				'gradient-pink-purple': 'var(--gradient-pink-purple)',
				'gradient-yellow': 'var(--gradient-yellow)',
			},
			boxShadow: {
				'neon': 'var(--shadow-neon)',
				'card-custom': 'var(--shadow-card)',
				'glow': 'var(--glow-template)',
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
				'glow-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(var(--template-primary) / 0.4)'
					},
					'50%': {
						boxShadow: '0 0 40px hsl(var(--template-primary) / 0.8)'
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
				'nebula-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(166 85% 57% / 0.3), 0 0 40px hsl(283 69% 59% / 0.2)'
					},
					'50%': {
						boxShadow: '0 0 30px hsl(166 85% 57% / 0.5), 0 0 60px hsl(283 69% 59% / 0.3)'
					}
				},
				'particle-float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)',
						opacity: '0.8'
					},
					'33%': {
						transform: 'translateY(-15px) rotate(120deg)',
						opacity: '1'
					},
					'66%': {
						transform: 'translateY(-5px) rotate(240deg)',
						opacity: '0.6'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'nebula-glow': 'nebula-glow 3s ease-in-out infinite',
				'particle-float': 'particle-float 8s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
