import AggregationService from "../services/AggregationService";
import { Request, Response, NextFunction } from "express";

class AggregationController {
  public static async totalRevenue(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await AggregationService.totalRevenue();
      res.status(200).json({
        success: true,
        data: data,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
      });
    }
  }
  public static async orderByStatus(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await AggregationService.orderByStatus();
      res.status(200).json({
        success: true,
        data: data,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
      });
    }
  }
  public static async top3Customer(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await AggregationService.top3Customer();
      res.status(200).json({
        success: true,
        data: data,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
      });
    }
  }
  public static async averageOrderPerCustomer(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await AggregationService.averageOrderPerCustomer();
      res.status(200).json({
        success: true,
        data: data,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
      });
    }
  }
  public static async proSold10Times(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await AggregationService.prodSold10Times();
      res.status(200).json({
        success: true,
        data: data,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
      });
    }
  }
  public static async monthlyRevenue(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await AggregationService.monthlyRevenue();
      res.status(200).json({
        success: true,
        data: data,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
      });
    }
  }
  public static async customerMoreThan2_Order(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await AggregationService.customerMoreThan2_Order();
      res.status(200).json({
        success: true,
        data: data,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
      });
    }
  }
  public static async allProductNames(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await AggregationService.allProductsNames();
      res.status(200).json({
        success: true,
        data: data,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
      });
    }
  }
    public static async deliveredOrderDetail(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await AggregationService.deliveredOrderDetail();
      res.status(200).json({
        success: true,
        data: data,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
      });
    }
  }
   public static async totalQuantityAndTotalRevenue(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await AggregationService.totalQuantityAndTotalRevenue();
      res.status(200).json({
        success: true,
        data: data,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
      });
    }
  }
}

export default AggregationController;
