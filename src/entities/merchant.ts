export class Merchant {
    id: number;
    id_user: number;
    name: string;
    location?: string;
    created_at: Date;
    updated_at: Date;
  
    constructor(
      id: number,
      id_user: number,
      name: string,
      location?: string,
      created_at = new Date(),
      updated_at = new Date()
    ) {
      this.id = id;
      this.id_user = id_user;
      this.name = name;
      this.location = location;
      this.created_at = created_at;
      this.updated_at = updated_at;
    }
  }
  