import { BaseProduct } from "../baseProduct";

export class Seed extends BaseProduct {
  constructor(
    id: number,
    name: string,
    price: number,
    country: string,
    private plantType: string
  ) {
    super(id, name, price, country);
    this.validatePlantType();
  }

  private validatePlantType(): void {
    if (typeof this.plantType !== 'string' || this.plantType.trim() === '') {
      throw new Error("Тип рослини не може бути порожнім.");
    }
  }

  getDetails(): string[] {
    return [`Тип рослини: ${this.plantType}`];
  }

  getType(): string {
    return "Seeds";
  }
}
