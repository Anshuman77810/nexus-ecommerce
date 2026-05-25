# Nexus - Modern React Ecommerce Website

A modern, responsive, and fully functional ecommerce frontend built using React and Vite. This project includes product pages, cart management, checkout flow, and Razorpay frontend payment integration.

This project is designed for learning, portfolio showcasing, freelancing, and ecommerce frontend development.

---

# Live Features

- Modern React + Vite setup
- Fully responsive ecommerce UI
- Product listing page
- Product detail page
- Add to cart functionality
- Cart quantity management
- Dynamic cart total calculation
- Checkout page
- Razorpay frontend payment integration
- React Router navigation
- Reusable component architecture
- Context API state management
- Organized folder structure
- Mobile responsive design
- Clean and modern UI

---

# Tech Stack

- React.js
- Vite
- JavaScript
- CSS
- React Router DOM
- Context API
- Razorpay Checkout

---

# Project Structure

```bash
src/
│
├── assets/
├── components/
├── context/
├── data/
├── pages/
│
├── App.jsx
├── main.jsx
```

---

# Installation Guide

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

Go to project directory:

```bash
cd project-name
```

Install all dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

# Environment Variables

Create a `.env` file in the root directory.

Example:

```env
VITE_RAZORPAY_KEY=YOUR_RAZORPAY_KEY
```

IMPORTANT:

- Never share your secret keys publicly
- Use your own Razorpay account credentials
- Do not upload `.env` files to GitHub

---

# Razorpay Integration Setup

This project uses Razorpay frontend payment integration.

Add Razorpay checkout script inside `index.html`:

```html
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
```

---

# Razorpay Test Card

Use this test card for Razorpay test mode:

```txt
Card Number: 4111 1111 1111 1111
Expiry Date: Any future date
CVV: Any 3 digits
OTP: 1234
```

---

# Build For Production

Create production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

# Deployment

Recommended deployment platforms:

- Vercel
- Netlify

---

# Customization

This project can easily be customized for clients.

You can change:

- Logo
- Brand name
- Colors
- Product data
- Homepage sections
- UI design
- Payment setup
- Product categories

---

# Recommended Improvements

Future upgrades that can make this project production-ready:

- Backend integration
- MongoDB database
- Authentication system
- Admin dashboard
- Order management
- Wishlist feature
- Search & filtering
- Payment verification
- User profiles
- API integration

---

# Important Note

This project currently includes frontend payment integration only.

Backend features like:

- Payment verification
- Database storage
- Authentication
- Admin dashboard
- Order tracking

are not included yet.

---

# Files To Remove Before Selling

Before creating ZIP or uploading publicly, remove:

```txt
node_modules
.env
.git
dist
```

---

# Final Project Setup

Final project should contain:

```txt
src/
public/
README.md
.env.example
package.json
vite.config.js
```

---

# Create ZIP File

After cleaning project:

1. Right click project folder
2. Compress to ZIP
3. Send clean ZIP to client

---

# Fiverr Package Suggestion

## Basic Package
- Simple ecommerce frontend

## Standard Package
- Ecommerce frontend with cart and payment integration

## Premium Package
- Customized ecommerce frontend with branding changes

---

# Author

Anshuman Roy

Frontend Developer

---

# License

This project is available for personal and commercial use.

---

# Support

If you use this project, make sure to add your own Razorpay credentials and customize branding according to your needs.