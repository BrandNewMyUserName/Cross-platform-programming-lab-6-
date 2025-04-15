import { Lawnmower } from './lawnmower';

describe('Lawnmower', () => {
  // Тест на успішне створення об'єкта
  it('should create a Lawnmower with valid data', () => {
    const lawnmower = new Lawnmower(1, 'Eco Mower', 199.99, 'Germany', 45);
    expect(lawnmower.getID()).toBe(1);
    expect(lawnmower.getName()).toBe('Eco Mower');
    expect(lawnmower.getPrice()).toBe(199.99);
    expect(lawnmower.getCountry()).toBe('Germany');
    expect(lawnmower.getDetails()).toEqual(['Ширина зрізу: 45 см']);
    expect(lawnmower.getType()).toBe('Газонокосарка');
  });

  // Тести на валідацію
  it('should throw an error if cuttingWidth is not a positive number', () => {
    expect(() => new Lawnmower(1, 'Eco Mower', 199.99, 'Germany', -5)).toThrow('Ширина зрізу має бути додатнім числом.');
    expect(() => new Lawnmower(1, 'Eco Mower', 199.99, 'Germany', 0)).toThrow('Ширина зрізу має бути додатнім числом.');
  });

  // Тести на базову валідацію з BaseProduct
  it('should throw an error if id is not a positive integer', () => {
    expect(() => new Lawnmower(-1, 'Eco Mower', 199.99, 'Germany', 45)).toThrow('ID має бути додатнім цілим числом.');
    expect(() => new Lawnmower(1.5, 'Eco Mower', 199.99, 'Germany', 45)).toThrow('ID має бути додатнім цілим числом.');
  });

  it('should throw an error if name is empty', () => {
    expect(() => new Lawnmower(1, '', 199.99, 'Germany', 45)).toThrow('Назва товару не може бути порожньою.');
    expect(() => new Lawnmower(1, '   ', 199.99, 'Germany', 45)).toThrow('Назва товару не може бути порожньою.');
  });

  it('should throw an error if price is not a positive number', () => {
    expect(() => new Lawnmower(1, 'Eco Mower', -199.99, 'Germany', 45)).toThrow('Ціна має бути додатнім числом.');
    expect(() => new Lawnmower(1, 'Eco Mower', 0, 'Germany', 45)).toThrow('Ціна має бути додатнім числом.');
  });

  it('should throw an error if country is empty', () => {
    expect(() => new Lawnmower(1, 'Eco Mower', 199.99, '', 45)).toThrow('Країна виробника не може бути порожньою.');
    expect(() => new Lawnmower(1, 'Eco Mower', 199.99, '   ', 45)).toThrow('Країна виробника не може бути порожньою.');
  });
});