import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MaterialValidatorService {
  // Список дозволених матеріалів для лопати
  private readonly allowedMaterials = ['Stainless Steel', 'Carbon Steel', 'Aluminum', 'Plastic'];

  allowedMaterialValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value?.trim();
      if (!value) {
        return null; // Пропускаємо, якщо значення не введено
      }
      return this.allowedMaterials.includes(value) ? null : { invalidMaterial: { allowed: this.allowedMaterials, actual: value } };
    };
  }
}