/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // class 기반 다크모드 설정
  theme: {
    extend: {
      colors: {
        'primary-light': '#60a5fa', // blue-400
        'primary-dark': '#6d28d9', // purple-700
        'secondary-light': '#a78bfa', // purple-400
        'secondary-dark': '#8b5cf6', // violet-500
        'background-light': '#f9fafb', // gray-50
        'background-dark': '#1f2937', // gray-800
        'text-light': '#111827', // gray-900
        'text-dark': '#f9fafb', // gray-50
      }
    },
  },
  plugins: [],
};
