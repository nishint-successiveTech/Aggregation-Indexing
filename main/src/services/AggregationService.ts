import AggregationRepo from "../repositories/AggregationRepo";

class AggregationService {
  public static async totalRevenue() {
    return await AggregationRepo.totalRevenue();
  }
  public static async orderByStatus() {
    return await AggregationRepo.orderByStatus();
  }
  public static async top3Customer() {
    return await AggregationRepo.top3Customer();
  }
  public static async averageOrderPerCustomer() {
    return await AggregationRepo.averageOrderPerCustomer();
  }
  public static async prodSold10Times() {
    return await AggregationRepo.prodSold10Times();
  }
  public static async monthlyRevenue() {
    return await AggregationRepo.monthlyRevenue();
  }
  public static async customerMoreThan2_Order() {
    return await AggregationRepo.customerMoreThan2_Order();
  }
  public static async allProductsNames() {
    return await AggregationRepo.allProductNames();
  }
  public static async deliveredOrderDetail() {
    return await AggregationRepo.deliveredOrderDetail();
  }
  public static async totalQuantityAndTotalRevenue() {
    return await AggregationRepo.totalQuantityAndTotalRevenue();
  }
  
}

export default AggregationService;
