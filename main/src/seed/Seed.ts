import OrderModel from "../models/OrderModel";

class Seed {
  public static doSeeding() {
    const statusArr = ["Pending", "Shipped", "Delivered"];
    for (let i = 1; i <= 50; i++) {
      const orderId = "OrderId" + i;
      const customerName = "A" + i;
      const orderDate = Date.now();
      const status = statusArr[i % statusArr.length];
      const items = [
        {
          productName: "Laptop" + i,
          quantity: i * 30,
          price: i * 18,
        },
        {
          productName: "MobilePhone" + i,
          quantity: i * 19,
          price: i * 11,
        },
      ];
      const totalAmount = i * 20;
      OrderModel.insertOne({
        orderId: orderId,
        customerName: customerName,
        orderDate: orderDate,
        status: status,
        items: items,
        totalAmount: totalAmount,
      });
    }
  }
}

export default Seed;
