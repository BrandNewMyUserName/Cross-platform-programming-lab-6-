import { TestBed } from '@angular/core/testing';
import { MaterialValidatorService } from './material-validator-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

describe('MaterialValidatorService', () => {
  let service: MaterialValidatorService;
  let fb: FormBuilder;
  let form: FormGroup;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaterialValidatorService, FormBuilder]
    });
    service = TestBed.inject(MaterialValidatorService);
    fb = TestBed.inject(FormBuilder);
    form = fb.group({
      material: ['']
    });
  });

  it('should not return error for allowed material', () => {
    const control = form.get('material');
    control?.setValidators(service.allowedMaterialValidator());
    control?.setValue('Stainless Steel');
    control?.updateValueAndValidity();
    expect(control?.errors).toBeNull();
  });

  it('should return error for disallowed material', () => {
    const control = form.get('material');
    control?.setValidators(service.allowedMaterialValidator());
    control?.setValue('Wood');
    control?.updateValueAndValidity();
    expect(control?.errors).toEqual({ invalidMaterial: { allowed: service['allowedMaterials'], actual: 'Wood' } });
  });

  it('should not return error for empty material', () => {
    const control = form.get('material');
    control?.setValidators(service.allowedMaterialValidator());
    control?.setValue('');
    control?.updateValueAndValidity();
    expect(control?.errors).toBeNull();
  });
});