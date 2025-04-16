import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { productType } from '../class/ProductType';
import { CountryValidatorService } from '../validators/country-validator-service.service';
import { MaterialValidatorService } from '../validators/material-validator-service.service';
import { PriceValidatorService } from '../validators/price-validator-service.service';


export function formConstructor(
  type: string,
  productForm: FormGroup,
  fb: FormBuilder,
  priceValidator: PriceValidatorService,
  countryValidator: CountryValidatorService,
  materialValidator: MaterialValidatorService
) {
  const controlsToRemove = ['cuttingWidth', 'material', 'plantType', 'coverageArea'];

  controlsToRemove.forEach((control) => {
    if (productForm.contains(control)) {
      productForm.removeControl(control);
    }
  });

  if (type === productType[0]) { // Shovel
    productForm.addControl('material', fb.control('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(/^[A-Za-z\s]+$/),
      materialValidator.allowedMaterialValidator()
    ]));
  } else if (type === productType[1]) { // Lawnmower
    productForm.addControl('cuttingWidth', fb.control('', [
      Validators.required,
      Validators.min(1),
      Validators.pattern(/^\d+$/)
    ]));
  } else if (type === productType[2]) { // Seed
    productForm.addControl('plantType', fb.control('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(/^[A-Za-z\s]+$/)
    ]));
  } else if (type === productType[3]) { // IrrigationSystem
    productForm.addControl('coverageArea', fb.control('', [
      Validators.required,
      Validators.min(1),
      Validators.pattern(/^\d+$/)
    ]));
  }
}