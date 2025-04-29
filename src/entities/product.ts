export class Product {
    id: number;
    id_merchant: number;
    name: string;
    location: string;
    price: number;
    created_at: Date;
    updated_at: Date;
  
    constructor(
      id: number,
      id_merchant: number,
      name: string,
      location: string,
      price = 0,
      created_at = new Date(),
      updated_at = new Date()
    ) {
      this.id = id;
      this.id_merchant = id_merchant;
      this.name = name;
      this.location = location;
      this.price = price;
      this.created_at = created_at;
      this.updated_at = updated_at;
    }
  }
  