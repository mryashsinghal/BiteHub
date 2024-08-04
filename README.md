# BiteHub

BiteHub is a modern, user-friendly food delivery application designed to provide a seamless and interactive experience for users to order their favorite meals. The application is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and features an interactive menu, a detailed cart page, Stripe payment integration, and an admin panel for managing items and orders.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

### User Features
- **Interactive Menu**: Browse and select items from a visually appealing and interactive menu.
- **Cart Summary**: View a detailed summary of selected items in the cart before proceeding to checkout.
- **Secure Payments**: Make secure payments using Stripe integration.
- **Order Tracking**: Track the status of orders in real-time.

### Admin Features
- **Manage Items**: Add, remove, and update menu items.
- **User Management**: Track user activities and order histories.
- **Delivery Status**: Update and manage the delivery status of orders.

## Tech Stack

- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Gateway**: Stripe

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/mryashsinghal/BiteHub.git
   cd BiteHub
   ```

2. **Install dependencies for both frontend and backend:**
   ```sh
   # For backend
   cd backend
   npm install
   
   # For frontend
   cd frontend
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the `backend` directory with the following variables:
     ```env
     MONGO_URI=your_mongodb_connection_string
     STRIPE_SECRET_KEY=your_stripe_secret_key
     JWT_SECRET=your_jwt_secret
     ```

4. **Run the application:**
   ```sh
   # Start backend
   cd backend
   npm start
   
   # Start frontend
   cd frontend
   npm start
   ```

5. **Access the application:**
   Open your browser and navigate to `http://localhost:3000` for the front end and `http://localhost:5000` for the back end.

## Usage

### User Interface
1. **Browse Menu**: Navigate through the interactive menu and add desired items to the cart.
2. **View Cart**: Review your selected items in the cart summary.
3. **Checkout**: Proceed to payment and complete your order using Stripe.
4. **Track Order**: Monitor the status of your order in real time.

### Admin Interface
1. **Login**: Access the admin panel using your credentials.
2. **Manage Items**: Add, remove, or update items in the menu.
3. **Track Users**: View user activities and order histories.
4. **Update Delivery Status**: Change the delivery status of orders to keep users informed.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

---
