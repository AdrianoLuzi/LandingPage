/** @type {import('tailwindcss').Config} */
export default {
  // Esto le dice a Tailwind en qué carpetas debe buscar las clases que escribas
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'kernel-dark': '#222121',
        'kernel-olive': '#3F4D32',
        'kernel-brown': '#5D4F35',
        'kernel-gold': '#BF9E75',
        // El blanco (#FFFFFF) ya viene por defecto en Tailwind como 'white'
      }
    }
  },
  plugins: [],
}