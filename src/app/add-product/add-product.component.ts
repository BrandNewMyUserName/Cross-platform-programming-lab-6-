import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonCard, IonInput, IonCardTitle, IonCardHeader, IonItem, IonCardContent, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonLabel, IonButton, IonText } from '@ionic/angular/standalone';
import { ProductFactory } from '../class/factory/productFactory';
import { ProductType, productType } from '../class/ProductType';
import { formConstructor } from '../forms/formsConstructor';
import { CountryValidatorService } from '../validators/country-validator-service.service';
import { MaterialValidatorService } from '../validators/material-validator-service.service';
import { PriceValidatorService } from '../validators/price-validator-service.service';
import { BaseProduct } from '../class/baseProduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  imports: [
    IonCard, IonInput, IonCardTitle, IonCardHeader, IonItem, IonCardContent,
    IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonLabel,
    IonButton, IonText, FormsModule, ReactiveFormsModule, CommonModule
  ],
  standalone: true
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  currentType: ProductType = 'Shovel'; // Початковий тип
  types = productType;

  @Output() productAdd: EventEmitter<BaseProduct> = new EventEmitter<BaseProduct>();

  constructor(
    private fb: FormBuilder,
    private priceValidator: PriceValidatorService,
    private countryValidator: CountryValidatorService,
    private materialValidator: MaterialValidatorService
  ) {
    this.productForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(/^[A-Za-z\s]+$/)
      ]],
      price: ['', [
        Validators.required,
        Validators.min(0.01),
        Validators.pattern(/^\d+(\.\d{1,2})?$/),
        this.priceValidator.maxPriceValidator()
      ]],
      country: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(/^[A-Za-z\s]+$/),
        this.countryValidator.allowedCountryValidator()
      ]]
    });
  }

  onTypeChange(type: any): void {
    this.currentType = type as ProductType;
    formConstructor(type, this.productForm, this.fb, this.priceValidator, this.countryValidator, this.materialValidator);
  }

  onSubmit(): void {
    console.log('Спроба надіслати форму', this.productForm.value);

    if (this.productForm.valid) {
      const formData = this.productForm.value;
      formData.productType = this.currentType;
      formData.id = Math.floor(Math.random() * 1000) + 1; // Генеруємо випадковий ID
      const product = ProductFactory.createProduct(formData);
      console.log('Успішно створено: ', product);
      this.productAdd.emit(product);
    } else {
      console.error('Form is invalid:', this.productForm);
    }
  }



  ngOnInit() {
    this.onTypeChange(this.currentType);
  }
}