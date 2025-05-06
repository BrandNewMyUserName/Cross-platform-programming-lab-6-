import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { EditProductComponent } from './edit-product.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { iProduct } from '../../class/interfaces/iProduct';
import { ProductFactory } from '../../class/factory/productFactory';
import { PriceValidatorService } from '../../service/validators/price/price-validator-service.service';
import { CountryValidatorService } from '../../service/validators/country/country-validator-service.service';
import { MaterialValidatorService } from '../../service/validators/material/material-validator-service.service';

describe('EditProductComponent', () => {
  let component: EditProductComponent;
  let fixture: ComponentFixture<EditProductComponent>;

  const fakeProduct: iProduct = ProductFactory.createProduct({
    name: 'Test Product',
    price: 10,
    country: 'Ukraine',
    productType: 'Shovel',
    material: 'Steel'
  });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), EditProductComponent, ReactiveFormsModule],
      providers: [
        FormBuilder,
        PriceValidatorService,
        CountryValidatorService,
        MaterialValidatorService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditProductComponent);
    component = fixture.componentInstance;

    component.product = fakeProduct;

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
