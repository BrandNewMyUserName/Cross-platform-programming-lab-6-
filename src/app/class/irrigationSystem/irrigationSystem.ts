import { BaseProduct } from "../baseProduct";

export class IrrigationSystem extends BaseProduct {
  constructor(
    id: number,
    name: string,
    price: number,
    country: string,
    private coverageArea: number
  ) {
    super(id, name, price, country);
    this.validateCoverage();
  }

  private validateCoverage(): void {
    if (typeof this.coverageArea !== 'number' || this.coverageArea <= 0) {
      throw new Error("Площа покриття має бути додатньою.");
    }
  }

  getDetails(): string[] {
    return [`Покриття: ${this.coverageArea} м²`];
  }

  getType(): string {
    return "Irrigation System";
  }
}
