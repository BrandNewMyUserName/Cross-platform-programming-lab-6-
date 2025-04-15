import { Lawnmower } from './lawnmower';

describe('Lawnmower', () => {
  it('should create a Lawnmower with valid data', () => {
    const lawnmower = new Lawnmower(1, 'Eco Mower', 199.99, 'Germany', 45);
    expect(lawnmower.getID()).toBe(1);
    expect(lawnmower.getName()).toBe('Eco Mower');
    expect(lawnmower.getPrice()).toBe(199.99);
    expect(lawnmower.getCountry()).toBe('Germany');
    expect(lawnmower.getDetails()).toEqual(['Ширина зрізу: 45 см']);
    expect(lawnmower.getType()).toBe('Газонокосарка');
  });

  it('should throw an error if cuttingWidth is not a positive number', () => {
    expect(() => new Lawnmower(1, 'Eco Mower', 199.99, 'Germany', -5)).toThrow(new Error('Ширина зрізу має бути додатнім числом.'));
    expect(() => new Lawnmower(1, 'Eco Mower', 199.99, 'Germany', 0)).toThrow(new Error('Ширина зрізу має бути додатнім числом.'));
  });

  it('should throw an error if id is not a positive integer', () => {
    expect(() => new Lawnmower(-1, 'Eco Mower', 199.99, 'Germany', 45)).toThrow(new Error('ID має бути додатнім цілим числом.'));
    expect(() => new Lawnmower(1.5, 'Eco Mower', 199.99, 'Germany', 45)).toThrow(new Error('ID має бути додатнім цілим числом.'));
  });

  it('should throw an error if name is empty', () => {
    expect(() => new Lawnmower(1, '', 199.99, 'Germany', 45)).toThrow(new Error('Назва товару не може бути порожньою.'));
    expect(() => new Lawnmower(1, '   ', 199.99, 'Germany', 45)).toThrow(new Error('Назва товару не може бути порожньою.'));
  });

  it('should throw an error if price is not a positive number', () => {
    expect(() => new Lawnmower(1, 'Eco Mower', -199.99, 'Germany', 45)).toThrow(new Error('Ціна має бути додатнім числом.'));
    expect(() => new Lawnmower(1, 'Eco Mower', 0, 'Germany', 45)).toThrow(new Error('Ціна має бути додатнім числом.'));
  });

  it('should throw an error if country is empty', () => {
    expect(() => new Lawnmower(1, 'Eco Mower', 199.99, '', 45)).toThrow(new Error('Країна виробника не може бути порожньою.'));
    expect(() => new Lawnmower(1, 'Eco Mower', 199.99, '   ', 45)).toThrow(new Error('Країна виробника не може бути порожньою.'));
  });
});