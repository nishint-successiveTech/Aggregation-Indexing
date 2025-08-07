import AppConfig from "./config/AppConfig";
import Database from "./config/Database";
import express, { Application } from "express";
import AggregationRoute from "./routes/AggregationRoute";
import IndexingRoute from "./routes/IndexingRoute";

class AppServer {
  private static app: Application = express();

  public static async run() {
    await this.connectDatabase();
    await this.Listen();
    await this.getAllRoutes();
  }
  private static async connectDatabase() {
    await Database.connectDB();
  }
  private static Listen() {
    this.app.listen(AppConfig.PORT, () => {
      console.log("PORT RUNNING SUCCESSFULLY ON " + AppConfig.PORT);
    });
  }
  private static getAllRoutes() {
    this.app.use("/api/aggregation", AggregationRoute.getAggregationRoute());
    this.app.use("/api/indexing", IndexingRoute.getAllIndexRoutes());
  }
}

export default AppServer;
