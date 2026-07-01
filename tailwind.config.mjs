/** @type {import('tailwindcss').Config} */
export default {
  // Esto le dice a Tailwind en qué carpetas debe buscar las clases que escribas
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'kernel-dark': '#222121',
        'kernel-blue': '#4E6D93',
        'kernel-green': '#C8DDA4',
        // El blanco (#FFFFFF) ya viene por defecto en Tailwind como 'white'
      }
    }
  },
  plugins: [],
}