import { BaseProduct } from "../baseProduct";
import { IrrigationSystem } from "../irrigationSystem/irrigationSystem";
import { Lawnmower } from "../lawnmower/lawnmower";
import { ProductType } from "../ProductType";
import { Seed } from "../seed/seed";
import { Shovel } from "../shovel/shovel";



// Фабрика для створення продуктів
export class ProductFactory {
  static createProduct(data: any): BaseProduct {
    switch (data.productType as ProductType) {
      case 'Lawnmower':
        return new Lawnmower(
          data.id,
          data.name,
          data.price,
          data.country,
          data.cuttingWidth
        );

      case 'Shovel':
        return new Shovel(
          data.id,
          data.name,
          data.price,
          data.country,
          data.material
        );

      case 'Seed':
        return new Seed(
          data.id,
          data.name,
          data.price,
          data.country,
          data.plantType
        );

      case 'IrrigationSystem':
        return new IrrigationSystem(
          data.id,
          data.name,
          data.price,
          data.country,
          data.coverageArea
        );

      default:
        throw new Error('Невідомий тип продукту');
    }
  }
}