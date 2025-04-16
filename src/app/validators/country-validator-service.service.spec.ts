import { TestBed } from '@angular/core/testing';
import { CountryValidatorService } from './country-validator-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

describe('CountryValidatorService', () => {
  let service: CountryValidatorService;
  let fb: FormBuilder;
  let form: FormGroup;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryValidatorService, FormBuilder]
    });
    service = TestBed.inject(CountryValidatorService);
    fb = TestBed.inject(FormBuilder);
    form = fb.group({
      country: ['']
    });
  });

  it('should not return error for allowed country', () => {
    const control = form.get('country');
    control?.setValidators(service.allowedCountryValidator());
    control?.setValue('Germany');
    control?.updateValueAndValidity();
    expect(control?.errors).toBeNull();
  });

  it('should return error for disallowed country', () => {
    const control = form.get('country');
    control?.setValidators(service.allowedCountryValidator());
    control?.setValue('France');
    control?.updateValueAndValidity();
    expect(control?.errors).toEqual({ invalidCountry: { allowed: service['allowedCountries'], actual: 'France' } });
  });

  it('should not return error for empty country', () => {
    const control = form.get('country');
    control?.setValidators(service.allowedCountryValidator());
    control?.setValue('');
    control?.updateValueAndValidity();
    expect(control?.errors).toBeNull();
  });
});