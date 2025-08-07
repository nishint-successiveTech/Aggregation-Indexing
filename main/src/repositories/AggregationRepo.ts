import OrderModel from "../models/OrderModel";

class AggregationRepo {
  public static async totalRevenue() {
    const totalAmount = await OrderModel.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$totalAmount" },
        },
      },
    ]);
    return totalAmount;
  }
  public static async orderByStatus() {
    const totalAmount = await OrderModel.aggregate([
      {
        $group: {
          _id: "$status",
          totalOrders: { $sum: 1 },
        },
      },
    ]);
    return totalAmount;
  }
  public static async top3Customer() {
    const totalAmount = await OrderModel.aggregate([
      {
        $group: {
          _id: "$customerName",
          totalSpent: { $sum: "$totalAmount" },
        },
      },
      {
        $sort: { totalSpent: -1 },
      },
      {
        $limit: 3,
      },
    ]);
    return totalAmount;
  }
  public static async averageOrderPerCustomer() {
    const totalAmount = await OrderModel.aggregate([
      {
        $group: {
          _id: "$customerName",
          totalAmount: { $sum: "$totalAmount" },
          totalOrders: { $sum: 1 },
        },
      },
      {
        $project: {
          customerName: "$_id",
          _id: 0,
          averageOrderAmount: { $divide: ["$totalAmount", "$totalOrders"] },
        },
      },
    ]);

    return totalAmount;
  }
  public static async prodSold10Times() {
    const totalAmount = await OrderModel.aggregate([
      {
        $unwind: "$items",
      },
      {
        $group: {
          _id: "$items.productName",
          totalQuantity: { $sum: "$item.quantity" },
        },
      },
      {
        $match: {
          totalQuantity: { $gt: 10 },
        },
      },
    ]);

    return totalAmount;
  }
  public static async monthlyRevenue() {
    const finalData = await OrderModel.aggregate([
      {
        $match: {
          orderDate: {
            $gte: new Date(new Date().setMonth(new Date().getMonth() - 5)),
          },
        },
      },
      {
        $group: {
          _id: {
            month: { $month: "$orderDate" },
            year: { $year: "$orderDate" },
          },
          totalRevenue: {
            $sum: "$totalAmount",
          },
        },
      },
      {
        $sort: { "-id.year": 1, "-id.month": 1 },
      },
    ]);

    return finalData;
  }
  public static async customerMoreThan2_Order() {
    const finalData = await OrderModel.aggregate([
      {
        $group: {
          _id: "$customerName",
          totalOrders: { $sum: 1 },
        },
      },
      {
        $match: {
          totalOrders: { $gt: 2 },
        },
      },
    ]);

    return finalData;
  }
  public static async allProductNames() {
    const finalData = await OrderModel.aggregate([
      {
        $unwind: "$items",
      },
      {
        $project: {
          _id: 0,
          productName: "$items.productName",
        },
      },
    ]);

    return finalData;
  }
  public static async deliveredOrderDetail() {
    const finalData = await OrderModel.aggregate([
      {
        $match: {
          status: "Delivered",
        },
      },
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$totalAmount" },
        },
      },
    ]);

    return finalData;
  }
  public static async totalQuantityAndTotalRevenue() {
    const finalData = await OrderModel.aggregate([
      {
        $unwind: "$items",
      },
      {
        $group: {
          _id: "$items.productName",
          totalQuantity: { $sum: "$items.quantity" },
          totalRevenue: {
            $sum: {
              $multiply: ["$items.quantity", "$items.price"],
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          productName: "$_id",
          totalQuantity: 1,
          totalRevenue: 1,
        },
      },
    ]);

    return finalData;
  }
}

export default AggregationRepo;
