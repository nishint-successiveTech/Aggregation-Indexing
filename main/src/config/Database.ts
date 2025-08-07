import mongoose from "mongoose";
import AppConfig from "./AppConfig";

class Database {
  public static async connectDB() {
    try {
      const connectDB = await mongoose.connect(AppConfig.MONGO_URL);
      console.log("DB CONNECTED SUCCESSFULLY");
    } catch (error: any) {
      console.log("DB NOT CONNECTED");
    }
  }
}

export default Database;
