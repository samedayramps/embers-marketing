import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config = {
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
  		keyframes: {
  			'gradient-shift': {
  				'0%, 100%': {
  					'background-size': '200% 200%',
  					'background-position': 'left center'
  				},
  				'50%': {
  					'background-size': '200% 200%',
  					'background-position': 'right center'
  				}
  			},
  			'glow': {
  				'0%': {
  					transform: 'scale(1)',
  					opacity: '0.6'
  				},
  				'20%': {
  					transform: 'scale(1.1)',
  					opacity: '0.8'
  				},
  				'40%': {
  					transform: 'scale(1.15)',
  					opacity: '0.9'
  				},
  				'60%': {
  					transform: 'scale(1.05)',
  					opacity: '0.85'
  				},
  				'80%': {
  					transform: 'scale(1.1)',
  					opacity: '0.7'
  				},
  				'100%': {
  					transform: 'scale(1)',
  					opacity: '0.6'
  				}
  			},
  			'flicker': {
  				'0%': {
  					opacity: '0.5'
  				},
  				'10%': {
  					opacity: '0.7'
  				},
  				'20%': {
  					opacity: '0.4'
  				},
  				'30%': {
  					opacity: '0.8'
  				},
  				'40%': {
  					opacity: '0.5'
  				},
  				'50%': {
  					opacity: '0.9'
  				},
  				'60%': {
  					opacity: '0.6'
  				},
  				'70%': {
  					opacity: '0.8'
  				},
  				'80%': {
  					opacity: '0.5'
  				},
  				'90%': {
  					opacity: '0.7'
  				},
  				'100%': {
  					opacity: '0.5'
  				}
  			},
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
  			}
  		},
  		animation: {
  			'gradient-shift': 'gradient-shift 4s ease infinite',
  			'glow': 'glow 3s ease-in-out infinite',
  			'flicker': 'flicker 4s ease-in-out infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
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
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [animate],
} satisfies Config;

export default config;
