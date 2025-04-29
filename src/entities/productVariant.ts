export class ProductVariant {
    id: number;
    id_product_colour: number;
    id_product_size: number;
    id_product: number;
    created_at: Date;
    updated_at: Date;
  
    constructor(
      id: number,
      id_product_colour: number,
      id_product_size: number,
      id_product: number,
      created_at = new Date(),
      updated_at = new Date()
    ) {
      this.id = id;
      this.id_product_colour = id_product_colour;
      this.id_product_size = id_product_size;
      this.id_product = id_product;
      this.created_at = created_at;
      this.updated_at = updated_at;
    }
  }
  