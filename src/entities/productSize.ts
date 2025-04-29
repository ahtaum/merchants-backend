export class ProductSize {
    id: number;
    id_product: number;
    name: string;
    created_at: Date;
    updated_at: Date;
  
    constructor(
      id: number,
      id_product: number,
      name: string,
      created_at = new Date(),
      updated_at = new Date()
    ) {
      this.id = id;
      this.id_product = id_product;
      this.name = name;
      this.created_at = created_at;
      this.updated_at = updated_at;
    }
  }
  