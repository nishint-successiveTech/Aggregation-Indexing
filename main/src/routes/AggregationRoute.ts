import AggregationController from "../controllers/AggregationController";
import { Router } from "express";

class AggregationRoute {
  public static getAggregationRoute() {
    const router = Router();
    router.get("/totalRevenue", AggregationController.totalRevenue);
    router.get("/orderByStatus", AggregationController.orderByStatus);
    router.get("/top3Customer", AggregationController.top3Customer);
    router.get(
      "/averageOrderPerCustomer",
      AggregationController.averageOrderPerCustomer
    );
    router.get("/prodSold10Times", AggregationController.proSold10Times);
    router.get("/monthlyRevenue", AggregationController.monthlyRevenue);
    router.get("/customerMoreThan2", AggregationController.customerMoreThan2_Order);
    router.get("/allProductNames", AggregationController.allProductNames);
    router.get("/deliveredOrderDetail",AggregationController.deliveredOrderDetail)
    router.get("/totalQAR",AggregationController.totalQuantityAndTotalRevenue)



    return router;
  }
}

export default AggregationRoute;
