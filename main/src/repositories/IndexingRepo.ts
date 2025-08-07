import OrderModel from "../models/OrderModel";

class IndexingRepo {
  public static async checkIndexes() {
    const indexes = await OrderModel.collection.indexes();
    return indexes;
  }
  public static async createCustomerNameIndex() {
    const result = await OrderModel.collection.createIndex({ customerName: 1 });
    return result;
  }
  public static async createStatusDateIndex() {
    const result = await OrderModel.collection.createIndex({
      status: 1,
      orderDate: 1,
    });
    return result;
  }

  public static async getCustomerByIndex() {
    const result = await OrderModel.find({ customerName: "A5" }).explain(
      "executionStats"
    );
    return result;
  }
  public static async getStatusDateIndex() {
    const result = await OrderModel.find({
      status: "Delivered",
      orderDate: { $gte: new Date("2025-03-22") },
    }).explain("executionStats");
    return result;
  }
  public static async createTextIndexOnProductName() {
    const result = await OrderModel.collection.createIndex({
      "items.productName": "text",
    });
    return result;
  }
  public static async searchInProdIndex(productName: string) {
    const result = await OrderModel.find({
      $text: { $search: productName },
    });

    return result;
  }
   public static async dropIndex(indexName: string) {
    const result = await OrderModel.collection.dropIndex(indexName);
    return result;
  }
}

export default IndexingRepo;
