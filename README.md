# Nexus - Modern React Ecommerce Website

# Live Demo

[Live Website](https://nexus-ecommerce-brown.vercel.app/)

---

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
git clone https://github.com/YOUR_USERNAME/nexus-ecommerce.git
```

Go to project directory:

```bash
cd nexus-ecommerce
```

Install dependencies:

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

Important:
- Never share secret keys publicly
- Use your own Razorpay credentials
- Do not upload `.env` files to GitHub

---

# Razorpay Integration Setup

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

You can easily customize:
- Brand name
- Logo
- Product data
- Colors
- Homepage sections
- Categories
- UI design
- Payment integration

---

# Future Improvements

Possible upgrades for production-ready ecommerce:
- Backend integration
- MongoDB database
- Authentication system
- Admin dashboard
- Wishlist feature
- Search and filtering
- Payment verification
- User profiles
- Order management

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

# Author

Anshuman Roy

Frontend Developer

---

# License

This project is available for personal and commercial use.

---

# Support

If you use this project, make sure to add your own Razorpay credentials and customize branding according to your needs.