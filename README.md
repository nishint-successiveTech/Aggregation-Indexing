
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
├── main/
│   ├── node_modules/                # Node.js dependencies
│   ├── screenshots/                 # Screenshots (e.g., Postman API results)
│   └── src/
│       ├── config/                  # Configuration files (e.g., DB setup)
│       │   ├── AppConfig.ts
│       │   └── Database.ts
│       ├── controllers/             # Controller layer (handles API requests)
│       │   ├── AggregationController.ts
│       │   └── IndexingController.ts
│       ├── models/                  # Mongoose schemas/models
│       │   └── OrderModel.ts
│       ├── repositories/            # DB query logic (aggregation/indexing)
│       │   ├── AggregationRepo.ts
│       │   └── IndexingRepo.ts
│       ├── routes/                  # Route definitions
│       │   ├── AggregationRoute.ts
│       │   └── IndexingRoute.ts
│       ├── seed/                    # DB seeding script
│       │   └── Seed.ts
│       ├── services/                # Business logic layer
│       │   ├── AggregationService.ts
│       │   └── IndexingService.ts
│       ├── index.ts                 # Base index file
│       └── server.ts                # Express server entry point
├── .env                             # Environment variables
├── .env.sample                      # Sample env file for setup reference
├── package.json                     # Project metadata and dependencies
├── package-lock.json                # Dependency lock file
├── tsconfig.json                    # TypeScript configuration
├── README.md                        # Project documentation
```

---


# Aggregation & Indexing - Project Report

## 📁 Dataset Creation

### ✅ Steps:
1. Created a Mongoose `OrderModel` with fields:
   - `orderId`, `customerName`, `orderDate`, `status`, `items[]`, `totalAmount`.
2. Inserted 50 dummy documents using a `Seed` class.
3. Sample JSON:
```json
{
  "orderId": "OrderId1",
  "customerName": "A1",
  "orderDate": "2025-08-01T00:00:00.000Z",
  "status": "Pending",
  "items": [
    {
      "productName": "ProdName1",
      "quantity": 30,
      "price": 18
    }
  ],
  "totalAmount": 600
}
```

---

## 📊 Aggregation Queries & Results

### 1. Total Revenue
```js
OrderModel.aggregate([{ $group: { _id: null, totalRevenue: { $sum: "$totalAmount" } } }])
```
**Result:**
```json
[{ "_id": null, "totalRevenue": 3315000 }]
```

### 2. Orders by Status
```js
OrderModel.aggregate([{ $group: { _id: "$status", count: { $sum: 1 } } }])
```

### 3. Top 3 Customers by Spend
```js
OrderModel.aggregate([
  { $group: { _id: "$customerName", totalSpent: { $sum: "$totalAmount" } } },
  { $sort: { totalSpent: -1 } },
  { $limit: 3 }
])
```

### 4. Avg Order Amount per Customer
```js
OrderModel.aggregate([
  { $group: { _id: "$customerName", avgAmount: { $avg: "$totalAmount" } } }
])
```

### 5. Products Sold More Than 10 Times
```js
OrderModel.aggregate([
  { $unwind: "$items" },
  { $group: { _id: "$items.productName", totalQty: { $sum: "$items.quantity" } } },
  { $match: { totalQty: { $gt: 10 } } }
])
```

### 6. Monthly Revenue (Last 6 Months)
```js
OrderModel.aggregate([
  { $match: { orderDate: { $gte: new Date(/*6 months ago*/) } } },
  { $group: {
    _id: { $dateToString: { format: "%Y-%m", date: "$orderDate" } },
    monthlyRevenue: { $sum: "$totalAmount" }
  }}
])
```

### 7. Customers with > 2 Orders
```js
OrderModel.aggregate([
  { $group: { _id: "$customerName", count: { $sum: 1 } } },
  { $match: { count: { $gt: 2 } } }
])
```

### 8. Product Names Only
```js
OrderModel.aggregate([
  { $unwind: "$items" },
  { $project: { _id: 0, productName: "$items.productName" } }
])
```

### 9. Revenue from Delivered Orders
```js
OrderModel.aggregate([
  { $match: { status: "Delivered" } },
  { $group: { _id: null, revenue: { $sum: "$totalAmount" } } }
])
```

### 10. Quantity & Revenue per Product
```js
OrderModel.aggregate([
  { $unwind: "$items" },
  { $group: {
    _id: "$items.productName",
    totalQty: { $sum: "$items.quantity" },
    totalRevenue: { $sum: { $multiply: ["$items.quantity", "$items.price"] } }
  }}
])
```

---

## 📌 Indexing Queries & Performance

### ✅ Created Indexes
- `customerName`: `createIndex({ customerName: 1 })`
- Compound: `createIndex({ status: 1, orderDate: -1 })`
- Text: `createIndex({ "items.productName": "text" })`

### ✅ Query Performance with Explain

#### Before Index:
```js
OrderModel.find({ customerName: "A5" }).explain("executionStats")
```
**Execution time:** ~10-15 ms

#### After Index:
```js
OrderModel.find({ customerName: "A5" }).explain("executionStats")
```
**Execution time:** ~1-3 ms ✅ Faster

### 🧪 Dropping Index:
```js
OrderModel.collection.dropIndex("customerName_1")
```

---

## 📚 Observations & Learnings

- `$group` and `$unwind` are very powerful for analytics.
- Indexes drastically improve performance for frequent queries.
- Compound indexes are great for multi-field filtering.
- Text indexes allow partial or fuzzy search for strings.

---


## 📬 Author

Made with ❤️ by [Nishint Goyal](https://github.com/nishint-successiveTech)

