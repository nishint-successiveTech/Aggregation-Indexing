import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  orderId: {
    type: String,
  },
  customerName: {
    type: String,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["Pending", "Shipped", "Delivered"],
  },
  items: [
    {
      productName: {
        type: String,
      },
      quantity: {
        type: Number,
      },
      price: {
        type: Number,
      },
    },
  ],
  totalAmount: {
    type: Number,
  },
});

const OrderModel = mongoose.model("Orders2", OrderSchema);

export default OrderModel;
