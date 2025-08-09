# 🦞 Lobsterplus Ghana Limited — Product Management System  

![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=flat-square)  
![Frontend](https://img.shields.io/badge/Frontend-React-blue?style=flat-square&logo=react)  
![Backend](https://img.shields.io/badge/Backend-Node.js-green?style=flat-square&logo=node.js)  
![Database](https://img.shields.io/badge/Database-MongoDB-brightgreen?style=flat-square&logo=mongodb)  
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)  

> A **role-based product management system** for **Lobsterplus Ghana Limited**, built to manage products, categories, and staff with precision and efficiency.  

---

## 🚀 Live Demo  
🔗 **Frontend:** [View on Vercel](https://your-frontend-url.com)  
🔗 **Backend API:** [View on Render](https://your-backend-url.com)  

---

## ✨ Features  

### 📦 Product Management  
- View all products with details: **Name, Description, Wholesale Price, Retail Price, Category**  
- Edit and delete products with confirmation dialogs  
- Add products quickly using modal forms  

### 🗂 Category Management  
- Create, edit, and manage product categories for better organization  

### 👥 Staff Management  
- Add staff accounts with **username, password, email, and role**  
- Roles:  
  - **Admin** → Full access  
  - **Sales** → Limited dashboard access  

### 🔐 Role-Based Access  
- Different dashboards for admins and sales staff  
- JWT-secured routes for API protection  

---

## 📸 Screenshots  

**Dashboard View**  
![Dashboard](assets/screenshots/dashboard.png)  

**Products Page**  
![Products](assets/screenshots/products.png)  

**Add Product Modal**  
![Add Product](assets/screenshots/add-product.png)  

---

## 🛠 Tech Stack  

| Layer      | Technology |
|------------|------------|
| **Frontend** | React, Tailwind CSS, React Icons |
| **Backend** | Node.js, Express, JWT |
| **Database** | MongoDB + Mongoose |
| **Deployment** | Vercel (Frontend), Render (Backend) |

---

## ⚙️ Installation  

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
cd YOUR-REPO

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
