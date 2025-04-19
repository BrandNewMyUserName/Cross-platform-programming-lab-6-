
import { ConfigService } from '../config/config.service';
import { Injectable } from '@angular/core';
import { iProduct } from '../../class/interfaces/iProduct';
import { ProductFactory } from '../../class/factory/productFactory';
import { ProductType } from '../../class/ProductType';

const URL = "https://api.jsonbin.io/v3/b/67fed4b58a456b79668a30c3";

@Injectable({
  providedIn: 'root'
})
export class ReadService {
  data: any;
  public products: iProduct[] = [];
  searchProduct: iProduct[] = [];

  search(type: ProductType, country: string = '', minPrice: number | null = null, maxPrice: number | null = null) {
    this.searchProduct = this.products.filter((product: iProduct) => {
      const matchesType = product.getType() === type;
      const matchesCountry = country ? product.getCountry().toLowerCase().includes(country.toLowerCase()) : true;
      const matchesMinPrice = minPrice !== null ? product.getPrice() >= minPrice : true;
      const matchesMaxPrice = maxPrice !== null ? product.getPrice() <= maxPrice : true;
      return matchesType && matchesCountry && matchesMinPrice && matchesMaxPrice;
    });
    console.log('this.searchProduct:', this.searchProduct);
  }

  addProduct(product: iProduct) {
    this.products.push(product);
  }

  removeProduct(index: number) {
    if (index >= 0 && index < this.products.length) {
      this.products.splice(index, 1);
    }
  }

  updateProduct(index: number, updatedProduct: iProduct) {
    if (index >= 0 && index < this.products.length) {
      this.products[index] = updatedProduct;
    }
  }

  public async load() {
    this.data = [];
    try {
      const res = await fetch(URL);
      const json = await res.json();
      this.data = json.record;

      const products = this.data.map((item: any) => ProductFactory.createProduct(item));
      products.forEach((element: iProduct) => this.addProduct(element));

      let type = this.configService.type$.value;
      this.search(type);
    } catch (error) {
      console.error('Помилка при завантаженні даних:', error);
    }
  }

  constructor(private configService: ConfigService) {
    this.typeSub = this.configService.type$.subscribe(() => {
      let type = this.configService.type$.value;
      this.search(type);
    });
  }

  typeSub = this.configService.type$.subscribe(() => {
    let type = this.configService.type$.value;
    this.search(type);
  });
}