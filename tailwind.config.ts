import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Responsive container padding using @layer
      spacing: {
        "container-mobile": "1rem",    // 16px - Mobile (320px+)
        "container-tablet": "1.5rem",  // 24px - Tablet (768px+)
        "container-laptop": "2rem",    // 32px - Laptop (1024px+)
        "container-desktop": "3rem",   // 48px - Desktop (1280px+)
      },
    },
  },
  plugins: [],
} satisfies Config;
