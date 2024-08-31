import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0 10px 15px rgba(25, 25, 25, 0.1)',
        blogShadow: '0px 10px 20px 0px rgba(221, 221, 221, 0.3)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInP: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
        bounceSlide: {
          '0%': { transform: 'translateX(-100%)' },
          '80%': { transform: 'translateX(0%)' },
          '90%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        slideIn: 'slideIn 2s ease-out 0.4s', 
        slideInP: 'slideIn 2s ease-out 0.7s', 
        heartbeat: 'heartbeat 1.5s ease-in-out infinite',
        bounceSlide: 'bounceSlide 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards',
      
      },
    },
  },
  plugins: [],
};
export default config;
