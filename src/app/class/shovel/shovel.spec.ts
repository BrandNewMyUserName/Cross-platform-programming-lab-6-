import { Shovel } from './shovel';

describe('Shovel', () => {
  it('should create a Shovel with valid data', () => {
    const shovel = new Shovel(1, 'Steel Dig Pro', 29.99, 'China', 'Stainless Steel');
    expect(shovel.getID()).toBe(1);
    expect(shovel.getName()).toBe('Steel Dig Pro');
    expect(shovel.getPrice()).toBe(29.99);
    expect(shovel.getCountry()).toBe('China');
    expect(shovel.getDetails()).toEqual(['Матеріал: Stainless Steel']);
    expect(shovel.getType()).toBe('Shovel');
  });

  it('should throw an error if material is empty', () => {
    expect(() => new Shovel(1, 'Steel Dig Pro', 29.99, 'China', '')).toThrow(new Error('Матеріал лопати не може бути порожнім.'));
    expect(() => new Shovel(1, 'Steel Dig Pro', 29.99, 'China', '   ')).toThrow(new Error('Матеріал лопати не може бути порожнім.'));
  });

  it('should throw an error if id is not a positive integer', () => {
    expect(() => new Shovel(-1, 'Steel Dig Pro', 29.99, 'China', 'Steel')).toThrow(new Error('ID має бути додатнім цілим числом.'));
  });

  it('should throw an error if name is empty', () => {
    expect(() => new Shovel(1, '', 29.99, 'China', 'Steel')).toThrow(new Error('Назва товару не може бути порожньою.'));
  });

  it('should throw an error if price is not a positive number', () => {
    expect(() => new Shovel(1, 'Steel Dig Pro', -29.99, 'China', 'Steel')).toThrow(new Error('Ціна має бути додатнім числом.'));
  });

  it('should throw an error if country is empty', () => {
    expect(() => new Shovel(1, 'Steel Dig Pro', 29.99, '', 'Steel')).toThrow(new Error('Країна виробника не може бути порожньою.'));
  });
});