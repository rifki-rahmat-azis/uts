export default {
    darkMode: 'class', // ⬅️ Ini WAJIB agar Tailwind aktifkan dark mode berbasis class
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
        },
        fontFamily: {
          sans: ["var(--font-geist-sans)", "sans-serif"],
          mono: ["var(--font-geist-mono)", "monospace"],
        },
      },
    },
    plugins: [],
  }
  