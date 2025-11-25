# CRYPTO
A CRYPTOCURRENCY TRACKING SITE
# 🚀 Crypto Price Dashboard (React + Vite)

A clean and modern cryptocurrency dashboard built using **React**, **Vite**, and the **CoinGecko API**.  
This project displays real-time cryptocurrency data with a beautiful glassmorphism UI design.

---

## ✨ Features

- 🪙 Live cryptocurrency market data  
- 🔍 Search any coin instantly  
- 📊 Displays rank, price, market cap, volume, and supply  
- 💎 Modern glassmorphism UI  
- ⚡ Built with Vite (super fast dev environment)  
- 📱 Responsive layout  
- 🌐 INR currency support  

---

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React** | Frontend framework |
| **Vite** | Build tool + dev server |
| **Axios** | Fetching API data |
| **CoinGecko API** | Crypto market prices |
| **CSS (Glass UI)** | Styling |

---

## 📦 Installation & Setup

Follow these steps to run this project locally:

### 1️⃣ Clone the repository
bash
git clone https://github.com/ABEL3804/crypto-app.git
cd crypto-app

2️⃣ Install dependencies
npm install

3️⃣ Start the development server
npm run dev


Your app will start at:

http://localhost:5173/

🔗 API Used

The project uses the free CoinGecko API:

https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr


No API key required!

💡 How It Works

The app fetches crypto data once using useEffect().

Data is stored in a state variable using useState().

The search bar filters coins in real-time.

Table dynamically renders all relevant market information.

🎨 UI Preview

Gradient heading

Glass-effect table rows

Smooth hover animations

Clean and minimal layout

(You can add screenshots here!)

📁 Project Structure
src/
 ├── App.jsx
 ├── App.css
 ├── main.jsx
 └── assets/

🚀 Future Enhancements (Optional)

Dark mode toggle 🌙

Sorting (price high → low)

Sparkline mini charts 📈

Pagination

Crypto detail page
