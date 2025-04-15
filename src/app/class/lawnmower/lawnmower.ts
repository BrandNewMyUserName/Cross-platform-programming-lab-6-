import { BaseProduct } from "../baseProduct";

export class Lawnmower extends BaseProduct {
  constructor(
    id: number,
    name: string,
    price: number,
    country: string,
    private cuttingWidth: number
  ) {
    super(id, name, price, country);
    this.validateCuttingWidth();
  }

  private validateCuttingWidth(): void {
    if (typeof this.cuttingWidth !== 'number' || this.cuttingWidth <= 0) {
      throw new Error("Ширина зрізу має бути додатнім числом.");
    }
  }

  getDetails(): string[] {
    return [`Ширина зрізу: ${this.cuttingWidth} см`];
  }

  getType(): string {
    return "Газонокосарка";
  }
}
