import { IrrigationSystem } from "../irrigationSystem/irrigationSystem";
import { Lawnmower } from "../lawnmower/lawnmower";
import { Seed } from "../seed/seed";
import { Shovel } from "../shovel/shovel";
import { ProductFactory } from "./productFactory";


describe('ProductFactory', () => {
  it('should create a Lawnmower', () => {
    const data = { productType: 'Lawnmower', id: 1, name: 'Eco Mower', price: 199.99, country: 'Germany', cuttingWidth: 45 };
    const product = ProductFactory.createProduct(data);
    expect(product).toBeInstanceOf(Lawnmower);
    expect(product.getType()).toBe('Газонокосарка');
  });

  it('should create a Shovel', () => {
    const data = { productType: 'Shovel', id: 1, name: 'Steel Dig Pro', price: 29.99, country: 'China', material: 'Steel' };
    const product = ProductFactory.createProduct(data);
    expect(product).toBeInstanceOf(Shovel);
    expect(product.getType()).toBe('Лопата');
  });

  it('should create a Seed', () => {
    const data = { productType: 'Seed', id: 1, name: 'Sunflower Seeds', price: 5.99, country: 'Ukraine', plantType: 'Sunflower' };
    const product = ProductFactory.createProduct(data);
    expect(product).toBeInstanceOf(Seed);
    expect(product.getType()).toBe('Насіння');
  });

  it('should create an IrrigationSystem', () => {
    const data = { productType: 'IrrigationSystem', id: 1, name: 'SmartSprinkler', price: 89.99, country: 'USA', coverageArea: 100 };
    const product = ProductFactory.createProduct(data);
    expect(product).toBeInstanceOf(IrrigationSystem);
    expect(product.getType()).toBe('Поливальна система');
  });

  it('should throw an error for unknown product type', () => {
    const data = { productType: 'Unknown', id: 1, name: 'Test', price: 10, country: 'Test' };
    expect(() => ProductFactory.createProduct(data)).toThrow('Невідомий тип продукту');
  });
});