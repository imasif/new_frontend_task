module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'topbar-start': '#FFC004',
        'topbar-end': '#10CBE0',
      },
      fontFamily: {
        'figtree': ['var(--font-figtree)', 'sans-serif'],
        'urbanist': ['var(--font-urbanist)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}