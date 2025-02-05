# **EquiSports: Sports Equipment Store**

EquiSports is a responsive e-commerce platform for purchasing sports equipment. It allows users to browse, review, and manage sports accessories efficiently with secure authentication.

## 🚀 Live Site URL
[Visit EquiSports](https://sports-express-961ff.web.app)

---

<img src="https://i.ibb.co.com/zWD6JHCd/Fire-Shot-Capture-033-Home-Sport-Equip-sports-express-961ff-web-app.png" alt="EquiSports Homepage" width="100%" height="1000">

---

## 🛠️ Technologies Used
- **React**: For building the user interface.
- **React Router**: For dynamic and private routing.
- **Firebase**: For authentication and hosting.
- **MongoDB**: For data storage.
- **Tailwind CSS**: For responsive styling.

---

## ✨ Features
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **User Authentication**: Supports Email/Password login and Google login with error and success notifications.
- **Product Management**: Add, update, delete, and view details of sports equipment, with a personalized list for logged-in users.
- **Sorting Functionality**: Products can be sorted by price (ascending/descending).
- **Dark/Light Mode**: Toggle between dark and light themes on the homepage.
---

## 🔧 Environment Setup

### **Step 1: Clone the Client-Side Repository**
1. Clone the client-side repository:
   ```bash
   git clone https://github.com/programming-hero-web-course2/b10-a10-client-side-ashrafulhossain1
   ```

2. Navigate to the client directory:
   ```bash
   cd b10-a10-client-side-ashrafulhossain1
   ```

3. Create a `.env` file in the root of the client directory and add the following Firebase credentials:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
   ```

---

### **Step 2: Install Client-Side Dependencies**
1. Install the required dependencies:
   ```bash
   npm install
   ```

2. Start the client development server:
   ```bash
   npm start
   ```

---

### **Step 3: Clone the Server-Side Repository**
1. Clone the server-side repository:
   ```bash
   git clone https://github.com/programming-hero-web-course2/b10-a10-server-side-ashrafulhossain1
   ```

2. Navigate to the server directory:
   ```bash
   cd b10-a10-server-side-ashrafulhossain1
   ```

3. Create a `.env` file in the root of the server directory and add the following variables:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

---

### **Step 4: Install Server-Side Dependencies**
1. Install the required dependencies:
   ```bash
   npm install
   ```

2. Start the server development server:
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

## 🌐 API Endpoints

Here are the key API endpoints provided by the server:

### **Users**
- **GET `/users`**: Fetch all users.
- **GET `/users/:email`**: Fetch a specific user by email.
- **POST `/users`**: Add a new user.

### **Equipments**
- **GET `/allEquipments`**: Fetch all sports equipment.
- **GET `/homeEquip`**: Fetch limited equipment for the homepage.
- **GET `/myEquip?email=<user_email>`**: Fetch equipment added by a specific user.
- **GET `/allEquipments/:id`**: Fetch details of a specific equipment by ID.
- **POST `/addEquips`**: Add new sports equipment.
- **PUT `/update/:id`**: Update an existing equipment by ID.
- **DELETE `/myEquip/:id`**: Delete an equipment by ID.

---

## 🧪 Testing

To ensure everything is working correctly, you can test the following features:

- **Authentication**: Try logging in using Google or Email/Password and verify that user data persists across sessions.
- **Product Management**: Add a new product through the dashboard and check if it appears on the homepage. Update or delete products to confirm functionality.
- **Sorting**: Sort products by price (ascending/descending) and ensure they are displayed in the correct order.
- **Dark/Light Mode**: Toggle between themes and confirm that the UI updates accordingly.
- **Responsive Design**: Test the website on various screen sizes (mobile, tablet, desktop) to ensure proper layout adjustments.
