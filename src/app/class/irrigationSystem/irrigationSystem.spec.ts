import { IrrigationSystem } from './irrigationSystem';
describe('IrrigationSystem', () => {
  it('should create an IrrigationSystem with valid data', () => {
    const irrigationSystem = new IrrigationSystem(1, 'SmartSprinkler', 89.99, 'USA', 100);
    expect(irrigationSystem.getID()).toBe(1);
    expect(irrigationSystem.getName()).toBe('SmartSprinkler');
    expect(irrigationSystem.getPrice()).toBe(89.99);
    expect(irrigationSystem.getCountry()).toBe('USA');
    expect(irrigationSystem.getDetails()).toEqual(['Покриття: 100 м²']);
    expect(irrigationSystem.getType()).toBe('Поливальна система');
  });

  it('should throw an error if coverageArea is not a positive number', () => {
    expect(() => new IrrigationSystem(1, 'SmartSprinkler', 89.99, 'USA', -100)).toThrow('Площа покриття має бути додатньою.');
    expect(() => new IrrigationSystem(1, 'SmartSprinkler', 89.99, 'USA', 0)).toThrow('Площа покриття має бути додатньою.');
  });

  it('should throw an error if id is not a positive integer', () => {
    expect(() => new IrrigationSystem(-1, 'SmartSprinkler', 89.99, 'USA', 100)).toThrow('ID має бути додатнім цілим числом.');
  });

  it('should throw an error if name is empty', () => {
    expect(() => new IrrigationSystem(1, '', 89.99, 'USA', 100)).toThrow('Назва товару не може бути порожньою.');
  });

  it('should throw an error if price is not a positive number', () => {
    expect(() => new IrrigationSystem(1, 'SmartSprinkler', -89.99, 'USA', 100)).toThrow('Ціна має бути додатнім числом.');
  });

  it('should throw an error if country is empty', () => {
    expect(() => new IrrigationSystem(1, 'SmartSprinkler', 89.99, '', 100)).toThrow('Країна виробника не може бути порожньою.');
  });
});