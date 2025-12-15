📈 Stock Trading Platform (Full-Stack)

A full-stack stock trading platform inspired by Zerodha, built with React, Node.js, Express, and MongoDB, featuring authentication, trading workflows, automated cleanup jobs, and email reminders.

This project demonstrates real-world architecture, production-ready practices, and end-to-end ownership.

🔥 Features
👤 Authentication

User signup & login with JWT

Secure password hashing

Session persistence using tokens

📊 Trading Dashboard

Buy & sell stocks from watchlist

Holdings, positions, orders & funds tracking

Real-time UI updates

Safe handling of empty states

🧹 Automated Inactivity Cleanup

User trading data is automatically deleted after 5 days of inactivity

Includes:
Holdings
Positions
Orders
Funds

Cleanup runs via cron job

📧 Day-4 Reminder Email

Reminder email sent on 4th day of inactivity
Warns user before data deletion
Email sent only once (anti-spam logic)
Reminder resets on next login

⚠️ Logout Warning

User warned at logout about 5-day deletion policy
Professional confirmation modal

🌐 Multi-App Architecture
Main Website (marketing / landing)
Trading Dashboard
Backend API
Connected via environment-based URLs

🏗️ Project Architecture
stocktradingplatform/
├── frontend/        # Main website (React + Vite)
├── tradingwindow/   # Trading dashboard (React + Vite)
├── backend/         # Node.js + Express API
└── README.md


Each app is independently configurable using environment variables.

🛠️ Tech Stack
Frontend

React
Vite
Axios
CSS
Backend
Node.js
Express
MongoDB (Mongoose)
JWT Authentication
Node-cron
Nodemailer

Dev & Tooling
Git & GitHub
Environment variables
REST APIs

🔐 Environment Variables

Each app has its own .env file (not committed).

Backend (/backend/.env)
PORT=3002
MONGO_URL=your_mongo_url
JWT_SECRET=your_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_app_password
MAIN_APP_URL
DASHBOARD_URL

Frontend (/frontend/.env)
VITE_BACKEND_URL
VITE_DASHBOARD_URL

Dashboard (/tradingwindow/.env)
VITE_BACKEND_URL
VITE_MAIN_APP_URL
