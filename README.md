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

Step 3: Create github repository and after that follow the commands shown by github

Step 4: Install ES7+ React/Redux/React-Native snippets

Step 5: Install React router => npm install -d react-router

Step 6: Adding authentication using firebase
create project
later <> click on this web
follow the steps
npm install firebase
npm install -g firebase-tools
firebase login --reauth => if any problem occurs
firebase init
npm run build
firebase deploy

for vite app deployment there might be some steps differ please check
