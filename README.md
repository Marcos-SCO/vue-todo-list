✅ 1. Create the Laravel API
🧱 Step 1: Create Project & Configure SQLite

composer create-project laravel/laravel todo-api


📦 Step 2: Create Model, Migration, Controller
php artisan make:model Todo -m
php artisan make:controller Api/TodoController --api


✅ PART 2 – Vue 3 SPA (Frontend)

npm create vite@latest todo-frontend -- --template vue

🔹 Step 2: Install Tailwind, Axios, Pinia

npm install -D tailwindcss@latest @tailwindcss/postcss autoprefixer@latest

npm install pinia axios

# Libs

vue3-toastify
- npm install vue3-toastify

fontawesome
- npm install @fortawesome/fontawesome-free

githubpages
- npm install --save-dev gh-pages

npx gh-pages -d dist

# laravel cors file
- php artisan config:publish cors