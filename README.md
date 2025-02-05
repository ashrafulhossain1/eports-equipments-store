Got it! Below is the updated `README.md` file for your **EquiSports** project, including the **Dependencies** and **Dev Dependencies** sections. This will make your documentation more comprehensive and developer-friendly.

---

# **EquiSports: Sports Equipment Store**

EquiSports is a responsive e-commerce platform for purchasing sports equipment. It allows users to browse, review, and manage sports accessories efficiently with secure authentication.

## 🚀 Live Site URL
[Visit EquiSports](https://sports-express-961ff.web.app)

---

## 🛠️ Technologies Used
- **React**: For building the user interface.
- **React Router**: For dynamic and private routing.
- **Firebase**: For authentication and hosting.
- **MongoDB**: For data storage.
- **Tailwind CSS**: For responsive styling.
- **React Tooltip** and **React Awesome Reveal**: For interactive animations.

---

## ✨ Features
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **User Authentication**: Supports Email/Password login and Google login with error and success notifications.
- **Product Management**: Add, update, delete, and view details of sports equipment, with a personalized list for logged-in users.
- **Sorting Functionality**: Products can be sorted by price (ascending/descending).
- **Dark/Light Mode**: Toggle between dark and light themes on the homepage.
- **Interactive Animations**: Smooth animations implemented with React Tooltip and React Awesome Reveal.
- **404 Page**: Handles unmatched routes with a custom 404 error page.

---

## 🔧 Environment Setup

1. Clone the repositories:
   - Client: `https://github.com/programming-hero-web-course2/b10-a10-client-side-ashrafulhossain1`
   - Server: `https://github.com/programming-hero-web-course2/b10-a10-server-side-ashrafulhossain1`

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root of both the client and server directories.
   - Add the following variables (replace with your own credentials):

     **Client-side (.env):**
     ```env
     REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
     ```

     **Server-side (.env):**
     ```env
     PORT=5000
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     ```

4. Start the development servers:
   - For the client:
     ```bash
     npm start
     ```
   - For the server:
     ```bash
     npm run dev
     ```

---

## 📦 Dependencies & Dev Dependencies

### **Client-Side (React App)**

#### **Dependencies**
These are the main libraries used to build the application:

```json
"dependencies": {
  "firebase": "^9.23.0",                  // Firebase for authentication and hosting
  "react": "^18.2.0",                     // React library for building the UI
  "react-dom": "^18.2.0",                 // React DOM for rendering components
  "react-router-dom": "^6.14.2",          // React Router for dynamic routing
  "react-toastify": "^9.1.3",             // For displaying notifications (e.g., success/error messages)
  "react-tooltip": "^5.12.0",             // Tooltips for interactive UI elements
  "react-awesome-reveal": "^3.8.0",       // Animations for smooth transitions
  "tailwindcss": "^3.3.3",                // Utility-first CSS framework for styling
  "axios": "^1.5.1",                      // HTTP client for API requests
  "dotenv": "^16.3.1"                     // Environment variable management
}
```

#### **Dev Dependencies**
These are tools used during development:

```json
"devDependencies": {
  "autoprefixer": "^10.4.14",             // PostCSS plugin for adding vendor prefixes
  "postcss": "^8.4.26",                   // Tool for transforming CSS
  "tailwindcss": "^3.3.3",                // Tailwind CSS for utility-based styling
  "eslint": "^8.47.0",                    // Linter for identifying and fixing code issues
  "eslint-config-prettier": "^8.10.0",    // ESLint configuration for Prettier integration
  "prettier": "^3.0.3"                    // Code formatter for consistent styling
}
```

---

### **Server-Side (Node.js + Express)**

#### **Dependencies**
These are the main libraries used for the backend:

```json
"dependencies": {
  "cors": "^2.8.5",                       // Middleware to enable CORS
  "dotenv": "^16.3.1",                    // Environment variable management
  "express": "^4.18.2",                   // Web framework for Node.js
  "jsonwebtoken": "^9.0.0",               // For generating and verifying JWT tokens
  "mongoose": "^7.5.0",                   // MongoDB ODM for database interactions
  "nodemon": "^3.0.1"                     // Automatically restarts the server on code changes
}
```

#### **Dev Dependencies**
These are tools used during development:

```json
"devDependencies": {
  "eslint": "^8.47.0",                    // Linter for identifying and fixing code issues
  "eslint-config-airbnb-base": "^15.0.0", // ESLint configuration for Airbnb style guide
  "eslint-plugin-import": "^2.28.1",      // ESLint plugin for import/export rules
  "prettier": "^3.0.3"                    // Code formatter for consistent styling
}
```

---

## 📚 Project Structure

### Client-Side Structure:
```
src/
├── components/         # Reusable components like Navbar, Footer, etc.
├── pages/              # Different pages like Home, Login, Dashboard, etc.
├── routes/             # Route configurations for React Router.
├── hooks/              # Custom hooks for API calls and state management.
├── context/            # Context providers for global state (e.g., AuthContext).
├── assets/             # Static assets such as images and icons.
├── styles/             # Global CSS or Tailwind configuration files.
└── App.js              # Main application component.
```

### Server-Side Structure:
```
src/
├── models/             # Mongoose models for MongoDB collections.
├── routes/             # API routes for handling requests (e.g., /api/products).
├── middlewares/        # Middleware functions like authentication checks.
├── controllers/        # Logic for handling different API endpoints.
├── utils/              # Utility functions like JWT token generation.
└── server.js           # Entry point for the Express server.
```

---

## 🧪 Testing

To ensure everything is working correctly, you can test the following features:

- **Authentication**: Try logging in using Google or Email/Password and verify that user data persists across sessions.
- **Product Management**: Add a new product through the dashboard and check if it appears on the homepage. Update or delete products to confirm functionality.
- **Sorting**: Sort products by price (ascending/descending) and ensure they are displayed in the correct order.
- **Dark/Light Mode**: Toggle between themes and confirm that the UI updates accordingly.
- **Responsive Design**: Test the website on various screen sizes (mobile, tablet, desktop) to ensure proper layout adjustments.

---

## 🤝 Contribution Guidelines

We welcome contributions! Here’s how you can contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request detailing your changes.

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/programming-hero-web-course2/b10-a10-client-side-ashrafulhossain1/blob/main/LICENSE) file for details.

---

## 🙏 Acknowledgments

Special thanks to **Programming Hero** for providing the course materials and guidance throughout the development of this project. Also, thanks to all contributors who helped improve the platform.

---

Feel free to explore the live site and provide feedback!  
Happy coding! 🚀

---

Let me know if you need further assistance! 😊
