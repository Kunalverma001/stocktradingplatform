📈 Stock Trading Platform

A full-stack stock trading platform inspired by Zerodha, built using React, Node.js, Express, and MongoDB.
The project focuses on real-world architecture, authentication, automation, and clean UX.

✨ Features

🔐 JWT-based authentication (signup & login)

📊 Trading dashboard with holdings, positions, orders & funds

💱 Buy & sell stocks from a watchlist

⚠️ Logout warning for data retention policy

🧹 Automatic cleanup of inactive user data after 5 days

📧 Reminder email sent on 4th day of inactivity

🌐 Multi-app setup (Main site + Dashboard + Backend)



🏗️ Project Structure
stocktradingplatform/

├── frontend/        # Main website

├── tradingwindow/   # Trading dashboard

├── backend/         # REST API & cron jobs


🛠️ Tech Stack

Frontend: React, Vite, Axios

Backend: Node.js, Express, MongoDB

Auth & Jobs: JWT, Node-cron, Nodemailer


🔐 Environment Setup

Each app uses its own .env file (not committed).

Example:

VITE_BACKEND_URL= http://localhost:3002

VITE_DASHBOARD_URL= http://localhost:5174


▶️ Run Locally
git clone https://github.com/Kunalverma001/stocktradingplatform.git
cd stocktradingplatform

# Backend
cd backend && npm install && npm run dev

# Frontend
cd frontend && npm install && npm run dev

# Dashboard
cd tradingwindow && npm install && npm run dev


🧠 Highlights

Designed with production practices (env-based URLs, cleanup jobs)

Handles user inactivity & data lifecycle

Clean separation of concerns across apps

Fully deployable without code changes



👤 Author

Kunal Verma
GitHub: https://github.com/Kunalverma001
