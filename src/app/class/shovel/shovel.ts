import { BaseProduct } from "../baseProduct";

export class Shovel extends BaseProduct {
    constructor(
      id: number,
      name: string,
      price: number,
      country: string,
      private material: string
    ) {
      super(id, name, price, country);
      this.validateMaterial();
    }
  
    private validateMaterial(): void {
      if (typeof this.material !== 'string' || this.material.trim() === '') {
        throw new Error("Матеріал лопати не може бути порожнім.");
      }
    }
  
    getDetails(): string[] {
      return [`Матеріал: ${this.material}`];
    }
  
    getType(): string {
      return "Shovel";
    }
  }
  