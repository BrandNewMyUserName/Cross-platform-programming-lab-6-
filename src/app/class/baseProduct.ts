import { iProduct } from "./interfaces/iProduct";

export abstract class BaseProduct implements iProduct {
  constructor(
    protected id: number,
    protected name: string,
    protected price: number,
    protected country: string
  ) {
    this.validate();
  }

  private validate(): void {
    // In Firebase ids have string format 
    // if (!Number.isInteger(this.id) || this.id <= 0) {
    //   throw new Error("ID має бути додатнім цілим числом.");
    // }

    if (typeof this.name !== "string" || this.name.trim() === "") {
      throw new Error("Назва товару не може бути порожньою.");
    }

    if (typeof this.price !== "number" || this.price <= 0) {
      throw new Error("Ціна має бути додатнім числом.");
    }

    if (typeof this.country !== "string" || this.country.trim() === "") {
      throw new Error("Країна виробника не може бути порожньою.");
    }
  }

  getID(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  getCountry(): string {
    return this.country;
  }

  abstract getDetails(): string[];
  abstract getType(): string;
}
