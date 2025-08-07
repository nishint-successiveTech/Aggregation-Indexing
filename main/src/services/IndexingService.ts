import IndexingRepo from "../repositories/IndexingRepo";

class IndexingService {
  public static async checkIndexes() {
    return await IndexingRepo.checkIndexes();
  }
  public static async createCustomerNameIndex() {
    return await IndexingRepo.createCustomerNameIndex();
  }
  public static async getCustomerByIndex() {
    return await IndexingRepo.getCustomerByIndex();
  }
  public static async getStatusDateIndex() {
    return await IndexingRepo.getStatusDateIndex();
  }
  public static async createTextIndexOnProductName() {
    return await IndexingRepo.createTextIndexOnProductName();
  }
  public static async searchInProdIndex(data: string) {
    return await IndexingRepo.searchInProdIndex(data);
  }
   public static async dropIdx(data: string) {
    return await IndexingRepo.dropIndex(data);
  }
}

export default IndexingService;
