import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CountryValidatorService {
  // Список дозволених країн
  private readonly allowedCountries = ['Germany', 'China', 'Ukraine', 'USA', 'Japan', 'Poland', 'Italy', 'Australia'];

  allowedCountryValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value?.trim();
      if (!value) {
        return null; // Пропускаємо, якщо значення не введено
      }
      return this.allowedCountries.includes(value) ? null : { invalidCountry: { allowed: this.allowedCountries, actual: value } };
    };
  }
}