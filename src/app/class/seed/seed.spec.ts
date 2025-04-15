import { Seed } from './seed';

describe('Seed', () => {
  it('should create a Seed with valid data', () => {
    const seed = new Seed(1, 'Sunflower Seeds', 5.99, 'Ukraine', 'Sunflower');
    expect(seed.getID()).toBe(1);
    expect(seed.getName()).toBe('Sunflower Seeds');
    expect(seed.getPrice()).toBe(5.99);
    expect(seed.getCountry()).toBe('Ukraine');
    expect(seed.getDetails()).toEqual(['Тип рослини: Sunflower']);
    expect(seed.getType()).toBe('Насіння');
  });

  it('should throw an error if plantType is empty', () => {
    expect(() => new Seed(1, 'Sunflower Seeds', 5.99, 'Ukraine', '')).toThrow(new Error('Тип рослини не може бути порожнім.'));
    expect(() => new Seed(1, 'Sunflower Seeds', 5.99, 'Ukraine', '   ')).toThrow(new Error('Тип рослини не може бути порожнім.'));
  });

  it('should throw an error if id is not a positive integer', () => {
    expect(() => new Seed(-1, 'Sunflower Seeds', 5.99, 'Ukraine', 'Sunflower')).toThrow(new Error('ID має бути додатнім цілим числом.'));
  });

  it('should throw an error if name is empty', () => {
    expect(() => new Seed(1, '', 5.99, 'Ukraine', 'Sunflower')).toThrow(new Error('Назва товару не може бути порожньою.'));
  });

  it('should throw an error if price is not a positive number', () => {
    expect(() => new Seed(1, 'Sunflower Seeds', -5.99, 'Ukraine', 'Sunflower')).toThrow(new Error('Ціна має бути додатнім числом.'));
  });

  it('should throw an error if country is empty', () => {
    expect(() => new Seed(1, 'Sunflower Seeds', 5.99, '', 'Sunflower')).toThrow(new Error('Країна виробника не може бути порожньою.'));
  });
});