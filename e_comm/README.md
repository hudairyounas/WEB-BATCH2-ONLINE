# 🚀 AI Prompt: Build a Simple E-Commerce Website using React + Firebase

## Objective

You are an expert React and Firebase developer.

Build a **simple, modern, responsive E-Commerce website** that can be generated quickly with AI. This project is for a classroom demonstration to show how AI can build a complete React application, so focus on clean architecture, reusable components, and essential features only.

Do **not** build an enterprise-level application. Keep the code simple, readable, and beginner-friendly while following modern React best practices.

---

# Tech Stack

## Frontend

- React 19
- Vite
- React Router DOM
- Tailwind CSS
- DaisyUI
- React Icons
- Axios
- React Hot Toast

---

## Backend & Services

Use **Firebase** for:

- Firebase Authentication
- Cloud Firestore Database

Use **Cloudinary** for:

- Product Images
- Banner Images
- Category Images
- Any uploaded assets

---

# Project Structure

Organize the project with a clean folder structure.

```text
src/
│
├── assets/
├── components/
│   ├── common/
│   ├── layout/
│   └── products/
├── pages/
├── layouts/
├── routes/
├── firebase/
├── context/
├── hooks/
├── services/
├── utils/
└── App.jsx
```

Keep components reusable and easy to understand.

---

# UI Design

Create a clean, modern interface inspired by Shopify and Apple.

Requirements:

- Minimal UI
- Rounded corners
- Soft shadows
- Beautiful spacing
- Responsive layout
- Smooth hover effects
- Professional color palette

---

# Pages

## Home

Include:

- Hero Banner
- Featured Products
- Categories
- Why Choose Us section
- Footer

---

## Shop

Display all products in a responsive grid.

Each card should include:

- Product Image
- Product Name
- Price
- Category
- View Details Button

---

## Product Details

Display:

- Large Product Image
- Product Name
- Description
- Price
- Category
- Stock Status
- Add to Cart Button

---

## Cart

Show:

- Added Products
- Quantity Controls
- Remove Product
- Total Price

---

## Login

Allow login using:

- Email & Password
- Google Authentication

---

## Register

Allow new users to create an account.

---

# Navbar

Include:

- Logo
- Home
- Shop
- Cart
- Login/Profile

Responsive for mobile devices.

---

# Firebase Authentication

Implement:

- Register
- Login
- Logout
- Protected Routes

---

# Firestore Database

Store products inside Firestore.

Each product document should contain:

- name
- description
- price
- category
- image
- stock

---

# Cloudinary

Store all images in Cloudinary.

Use Cloudinary image URLs inside Firestore documents.

Images include:

- Product Images
- Hero Banner
- Category Images

---

# Core Features

Implement only these features:

✅ User Registration

✅ User Login

✅ Google Login

✅ Protected Routes

✅ Display Products

✅ Product Details

✅ Add to Cart

✅ Remove From Cart

✅ Responsive Design

---

# Do NOT Include

To keep the project small and suitable for a live AI demo, do **not** implement:

- Payment Gateway
- Admin Dashboard
- User Dashboard
- Wishlist
- Order Tracking
- Coupons
- Product Reviews
- Ratings
- Inventory Management
- Product Search
- Filters
- Sorting
- Analytics
- Charts
- Notifications
- Dark Mode
- SEO
- Infinite Scroll
- Pagination

---

# Reusable Components

Create reusable components for:

- Navbar
- Footer
- Hero Banner
- Product Card
- Button
- Loading Spinner
- Empty State

---

# Responsive Design

Support:

- Mobile
- Tablet
- Desktop

---

# Coding Guidelines

- Use Functional Components.
- Use React Hooks.
- Write clean and readable code.
- Keep components small.
- Avoid duplicate code.
- Use Context API for cart management.
- Store Firebase configuration in environment variables.
- Handle loading and error states gracefully.
- Follow good folder organization.

---

# Expected Outcome

Generate a clean, responsive mini E-Commerce website that demonstrates:

- React component architecture
- React Router
- Firebase Authentication
- Cloud Firestore integration
- Cloudinary image hosting
- Shopping Cart functionality
- Modern responsive UI

The project should be simple enough for AI to generate quickly during a classroom presentation while still looking like a complete and professional React application.