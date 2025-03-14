# Bakestle - Bakery E-commerce Website

Bakestle is a modern bakery e-commerce website built using **React** and **Firebase**. It provides users with an intuitive interface to browse, add items to their cart, and make purchases.

## Features

- 🛒 **Cart Management** - Implemented using React Context API.
- 🔐 **Authentication** - Firebase Authentication for Signup, Login, and Logout.
- 👤 **User Display** - Navbar shows the logged-in user's name.
- 📦 **Product Catalog** - Browse delicious bakery products.
- 📍 **Navigation** - Uses **TanStack Router** for seamless routing.
- 🚀 **Optimized Performance** - Fast and responsive UI.

## Tech Stack

- **Frontend:** React, Tailwind CSS
- **Routing:** TanStack Router
- **State Management:** React Context API
- **Authentication:** Firebase Auth
- **Hosting:** Firebase Hosting (optional)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/bakestle.git
   cd bakestle
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up Firebase:
   - Create a Firebase project.
   - Enable **Email/Password Authentication**.
   - Get your Firebase config and add it to a `.env` file:
     ```env
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Folder Structure

```
Bakestle/
│── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components (Home, Login, Cart, etc.)
│   ├── context/        # React Context for cart management
│   ├── firebase/       # Firebase configuration & authentication
│   ├── hooks/          # Custom hooks
│   ├── assets/         # Images and static files
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│── public/             # Static assets
│── .env                # Environment variables
│── package.json        # Project dependencies
│── README.md           # Documentation
```

## Deployment

To deploy the project using Firebase Hosting:

1. Install Firebase CLI:
   ```sh
   npm install -g firebase-tools
   ```
2. Login to Firebase:
   ```sh
   firebase login
   ```
3. Initialize Firebase:
   ```sh
   firebase init
   ```
4. Deploy:
   ```sh
   firebase deploy
   ```

## Contributing

Contributions are welcome! Feel free to submit pull requests.

## License

This project is licensed under the MIT License.

