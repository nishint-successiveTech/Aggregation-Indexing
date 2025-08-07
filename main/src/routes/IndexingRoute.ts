import { Router } from "express";
import IndexingController from "../controllers/IndexingController";
class IndexingRoute {
  public static getAllIndexRoutes() {
    const router = Router();
    router.get("/checkIndexes", IndexingController.checkIndexes);
    router.get(
      "/createCustomerNameIndex",
      IndexingController.createCustomerNameIndex
    );
    router.get("/getCustByIndex", IndexingController.getCustomerByIndex);
    router.get("/getSDI", IndexingController.getStatusDateIndex);
    router.get(
      "/createProdIndex",
      IndexingController.createTextIndexOnProductName
    );
     router.get("/getSearch/:search", IndexingController.searchInProdIndex);
     router.get("/dropIndex/:index", IndexingController.dropIdx);
    return router;
  }
}

export default IndexingRoute;
