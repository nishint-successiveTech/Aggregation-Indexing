
# 🧮 Aggregation & Indexing with MongoDB

This project demonstrates how to use **MongoDB Aggregation Framework** and **Indexing** techniques using a Node.js + TypeScript backend.

## 📦 Tech Stack

- Node.js
- TypeScript
- Express.js
- MongoDB (Mongoose)
- Dotenv

---

## 🚀 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/nishint-successiveTech/Aggregation-Indexing.git
   cd Aggregation-Indexing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**

   Create a `.env` file in the root directory:

   ```
   PORT=5000
   MONGO_URL=mongodb://localhost:27017/NishintDB
   ```

4. **Run the project**
   ```bash
   npm run dev
   ```

---

## 📊 Aggregation Use Cases

The following MongoDB aggregation queries are implemented:

1. **Total Revenue**
2. **Total Orders by Status** (`Pending`, `Shipped`, `Delivered`)
3. **Top 3 Customers by Spend**
4. **Average Order Amount per Customer**
5. **Products Sold More Than 10 Times**
6. **Monthly Revenue (Last 6 Months)**
7. **Customers with More Than 2 Orders**
8. **Extract Product Names (Unwind + Project)**
9. **Revenue from Delivered Orders**
10. **Total Quantity and Revenue Per Product**

---

## 📁 Project Structure

```
Aggregation-and-Indexing/
├── node_modules/                # Node.js dependencies
├── src/
│   ├── config/                  # Configuration files (e.g., DB & App config)
│   │   ├── AppConfig.ts
│   │   └── Database.ts
│   ├── controllers/             # Controller layer (API logic)
│   │   └── AggregationController.ts
│   ├── models/                  # Mongoose models
│   │   └── OrderModel.ts
│   ├── repositories/            # Aggregation logic (MongoDB queries)
│   │   └── AggregationRepo.ts
│   ├── routes/                  # Express routing
│   │   └── AggregationRoute.ts
│   ├── services/                # Service layer (business logic)
│   │   └── AggregationService.ts
│   ├── server.ts                # Entry point for server
│   └── seed.ts                  # Database seeding script
├── .env                         # Environment variables
├── .env.sample                  # Sample environment file
├── package.json                 # NPM package definitions
├── package-lock.json            # NPM dependency lock
├── tsconfig.json                # TypeScript configuration
├── README.md
```

---

## 📬 Author

Made with ❤️ by [Nishint Goyal](https://github.com/nishint-successiveTech)

