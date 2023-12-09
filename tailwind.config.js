/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',

      'white': '#ffffff',
      'black' : '#000000',
      'mustard' : '#816b51',
      'gray': '#5a728c'
    },
    fontSize:{
      '2xs': ['0.25rem', {
        lineHeight: '0.5rem',
        letterSpacing: '-0.01em',
       
      }],
      'xs': ['0.75rem', {
        lineHeight: '1rem',
        letterSpacing: '-0.01em',
       
      }],
      'xl': ['1.1rem', {
        lineHeight: '1.25rem',
        letterSpacing: '-0.01em',
       
      }],
    
    
      '2xl': ['1.5rem', {
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
       
      }],
      '2xl': ['1.5rem', {
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
       
      }],
      '3xl': ['2.5rem', {
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
       
      }],
      '4xl': ['3.5rem', {
        lineHeight: '2.5rem',
        letterSpacing: '-0.01em',
       
      }],
      '5xl': ['4rem', {
        lineHeight: '4rem',
        letterSpacing: '-0.01em',
        
      
      }],

      '6xl': ['5rem', {
        lineHeight: '5rem',
        letterSpacing: '-0.01em',
        
      }],
      '9xl': ['8rem', {
        lineHeight: '8rem',
        letterSpacing: '-0.001em',
        
      }],
      '12xl': ['12rem', {
        lineHeight: '11rem',
        letterSpacing: '-0.01em',
        
      }],
    },
    extend: {},
  },
  plugins: [],
}

