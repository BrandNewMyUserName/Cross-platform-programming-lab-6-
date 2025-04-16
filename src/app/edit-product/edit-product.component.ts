import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonCard, IonInput, IonCardTitle, IonCardHeader, IonItem, IonCardContent, IonLabel, IonButton, IonText } from '@ionic/angular/standalone';
import { ProductFactory } from '../class/factory/productFactory';
import { iProduct } from '../class/interfaces/iProduct';
import { productType } from '../class/ProductType';
import { formConstructor } from '../forms/formsConstructor';
import { CountryValidatorService } from '../validators/country-validator-service.service';
import { MaterialValidatorService } from '../validators/material-validator-service.service';
import { PriceValidatorService } from '../validators/price-validator-service.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
  imports: [
    IonCard, IonInput, IonCardTitle, IonCardHeader, IonItem, IonCardContent,
    IonLabel, IonButton, IonText, FormsModule, ReactiveFormsModule, CommonModule
  ],
  standalone: true
})
export class EditProductComponent implements OnInit {
  @Input() product!: iProduct;
  productForm!: FormGroup;
  types = productType;

  @Output() productEdit: EventEmitter<iProduct> = new EventEmitter<iProduct>();

  constructor(
    private fb: FormBuilder,
    private priceValidator: PriceValidatorService,
    private countryValidator: CountryValidatorService,
    private materialValidator: MaterialValidatorService
  ) {}

  onSubmit(): void {
    console.log('Форма надсилається:', this.productForm.value);
    console.log('Форма валідна:', this.productForm.valid);

    if (this.productForm.valid) {
      const formData = this.productForm.value;
      formData.productType = this.product.getType();
      formData.id = this.product.getID();
      const updatedProduct = ProductFactory.createProduct(formData);
      console.log('Оновлений продукт:', updatedProduct);
      this.productEdit.emit(updatedProduct);
    } else {
      console.error('Форма невалідна:', this.productForm.errors);
    }
  }

  ngOnInit() {
    this.productForm = this.fb.group({
      name: [
        this.product.getName(),
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(/^[A-Za-z\s]+$/)
        ]
      ],
      price: [
        this.product.getPrice(),
        [
          Validators.required,
          Validators.min(0.01),
          // Спрощуємо валідатор, щоб уникнути проблем із форматом
          this.priceValidator.maxPriceValidator()
        ]
      ],
      country: [
        this.product.getCountry(),
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(/^[A-Za-z\s]+$/),
          this.countryValidator.allowedCountryValidator()
        ]
      ]
    });

    formConstructor(
      this.product.getType(),
      this.productForm,
      this.fb,
      this.priceValidator,
      this.countryValidator,
      this.materialValidator
    );

    if (this.product.getType() === 'Lawnmower') {
      this.productForm.get('cuttingWidth')?.setValue((this.product as any).cuttingWidth);
    } else if (this.product.getType() === 'Shovel') {
      this.productForm.get('material')?.setValue((this.product as any).material);
    } else if (this.product.getType() === 'Seed') {
      this.productForm.get('plantType')?.setValue((this.product as any).plantType);
    } else if (this.product.getType() === 'IrrigationSystem') {
      this.productForm.get('coverageArea')?.setValue((this.product as any).coverageArea);
    }
  }
}