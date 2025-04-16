// import { TestBed } from '@angular/core/testing';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { productType } from '../class/ProductType';
// import { CountryValidatorService } from '../validators/country-validator-service.service';
// import { MaterialValidatorService } from '../validators/material-validator-service.service';
// import { PriceValidatorService } from '../validators/price-validator-service.service';
// import { formConstructor } from './formsConstructor';


// describe('formConstructor', () => {
//   let fb: FormBuilder;
//   let priceValidator: PriceValidatorService;
//   let countryValidator: CountryValidatorService;
//   let materialValidator: MaterialValidatorService;
//   let form: FormGroup;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         FormBuilder,
//         PriceValidatorService,
//         CountryValidatorService,
//         MaterialValidatorService
//       ]
//     });
//     fb = TestBed.inject(FormBuilder);
//     priceValidator = TestBed.inject(PriceValidatorService);
//     countryValidator = TestBed.inject(CountryValidatorService);
//     materialValidator = TestBed.inject(MaterialValidatorService);
//     form = fb.group({});
//   });

//   it('should add common fields for all product types', () => {
//     formConstructor(productType[0], form, fb, priceValidator, countryValidator, materialValidator);
//     expect(form.contains('id')).toBeTrue();
//     expect(form.contains('name')).toBeTrue();
//     expect(form.contains('price')).toBeTrue();
//     expect(form.contains('country')).toBeTrue();
//   });

//   it('should add material field for Shovel', () => {
//     formConstructor(productType[0], form, fb, priceValidator, countryValidator, materialValidator);
//     expect(form.contains('material')).toBeTrue();
//     expect(form.contains('cuttingWidth')).toBeFalse();
//     expect(form.contains('plantType')).toBeFalse();
//     expect(form.contains('coverageArea')).toBeFalse();
//   });

//   it('should add cuttingWidth field for Lawnmower', () => {
//     formConstructor(productType[1], form, fb, priceValidator, countryValidator, materialValidator);
//     expect(form.contains('cuttingWidth')).toBeTrue();
//     expect(form.contains('material')).toBeFalse();
//     expect(form.contains('plantType')).toBeFalse();
//     expect(form.contains('coverageArea')).toBeFalse();
//   });

//   it('should add plantType field for Seed', () => {
//     formConstructor(productType[2], form, fb, priceValidator, countryValidator, materialValidator);
//     expect(form.contains('plantType')).toBeTrue();
//     expect(form.contains('material')).toBeFalse();
//     expect(form.contains('cuttingWidth')).toBeFalse();
//     expect(form.contains('coverageArea')).toBeFalse();
//   });

//   it('should add coverageArea field for IrrigationSystem', () => {
//     formConstructor(productType[3], form, fb, priceValidator, countryValidator, materialValidator);
//     expect(form.contains('coverageArea')).toBeTrue();
//     expect(form.contains('material')).toBeFalse();
//     expect(form.contains('cuttingWidth')).toBeFalse();
//     expect(form.contains('plantType')).toBeFalse();
//   });

//   it('should validate id field', () => {
//     formConstructor(productType[0], form, fb, priceValidator, countryValidator, materialValidator);
//     const idControl = form.get('id');
//     idControl?.setValue(-1);
//     idControl?.updateValueAndValidity();
//     expect(idControl?.invalid).toBeTrue();
//     expect(idControl?.errors).toHaveProperty('min');

//     idControl?.setValue('invalid');
//     idControl?.updateValueAndValidity();
//     expect(idControl?.invalid).toBeTrue();
//     expect(idControl?.errors).toHaveProperty('pattern');
//   });

//   it('should validate name field', () => {
//     formConstructor(productType[0], form, fb, priceValidator, countryValidator, materialValidator);
//     const nameControl = form.get('name');
//     nameControl?.setValue('12');
//     nameControl?.updateValueAndValidity();
//     expect(nameControl?.invalid).toBeTrue();
//     expect(nameControl?.errors).toHaveProperty('pattern');

//     nameControl?.setValue('A');
//     nameControl?.updateValueAndValidity();
//     expect(nameControl?.invalid).toBeTrue();
//     expect(nameControl?.errors).toHaveProperty('minlength');
//   });

//   it('should validate price field with custom validator', () => {
//     formConstructor(productType[0], form, fb, priceValidator, countryValidator, materialValidator);
//     const priceControl = form.get('price');
//     priceControl?.setValue(1500);
//     priceControl?.updateValueAndValidity();
//     expect(priceControl?.invalid).toBeTrue();
//     expect(priceControl?.errors).toHaveProperty('maxPrice');

//     priceControl?.setValue(-1);
//     priceControl?.updateValueAndValidity();
//     expect(priceControl?.invalid).toBeTrue();
//     expect(priceControl?.errors).toHaveProperty('min');
//   });

//   it('should validate country field with custom validator', () => {
//     formConstructor(productType[0], form, fb, priceValidator, countryValidator, materialValidator);
//     const countryControl = form.get('country');
//     countryControl?.setValue('France');
//     countryControl?.updateValueAndValidity();
//     expect(countryControl?.invalid).toBeTrue();
//     expect(countryControl?.errors).toHaveProperty('invalidCountry');

//     countryControl?.setValue('Germany');
//     countryControl?.updateValueAndValidity();
//     expect(countryControl?.valid).toBeTrue();
//   });

//   it('should validate material field with custom validator', () => {
//     formConstructor(productType[0], form, fb, priceValidator, countryValidator, materialValidator);
//     const materialControl = form.get('material');
//     materialControl?.setValue('Wood');
//     materialControl?.updateValueAndValidity();
//     expect(materialControl?.invalid).toBeTrue();
//     expect(materialControl?.errors).toHaveProperty('invalidMaterial');

//     materialControl?.setValue('Stainless Steel');
//     materialControl?.updateValueAndValidity();
//     expect(materialControl?.valid).toBeTrue();
//   });
// });