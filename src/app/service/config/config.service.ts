import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductType, productType } from '../../class/ProductType';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  currentType = DEFAULT_TYPE;

  type$: BehaviorSubject<ProductType> = new BehaviorSubject<ProductType>(
   DEFAULT_TYPE
  );

  setType(type: ProductType) {
    console.log('setting type', this.type$);

    this.type$.next(type);
  }

}

const DEFAULT_TYPE = productType[0];