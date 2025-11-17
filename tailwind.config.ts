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
        "container-tablet": "60px",  // 24px - Tablet (768px+)
        "container-laptop": "80px",    // 32px - Laptop (1024px+)
        "container-desktop": "150px",   // 48px - Desktop (1280px+)
      },
    },
  },
  plugins: [],
} satisfies Config;
