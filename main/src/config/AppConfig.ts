import dotenv from "dotenv";
dotenv.config();

class AppConfig {
  public static readonly PORT = process.env["PORT"] || "";
  public static readonly MONGO_URL = process.env["MONGO_URL"] || "";
}

export default AppConfig;
