import { Request, Response, NextFunction } from "express";
import IndexingService from "../services/IndexingService";

class IndexingController {
  public static async checkIndexes(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const data = await IndexingService.checkIndexes();
    res.json({
      success: true,
      data: data,
    });
  }
  public static async createCustomerNameIndex(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const data = await IndexingService.createCustomerNameIndex();
    res.json({
      success: true,
      data: data,
    });
  }
  public static async getCustomerByIndex(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const data = await IndexingService.getCustomerByIndex();
    res.json({
      success: true,
      data: data,
    });
  }
  public static async getStatusDateIndex(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const data = await IndexingService.getStatusDateIndex();
    res.json({
      success: true,
      data: data,
    });
  }
  public static async createTextIndexOnProductName(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const data = await IndexingService.createTextIndexOnProductName();
    res.json({
      success: true,
      data: data,
    });
  }
  public static async searchInProdIndex(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const search = req.params.search;
    const data = await IndexingService.searchInProdIndex(search);
    res.json({
      success: true,
      data: data,
    });
  }
   public static async dropIdx(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const index = req.params.index;
    const data = await IndexingService.dropIdx(index);
    res.json({
      success: true,
      data: data,
    });
  }
}

export default IndexingController;
