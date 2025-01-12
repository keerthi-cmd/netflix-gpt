# React + Vite

#Netflix GPT:

Step 1:Create react app: npm create vite@latest namaste-netflix-gpt
cd namaste-netflix-gpt
npm run dev

Learning: difference between Vite vs CRA:

CRA uses webpack as its build tool, whereas Vite comes with native ES modules.
CRA only supports React, whereas Vite supports multiple frameworks and libraries

Step 2: Install Tailwind : npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

open tailwind.config.js:
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

open index.css:
@tailwind base;
@tailwind components;
@tailwind utilities;

Step 3:





