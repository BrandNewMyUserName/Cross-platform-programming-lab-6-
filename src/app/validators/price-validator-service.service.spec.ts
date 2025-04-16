import { PriceValidatorService } from './price-validator-service.service';
import { TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';

describe('PriceValidatorService', () => {
  let service: PriceValidatorService;
  let fb: FormBuilder;
  let form: FormGroup;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PriceValidatorService, FormBuilder]
    });
    service = TestBed.inject(PriceValidatorService);
    fb = TestBed.inject(FormBuilder);
    form = fb.group({
      price: ['']
    });
  });

  it('should not return error for price less than or equal to 1000', () => {
    const control = form.get('price');
    control?.setValidators(service.maxPriceValidator());
    control?.setValue(500);
    control?.updateValueAndValidity();
    expect(control?.errors).toBeNull();
  });

  it('should return error for price greater than 1000', () => {
    const control = form.get('price');
    control?.setValidators(service.maxPriceValidator());
    control?.setValue(1500);
    control?.updateValueAndValidity();
    expect(control?.errors).toEqual({ maxPrice: { max: 1000, actual: 1500 } });
  });

  it('should not return error for empty price', () => {
    const control = form.get('price');
    control?.setValidators(service.maxPriceValidator());
    control?.setValue('');
    control?.updateValueAndValidity();
    expect(control?.errors).toBeNull();
  });

  it('should return error for invalid price format', () => {
    const control = form.get('price');
    control?.setValidators(service.maxPriceValidator());
    control?.setValue('invalid');
    control?.updateValueAndValidity();
    expect(control?.errors).toEqual({ maxPrice: { max: 1000, actual: NaN } });
  });
});