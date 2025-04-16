import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PriceValidatorService {
  // Максимальна ціна
  private readonly MAX_PRICE = 1000;

  maxPriceValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (value == null || value === '') {
        return null; // Пропускаємо, якщо значення не введено
      }
      const price = Number(value);
      return !isNaN(price) && price <= this.MAX_PRICE ? null : { maxPrice: { max: this.MAX_PRICE, actual: price } };
    };
  }
}