import { Injectable } from '@angular/core';
import { iProduct } from '../class/interfaces/iProduct';
import { ProductFactory } from '../class/factory/productFactory';

const URL = "https://api.jsonbin.io/v3/b/67fed4b58a456b79668a30c3";

@Injectable({
  providedIn: 'root'
})
export class ReadService {
  data: any;
  public products: iProduct[] = [];

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
    } catch (error) {
      console.error('Помилка при завантаженні даних:', error);
    }
  }

  constructor() {}
  
}